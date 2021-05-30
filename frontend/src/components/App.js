import Footer from './Footer';
import Main from './Main';
import Login from './Login';
import Register from './Register';
import {useState, useEffect} from 'react';
import { Route, Switch, Redirect, useHistory} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import api from '../utils/api'
import CurrentUserContext from '../contexts/CurrentUserContext';
import CurrentCardContext from '../contexts/CurrentCardContext';
import * as Auth from './Auth';


function App() {
    const [isOpenInfoTooltip, setIsOpenInfoTooltip] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [currentCards, setCurrentCards] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [infoTooltipImage, setInfoTooltipImage] = useState('');
    const [infoTooltipText, setInfoTooltipText] = useState('');

    // useEffect(() => {
    //   tokenCheck()
    // }, [])

    const handleLogin = ({ password, email  }) => {
      return Auth.authorize(password, email)
        .then((data) => {
          if (!data) throw new Error('Неверные имя пользователя или пароль')
          if (data.token) {
            setLoggedIn(true)
            localStorage.setItem('token', data.token)
            infoTooltipPopup(data);
            Auth.getContent(data.token)
              .then(data => {
                  setCurrentUser(data.data);
              })
              .catch((err)=>{console.log(err)})
            Auth.getCards(data.token)
              .then(data => {
                setCurrentCards(data.data);
              })
              .catch((err)=>{console.log(err)})
            return;
          }
        })
        .catch((err) => 
            infoTooltipPopup(err)
          )
    }

    const  infoTooltipPopupRegister = (data) => {
      console.log(data);
      console.log(data.message);
      // isInfoTooltipPopupOpen();
      if (data.message){
        console.log(11, infoTooltipImage);
        setIsOpenInfoTooltip(true);
        setInfoTooltipImage(`url(../images/Union.png)`);
        setInfoTooltipText('Вы успешно авторизировались!');
        console.log(12, infoTooltipText, infoTooltipImage);
      } else {
        setIsOpenInfoTooltip(true);
        console.log(21, isOpenInfoTooltip ,infoTooltipText, infoTooltipImage);
        setInfoTooltipImage('../images/NotUnion.png');
        setInfoTooltipText('Что-то пошло не так! Попробуйте ещё раз.');
        console.log(22, infoTooltipText, infoTooltipImage);
      }
    }

    const handleRegister = ({ password, email }) => {
      return Auth.register({ password, email })
        .then((res) => {
          if (!res || res.statusCode === 400) throw new Error('Что-то пошло не так');
          history.push("/signin");
          infoTooltipPopupRegister(res);
          return res;
        })
        .catch((err) => {
          infoTooltipPopupRegister(err);
        });
    }
    const history = useHistory();

    useEffect(() => {
      tokenCheck()
    }, [])

    const tokenCheck = () => {
      if (localStorage.getItem('token')) {
        let token = localStorage.getItem('token');
        Auth.getContent(token).then(({data}) => {
          if (data._id) {
            setLoggedIn(true)
            setCurrentUser(data)
          }
      })
    }
  }
    
      useEffect(() => {
        if (loggedIn) {
          history.push("/main");
        }
      }, [loggedIn])

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        
        api.postLike(card._id, !isLiked).then((newCard) => {
            setCurrentCards((state) => state.map((c) => c._id === card._id ? newCard.data : c));
        })
        .catch((err)=>{console.log(err)}) 
    }

    const handleCardDelete = (cardId) =>{
        const cards = currentCards.filter(card => card._id !== cardId);

        api.deleteCard(cardId)
            .then(() =>{
                setCurrentCards(cards)
            })
    }

    const handleUpdateCard = (obj) =>{
        api.postCard(obj)
            .then(newCard => {
                setCurrentCards([newCard.data, ...currentCards]);
            })
            .catch((err)=>{console.log(err)})
    }

    const handleUpdateAvatar = (props) =>{
        api.changeAvatar(props)
            .then(data =>{
                setCurrentUser(data);
            })
            .catch((err)=>{console.log(err)})
    }

    const handleUpdateUser = (data) =>{
        api.changeProfile(data)
            .then(data =>{
                setCurrentUser(data);
            })
            .catch((err)=>{console.log(err)})
    }

    const isInfoTooltipPopupOpen = () =>{
      setIsOpenInfoTooltip(true);
    }

    const closeInfoTooltipPopup = () => {
        setIsOpenInfoTooltip(false);
    }

    const signOut = () =>{
      localStorage.removeItem('token');
      history.push('/singin');
      setLoggedIn(false);
    }

    const  infoTooltipPopup = (data) => {
      isInfoTooltipPopupOpen();
      if (localStorage.token || data.message){
        setInfoTooltipImage(`url(../images/Union.png)`);
        setInfoTooltipText('Вы успешно авторизировались!');
        console.log(12, infoTooltipImage);
      } else {
        console.log(2)
        setInfoTooltipImage('../images/NotUnion.png');
        setInfoTooltipText('Что-то пошло не так! Попробуйте ещё раз.');
      }
    }

  useEffect(()=>{
      api.getCards()
      .then(data => {
          setCurrentCards(data.data);
      })
      .catch((err)=>{console.log(err)})
  },[])

  return (
    <div className="root">
        <CurrentUserContext.Provider value={currentUser}>
            <CurrentCardContext.Provider value={[currentCards, setCurrentCards]}>
                <Switch>
                    <ProtectedRoute path="/main" 
                        loggedIn={loggedIn} 
                        signOut={signOut}
                        component={Main}
                        onHandleCardLike = {handleCardLike}
                        onHandleCardDelete = {handleCardDelete}
                        cards={currentCards}
                        handleUpdateUser={handleUpdateUser}
                        handleUpdateAvatar={handleUpdateAvatar}
                        handleUpdateCard={handleUpdateCard}
                        infoTooltipImage={infoTooltipImage}
                        infoTooltipText={infoTooltipText}
                        isOpenInfoTooltip={isOpenInfoTooltip}
                        closeInfoTooltipPopup={closeInfoTooltipPopup}                        
                    />
                    <Route exact path='/signin'>
                        <Login 
                          onLogin={handleLogin}
                          infoTooltipImage={infoTooltipImage}
                          infoTooltipText={infoTooltipText}
                          isOpenInfoTooltip={isOpenInfoTooltip}
                          closeInfoTooltipPopup={closeInfoTooltipPopup}                        
                        />
                    </Route>
                    <Route path='/signup'>
                        <Register onRegister={handleRegister}/>
                    </Route>
                     <Route>
                        {loggedIn ? <Redirect to="/main" /> : <Redirect to="/signin" />}
                    </Route>
                </Switch>
                <Footer/>
            </CurrentCardContext.Provider>
        </CurrentUserContext.Provider>        
    </div>
  );
}

export default App;
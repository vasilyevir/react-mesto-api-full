import Header from './Header';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import InfoTooltip from './InfoTooltip';


function Login(props) {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
      })
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
        ...userData,
        [name]: value
    })
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    props.onLogin(userData)
    .catch(err => setMessage(err.message || 'Что-то пошло не так'));
    }

    // const history = useHistory();



    return(
        <>
            <Header>
                <>
                    <Link className="login__link login__link_header" to="/signup">Регистрация</Link>
                </>
            </Header>
            <div className="login">
                <h1 className="login__header">Вход</h1>
                <form className="login__form" onSubmit={handleSubmit}>
                    <input id="email" type="email" name="email" className="login__input" onChange={handleChange} value={userData.email} placeholder="Email"/>
                    <input id="password" type="password" name="password" className="login__input" onChange={handleChange} value={userData.password} placeholder="Пароль"/>
                    <button className="login__button">Войти</button>
                </form>
                {/* <p className="login__registr">Уже зарегистрированы? <Link className="login__link" to="/sing-up">Войти</Link> </p> */}
            </div>
            <InfoTooltip
                    onClose={props.closeInfoTooltipPopup}
                    image={props.infoTooltipImage}
                    text={props.infoTooltipText}
                    isOpenInfoTooltip={props.isOpenInfoTooltip}
                />
        </>
    )
    
}

export default Login;
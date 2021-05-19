const Cards = require('../models/cards');
const Users = require('../models/users');
const NotFoundError = require('../Errors/NotFoundError');
const RequestError = require('../Errors/RequestError');

module.exports.getCards = (req, res, next) => {
  Cards.find({})
    .then((cards) => {
      res.send({ data: cards });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  Cards.create({ name, link, owner })
    .then((cards) => {
      res.send({ data: cards });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new RequestError('Переданы некорректные данные при создании карточки.'));
        return;
      }
      next(err);
    });
};

module.exports.deleteСard = (req, res, next) => {
  Cards.findById(req.params.cardId)
    .then((cards) => {
      if (cards) {
        if (cards.owner.toString() === req.user._id.toString()) {
          Cards.findByIdAndRemove(req.params.cardId)
            .then((card) => {
              res.send({ data: card });
            });
        } else {
          throw new RequestError('Вы не можете удалить чужую карточку');
        }
      } else {
        throw new NotFoundError('Карточка с указанным _id не найдена.');
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new RequestError('Переданы некорректные данные при удалении карточки.'));
        return;
      }
      next(err);
    });
};

module.exports.likeCard = (req, res, next) => {
  Users.findById(req.user._id)
    .then((userInfo) => {
      console.log(userInfo);
      Cards.findByIdAndUpdate(
        req.params.cardId,
        { $addToSet: { likes: userInfo } },
        { new: true },
      )
        .then((cards) => {
          console.log(cards);
          if (cards) {
            res.send({ data: cards });
          } else {
            throw new NotFoundError('Переданы некорректные данные для постановки лайка.');
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.name === 'CastError') {
            next(new RequestError('Переданы некорректные данные при постановке лайка.'));
            return;
          }
          next(err);
        });
    });
};

module.exports.dislikeCard = (req, res, next) => {
  Users.findById(req.user._id)
    .then((userInfo) => {
      Cards.findByIdAndUpdate(
        req.params.cardId,
        { $pull: { likes: userInfo } },
        { new: true },
      )
        .then((cards) => {
          if (cards) {
            res.send({ data: cards });
          } else {
            throw new NotFoundError('Переданы некорректные данные для снятии лайка.');
          }
        })
        .catch((err) => {
          if (err.name === 'CastError') {
            next(new RequestError('Переданы некорректные данные при снятие лайка.'));
            return;
          }
          next(err);
        });
    });
};

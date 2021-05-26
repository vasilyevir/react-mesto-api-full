const routes = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getCards, createCard, deleteСard, likeCard, dislikeCard,
} = require('../controllers/cards');

routes.get('/', getCards);
routes.post('/', celebrate({
  params: Joi.object().keys({
    _id: Joi.string().alphanum().length(24),
  }),
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    link: Joi.string().regex(/^https?:\/\/(www\.)?([a-zA-Z0-9-._~:/?#[]@!\$&'()\*\+,;=]\/)*/),
  }),
}), createCard);
routes.delete('/:cardId', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().alphanum().length(24),
  }),
}), deleteСard);
routes.put('/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().alphanum().length(24),
    // _id: Joi.string().alphanum().length(24),
  }),
}), likeCard);
routes.delete('/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().alphanum().length(24),
    // _id: Joi.string().alphanum().length(24),
  }),
}), dislikeCard);

module.exports = routes;

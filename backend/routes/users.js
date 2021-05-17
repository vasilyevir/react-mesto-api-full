const routes = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getUsers, getUser, getUserById, updateProfile, updateAvatar,
} = require('../controllers/users');

routes.get('/', getUsers);
routes.get('/me', getUser);
routes.get('/:userId', getUserById);
routes.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
  }),
}), updateProfile);
routes.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().regex(/^https?:\/\/(www\.)?([a-zA-Z0-9-._~:/?#[]@!\$&'()\*\+,;=]\/)*/),
  }),
}), updateAvatar);

module.exports = routes;

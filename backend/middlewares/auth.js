const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;
// const handleAuthError = (res) => {
//   res
//     .status(401)
//     .send({ message: 'Необходима авторизация' });
// };

// const extractBearerToken = (header) => header.replace('Bearer ', '');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const token = req.cookies.userToken;

  if (!token) {
    return res.status(401).send({ message: 'необходима авторизация' });
  }

  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    return res.status(403).send({ message: 'Нет доступа' });
  }

  req.user = payload;

  next();
};

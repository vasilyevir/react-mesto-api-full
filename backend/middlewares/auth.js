const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;
// const handleAuthError = (res) => {
//   res
//     .status(401)
//     .send({ message: 'Необходима авторизация' });
// };

// const extractBearerToken = (header) => header.replace('Bearer ', '');
const extractBearerToken = (header) => header.replace('Bearer ', '');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  // const { authorization } = req.headers;
  // const tokens = authorization.replace('Bearer ', '');
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).send({ message: 'необходима авторизация' });
  }
  const token = extractBearerToken(authorization);
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    return res.status(403).send({ message: 'Нет доступа' });
  }

  req.user = payload;

  next();
};

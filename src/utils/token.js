import jwt from 'jsonwebtoken';

export const generateToken = (payload) => {
  return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '1d' });
};

export const veryfyToken = (token) => {
  return jwt.verify(token, process.env.TOKEN_SECRET);
};

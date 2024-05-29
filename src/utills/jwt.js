import jwt from 'jsonwebtoken'

export const signToken = ({
  payload,
  privateKey,
  options = {
    algorithm: 'HS256'
  }
}) => {
  return new Promise((resolve, rejects) => {
    jwt.sign(payload, privateKey, options, (err, token) => {
      if (err) {
        rejects(err)
      }
      resolve(token)
    })
  })
}
export const verifyToken = ({ token, privateKey }) => {
  return new Promise()((resolve, rejects) => {
    jwt.verify(token, privateKey, (err, decoded) => {
      if (err) {
        rejects(err)
      }
      resolve(decoded)
    })
  })
}

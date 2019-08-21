import jwt from 'jsonwebtoken'

const getUserId = (request, requiredAuth = true) => {
  // if request.request http else websockets
  const header = request.request ? request.request.headers.authorization : request.connection.context.authorization
  if(header) {
    // const token = header.split(' ')[1]
    const token = header.replace('Bearer ', '')
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return decoded.userId
  }
  if(requiredAuth) throw new Error('Authentication required')

  return null
}

export { getUserId as default }
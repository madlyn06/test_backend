import { validationResult } from 'express-validator'
import { EntityError, ErrorWithMessage } from '../models/Error.js'

export const validate = (validation) => {
  return async (req, res, next) => {
    await validation.run(req)

    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    const errorObj = errors.mapped()
    const entityError = new EntityError({ error: {} })
    for (const key in errorObj) {
      const { msg } = errorObj[key]
      if (msg instanceof ErrorWithMessage && msg.status !== 422) {
        return next(msg)
      }
      entityError.error[key] = errorObj[key]
    }
    next(entityError)
  }
}

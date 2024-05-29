export class ErrorWithMessage {
  status
  message
  constructor({ status, message }) {
    this.status = status
    this.message = message
  }
}
export class EntityError extends ErrorWithMessage {
  error
  constructor({ message = 'Validation error', error }) {
    super({ message, status: 422 })
    this.error = error
  }
}

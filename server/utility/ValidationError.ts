class ValidationError extends Error {
  constructor(object: Object) {
    super(JSON.stringify(object))
  }
}

export default ValidationError

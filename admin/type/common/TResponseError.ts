type TResponseError<T> = Record<keyof T, Array<string>>

export default TResponseError

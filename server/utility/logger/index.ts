import winston, { format } from 'winston'
import DatabaseTransport from './DatabaseTransport'

const infoFormat = format.printf(({ level, message }) => {
  return `${level}: ${message}`
})

export const info = winston.createLogger({
  level: 'info',
  format: infoFormat,
  transports: [new winston.transports.Console()]
}).info

export const error = winston.createLogger({
  level: 'error',
  transports: [new DatabaseTransport()]
}).error

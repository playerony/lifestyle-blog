import { LogType, LogModel } from '@type/Log'

export default (record: LogModel): LogType => ({
  logId: record.logId,
  level: record.level,
  message: record.message,
  updatedAt: record.updatedAt,
  createdAt: record.createdAt
})

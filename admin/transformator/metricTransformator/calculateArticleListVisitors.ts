import IVisitor from '@type/visitor/IVisitor'

export default (visitorList: IVisitor[]): number => {
  const ipAddressList = visitorList
    .filter(({ articleId }) => !articleId)
    .map(({ ipAddress }) => ipAddress)

  return [...new Set(ipAddressList)].length
}

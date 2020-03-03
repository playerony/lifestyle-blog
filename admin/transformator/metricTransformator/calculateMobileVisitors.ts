import IVisitor from '@type/visitor/IVisitor'

import isMobileUserAgent from '@utility/isMobileUserAgent'

export default (visitorList: IVisitor[]): number =>
  visitorList.filter(({ userAgent }) => isMobileUserAgent(userAgent!)).length

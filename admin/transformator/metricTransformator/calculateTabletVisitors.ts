import IVisitor from '@type/visitor/IVisitor'

import isTabletUserAgent from '@utility/isTabletUserAgent'

export default (visitorList: IVisitor[]): number =>
  visitorList.filter(({ userAgent }) => isTabletUserAgent(userAgent!)).length

import IVisitor from '@type/visitor/IVisitor'

import calculateMobileVisitors from '../calculateMobileVisitors'

describe('calculateMobileVisitors Function', () => {
  it('import calculateMobileVisitors', () => {
    expect(typeof calculateMobileVisitors).toEqual('function')
  })

  it('should return zero for empty array', () => {
    const result = calculateMobileVisitors([])

    expect(result).toEqual(0)
  })

  it('should calclulate some tablet devices as mobile', () => {
    const result = calculateMobileVisitors(TABLET_VISITOR_LIST_MOCK)

    expect(result).toEqual(2)
  })

  it('should return number of mobile devices', () => {
    const result = calculateMobileVisitors(MOBILE_VISITOR_LIST_MOCK)

    expect(result).toEqual(3)
  })
})

const TABLET_VISITOR_LIST_MOCK: IVisitor[] = [
  {
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
  },
  {
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.0 Mobile/14G60 Safari/602.1'
  },
  {
    userAgent:
      'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.2; Win64; x64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; Tablet PC 2.0; Microsoft Outlook 14.0.7172; ms-office; MSOffice 14)'
  }
]

const MOBILE_VISITOR_LIST_MOCK: IVisitor[] = [
  {
    userAgent:
      'Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36'
  },
  {
    userAgent:
      'Mozilla/5.0 (Linux; Android 7.0; SM-A310F Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.91 Mobile Safari/537.36 OPR/42.7.2246.114996'
  },
  {
    userAgent:
      'Mozilla/5.0 (Linux; Android 5.1.1; SM-N750K Build/LMY47X; ko-kr) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Mobile Safari/537.36 Puffin/6.0.8.15804AP'
  }
]

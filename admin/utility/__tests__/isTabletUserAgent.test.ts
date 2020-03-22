import isTabletUserAgent from '../isTabletUserAgent'

describe('isTabletUserAgent Function', () => {
  it('import isTabletUserAgent', () => {
    expect(typeof isTabletUserAgent).toEqual('function')
  })

  it('should return true if userAgent is from the tablet device', () => {
    USER_AGENT_LIST_MOCK.map(userAgent => {
      expect(isTabletUserAgent(userAgent)).toBeTruthy()
    })
  })
})

const USER_AGENT_LIST_MOCK = [
  'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
  'Mozilla/5.0 (iPad; CPU OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Version/10.0 Mobile/14G60 Safari/602.1',
  'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.2; Win64; x64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; Tablet PC 2.0; Microsoft Outlook 14.0.7172; ms-office; MSOffice 14)'
]

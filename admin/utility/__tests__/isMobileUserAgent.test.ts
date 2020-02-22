import isMobileUserAgent from '../isMobileUserAgent'

describe('isMobileUserAgent Function', () => {
  it('shoudl return true if userAgent is from the mobile device', () => {
    USER_AGENT_LIST_MOCK.map(userAgent => {
      expect(isMobileUserAgent(userAgent)).toBeTruthy()
    })
  })
})

const USER_AGENT_LIST_MOCK = [
  'Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36',
  'Mozilla/5.0 (Linux; Android 7.0; SM-A310F Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.91 Mobile Safari/537.36 OPR/42.7.2246.114996',
  'Mozilla/5.0 (Linux; Android 5.1.1; SM-N750K Build/LMY47X; ko-kr) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Mobile Safari/537.36 Puffin/6.0.8.15804AP'
]

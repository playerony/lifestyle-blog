import CryptoJS from 'crypto-js'
import Cookie, { CookieAttributes } from 'js-cookie'

import keys from '@config/keys'

const CookieConverter = Cookie.withConverter({
  read: value =>
    CryptoJS.AES.decrypt(value as string, keys.cryptoKey!).toString(),
  write: value =>
    CryptoJS.AES.encrypt(value as string, keys.cryptoKey!).toString()
})

class Memory {
  public static get(name: string): string | undefined {
    return CookieConverter.get(name)
  }

  public static set(
    name: string,
    value: string,
    options?: CookieAttributes
  ): void {
    CookieConverter.set(name, value, options)
  }
}

export default Memory

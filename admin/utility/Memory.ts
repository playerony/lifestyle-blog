import Cookie, { CookieAttributes } from 'js-cookie'

class Memory {
  public static get(name: string): string | undefined {
    return Cookie.get(name)
  }

  public static set(
    name: string,
    value: string,
    options?: CookieAttributes
  ): void {
    Cookie.set(name, value, options)
  }

  public static remove(name: string): void {
    Cookie.remove(name)
  }
}

export default Memory

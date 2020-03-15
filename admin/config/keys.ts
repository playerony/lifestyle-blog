interface IKeys {
  nodeEnv?: string
  serverUrl?: string
  cryptoKey?: string
  jwtPrefix?: string

  captchaPublicKey?: string
  captchaPrivateKey?: string
}

const config: IKeys = {
  cryptoKey: process.env.CRYPTO_KEY,
  serverUrl: process.env.SERVER_URL,
  jwtPrefix: process.env.JWT_PREFIX,
  nodeEnv: process.env.NODE_ENV || 'development',
  captchaPublicKey: process.env.CAPTCHA_PUBLIC_KEY,
  captchaPrivateKey: process.env.CAPTCHA_PRIVATE_KEY
}

export default config

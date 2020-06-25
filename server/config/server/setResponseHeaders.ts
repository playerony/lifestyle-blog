import helmet from 'helmet'
import { Express } from 'express'
import featurePolicy from 'feature-policy'

export default (app: Express): void => {
  app.use(
    helmet({
      frameguard: {
        action: 'deny'
      }
    })
  )

  app.use(
    helmet.hsts({
      preload: true,
      maxAge: 31536000,
      includeSubDomains: true
    })
  )

  app.use(
    featurePolicy({
      features: {
        usb: ["'none'"],
        midi: ["'none'"],
        camera: ["'none'"],
        payment: ["'none'"],
        vibrate: ["'none'"],
        speaker: ["'none'"],
        syncXhr: ["'none'"],
        autoplay: ["'none'"],
        gyroscope: ["'none'"],
        fullscreen: ["'self'"],
        microphone: ["'none'"],
        geolocation: ["'none'"],
        magnetometer: ["'none'"],
        accelerometer: ["'none'"],
        documentDomain: ["'none'"],
        ambientLightSensor: ["'none'"]
      }
    })
  )
}

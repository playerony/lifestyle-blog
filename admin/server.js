const path = require('path')
const helmet = require('helmet')
const csp = require('helmet-csp')
const express = require('express')
const featurePolicy = require('feature-policy')
const referrerPolicy = require('referrer-policy')

const app = express()

app.use(express.static(path.join(__dirname, './config/dist')))
app.set('port', process.env.PORT || 8080)

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

app.use(referrerPolicy({ policy: 'strict-origin-when-cross-origin' }))

app.use(
  featurePolicy({
    features: {
      midi: ["'none'"],
      camera: ["'none'"],
      payment: ["'none'"],
      vibrate: ["'none'"],
      speaker: ["'none'"],
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

app.use(
  csp({
    directives: {
      baseUri: ["'self'"],
      mediaSrc: ["'self'"],
      objectSrc: ["'none'"],
      workerSrc: ["'none'"],
      defaultSrc: ["'self'"],
      manifestSrc: ["'self'"],
      frameSrc: ["'self'", 'https://www.google.com'],
      fontSrc: ["'self'", 'https://cdnjs.cloudflare.com'],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://cdnjs.cloudflare.com'],
      scriptSrc: [
        "'self'",
        'https://www.google.com/recaptcha/api.js',
        'https://www.gstatic.com/recaptcha/releases'
      ],
      connectSrc: ["'self'", 'https://lifestyle-blog-server.herokuapp.com'],
      imgSrc: ["'self'", 'https://i.imgur.com', 'https://res.cloudinary.com']
    }
  })
)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './config/dist/index.html'))
})

app.listen(app.get('port'))

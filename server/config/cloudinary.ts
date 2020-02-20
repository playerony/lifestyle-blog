import cloudinary from 'cloudinary'

import keys from '@config/keys'

cloudinary.v2.config({
  cloud_name: keys.cloudinaryName,
  api_key: keys.cloudinaryPublicKey,
  api_secret: keys.cloudinarySecretKey
})

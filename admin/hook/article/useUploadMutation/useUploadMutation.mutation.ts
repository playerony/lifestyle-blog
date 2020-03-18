import gql from 'graphql-tag'

export const UPLOAD_MUTATION = gql`
  mutation UploadImage($file: Upload!) {
    uploadImage(file: $file) {
      imageId
    }
  }
`

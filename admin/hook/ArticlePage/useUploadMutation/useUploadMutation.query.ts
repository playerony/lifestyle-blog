import gql from 'graphql-tag'

export const UPLOAD_MUTATION_QUERY = gql`
  mutation UploadImage($file: Upload!) {
    uploadImage(file: $file) {
      imageId
    }
  }
`

import gql from 'graphql-tag'

export const UPLOAD_MUTATION_QUERY = gql`
  mutation UploadMutation($file: Upload!) {
    upload(file: $file) {
      imageId
    }
  }
`

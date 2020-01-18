import { useMutation } from '@apollo/react-hooks'

import { LOGIN_MUTATION_QUERY } from './loginMutation.query'

const useLoginMutation = (): any => useMutation(LOGIN_MUTATION_QUERY)

export default useLoginMutation

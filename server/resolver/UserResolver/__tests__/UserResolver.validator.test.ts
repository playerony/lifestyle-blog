import { loginValidation, signupValidation } from '../UserResolver.validator'

describe('UserResolver.validator Functions', () => {
  describe('loginValidation Function', () => {
    it('import loginValidation', () => {
      expect(typeof loginValidation).toEqual('function')
    })

    it('should check if login and password value exist', () => {
      const data = { login: null, password: null }

      try {
        loginValidation(data as any)
      } catch (e) {
        const errorObject = JSON.parse(e.message)

        expect(
          errorObject.login.includes('Provided value does not exist.')
        ).toBeTruthy()

        expect(
          errorObject.password.includes('Provided value does not exist.')
        ).toBeTruthy()
      }
    })

    describe('login property', () => {
      it('should check min length of string value', () => {
        const data = { login: 'xd', password: null }

        try {
          loginValidation(data as any)
        } catch (e) {
          const errorObject = JSON.parse(e.message)

          expect(
            errorObject.login.includes(
              "Provided value's length is shorter than 3."
            )
          ).toBeTruthy()
        }
      })

      it('should check max length of string value', () => {
        const data = {
          login: '123456789123456789123456789123456789123456789123456789',
          password: null
        }

        try {
          loginValidation(data as any)
        } catch (e) {
          const errorObject = JSON.parse(e.message)

          expect(
            errorObject.login.includes(
              "Provided value's length is longer than 50."
            )
          ).toBeTruthy()
        }
      })
    })

    describe('password property', () => {
      it('should check min length of string value', () => {
        const data = { login: null, password: 'ad' }

        try {
          loginValidation(data as any)
        } catch (e) {
          const errorObject = JSON.parse(e.message)

          expect(
            errorObject.password.includes(
              "Provided value's length is shorter than 5."
            )
          ).toBeTruthy()
        }
      })

      it('should check max length of string value', () => {
        const data = {
          login: null,
          password:
            '123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789'
        }

        try {
          loginValidation(data as any)
        } catch (e) {
          const errorObject = JSON.parse(e.message)

          expect(
            errorObject.password.includes(
              "Provided value's length is longer than 100."
            )
          ).toBeTruthy()
        }
      })
    })
  })

  describe('signupValidation Function', () => {
    it('import signupValidation', () => {
      expect(typeof signupValidation).toEqual('function')
    })

    it('should check if login and password value exist', () => {
      const data = { login: null, password: null }

      try {
        signupValidation(data as any)
      } catch (e) {
        const errorObject = JSON.parse(e.message)

        expect(
          errorObject.login.includes('Provided value does not exist.')
        ).toBeTruthy()

        expect(
          errorObject.password.includes('Provided value does not exist.')
        ).toBeTruthy()
      }
    })

    describe('login property', () => {
      it('should check min length of string value', () => {
        const data = { login: 'xd', password: null }

        try {
          signupValidation(data as any)
        } catch (e) {
          const errorObject = JSON.parse(e.message)

          expect(
            errorObject.login.includes(
              "Provided value's length is shorter than 3."
            )
          ).toBeTruthy()
        }
      })

      it('should check max length of string value', () => {
        const data = {
          login: '123456789123456789123456789123456789123456789123456789',
          password: null
        }

        try {
          signupValidation(data as any)
        } catch (e) {
          const errorObject = JSON.parse(e.message)

          expect(
            errorObject.login.includes(
              "Provided value's length is longer than 50."
            )
          ).toBeTruthy()
        }
      })
    })

    describe('password property', () => {
      it('should check min length of string value', () => {
        const data = { login: null, password: 'ad' }

        try {
          signupValidation(data as any)
        } catch (e) {
          const errorObject = JSON.parse(e.message)

          expect(
            errorObject.password.includes(
              "Provided value's length is shorter than 5."
            )
          ).toBeTruthy()
        }
      })

      it('should check max length of string value', () => {
        const data = {
          login: null,
          password:
            '123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789'
        }

        try {
          signupValidation(data as any)
        } catch (e) {
          const errorObject = JSON.parse(e.message)

          expect(
            errorObject.password.includes(
              "Provided value's length is longer than 100."
            )
          ).toBeTruthy()
        }
      })

      it('should check for the small letter, big letter and special character', () => {
        const data = {
          login: null,
          password: '123'
        }

        try {
          signupValidation(data as any)
        } catch (e) {
          const errorObject = JSON.parse(e.message)

          expect(
            errorObject.password.includes(
              'Provided value does not contain any letter.'
            )
          ).toBeTruthy()

          expect(
            errorObject.password.includes(
              'Provided value does not contain any big letter.'
            )
          ).toBeTruthy()

          expect(
            errorObject.password.includes(
              'Provided value does not contain any special character.'
            )
          ).toBeTruthy()
        }
      })

      it('should check for a digit', () => {
        const data = {
          login: null,
          password: 'abb'
        }

        try {
          signupValidation(data as any)
        } catch (e) {
          const errorObject = JSON.parse(e.message)

          expect(
            errorObject.password.includes(
              'Provided value does not contain any digit.'
            )
          ).toBeTruthy()
        }
      })
    })
  })
})

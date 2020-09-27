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
          errorObject.login.includes('Podana wartość nie istnieje.')
        ).toBeTruthy()

        expect(
          errorObject.password.includes('Podana wartość nie istnieje.')
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
            errorObject.login.includes('Podany ciąg znaków jest mniejszy od 3.')
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
            errorObject.login.includes('Podany ciąg znaków jest większy od 50.')
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
              'Podany ciąg znaków jest mniejszy od 5.'
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
              'Podany ciąg znaków jest większy od 100.'
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
          errorObject.login.includes('Podana wartość nie istnieje.')
        ).toBeTruthy()

        expect(
          errorObject.password.includes('Podana wartość nie istnieje.')
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
            errorObject.login.includes('Podany ciąg znaków jest mniejszy od 3.')
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
            errorObject.login.includes('Podany ciąg znaków jest większy od 50.')
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
              'Podany ciąg znaków jest mniejszy od 5.'
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
              'Podany ciąg znaków jest większy od 100.'
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
              'Podana wartość nie zawiera żadnej litery.'
            )
          ).toBeTruthy()

          expect(
            errorObject.password.includes(
              'Podana wartość nie zawiera żadnej dużej litery.'
            )
          ).toBeTruthy()

          expect(
            errorObject.password.includes(
              'Podana wartość nie zawiera żadnych znaków specjalnych.'
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
              'Podana wartość nie zawiera żadnej cyfry.'
            )
          ).toBeTruthy()
        }
      })
    })
  })
})

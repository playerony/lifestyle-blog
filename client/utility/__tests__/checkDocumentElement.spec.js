import checkDocumentElement from '../checkDocumentElement'

describe('checkDocumentElement Function', () => {
  it('should import', () => {
    expect(typeof checkDocumentElement).toEqual('function')
  })

  it('should wait till document element exists', async () => {
    setTimeout(() => {
      const createdElement = document.createElement('div')
      createdElement.textContent = 'createdElement'
      createdElement.setAttribute('id', 'test_element')
      document.body.appendChild(createdElement)
    }, 10)

    expect(await checkDocumentElement('#test_element')).toBeTruthy()
  })
})

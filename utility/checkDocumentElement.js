const rafAsync = () => {
  return new Promise(resolve => {
    requestAnimationFrame(resolve)
  })
}

const checkDocumentElement = selector => {
  if (document.querySelector(selector) === null) {
    return rafAsync().then(() => checkDocumentElement(selector))
  } else {
    return Promise.resolve(true)
  }
}

export default checkDocumentElement

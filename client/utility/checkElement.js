const rafAsync = () => {
  return new Promise(resolve => {
    requestAnimationFrame(resolve)
  })
}

const checkElement = selector => {
  if (document.querySelector(selector) === null) {
    return rafAsync().then(() => checkElement(selector))
  } else {
    return Promise.resolve(true)
  }
}

export default checkElement

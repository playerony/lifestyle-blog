export default (behavior = 'smooth') => {
  const position = {
    top: 0,
    left: 0,
    behavior
  }

  try {
    window.scroll(position)
  } catch (error) {
    window.scrollTo(position)
  }
}

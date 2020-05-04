export default (
  position = {
    top: 0,
    left: 0,
    behavior: 'smooth'
  }
) => {
  try {
    window.scroll(position)
  } catch (error) {
    window.scrollTo(position)
  }
}

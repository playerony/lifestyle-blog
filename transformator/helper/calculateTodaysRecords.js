export default array =>
  array.filter(element => {
    const differenceInTime =
      new Date().getTime() - new Date(element.createdAt).getTime()
    const differenceInDays = differenceInTime / (1000 * 3600 * 24)

    return differenceInDays <= 1
  }).length

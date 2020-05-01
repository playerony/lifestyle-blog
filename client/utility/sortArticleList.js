const sortByLikes = (a, b) => b.likes - a.likes
const sortByTotalComments = (a, b) => b.totalComments - a.totalComments
const sortByTotalVisitors = (a, b) => b.totalVisitors - a.totalVisitors
const sortByDate = (a, b) =>
  new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()

const sortOption = {
  latest: sortByDate,
  'top-rated': sortByLikes,
  'most-commented': sortByTotalComments
}

export default (articles, sortBy) =>
  articles.slice().sort(sortOption[sortBy] || sortByTotalVisitors)

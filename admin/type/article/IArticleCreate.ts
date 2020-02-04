export default interface IArticleCreate {
  title: string
  content: string
  description: string
  imageId: number | null
  categoryIdList: number[]
}

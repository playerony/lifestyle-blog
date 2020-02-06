export default interface IArticleSave {
  title: string
  content: string
  description: string
  imageId: number | null
  categoryIdList: number[]
}

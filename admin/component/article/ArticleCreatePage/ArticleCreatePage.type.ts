import IArticleSave from '@type/article/IArticleSave'
import TResponseError from '@type/common/TResponseError'

export interface IArticleCreatePageProps {
  errorData: TResponseError<IArticleSave>
  onCreate: (article: IArticleSave) => void
}

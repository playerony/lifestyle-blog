import IArticle from '@type/article/IArticle'
import IArticleSave from '@type/article/IArticleSave'
import TResponseError from '@type/common/TResponseError'

export interface IArticleEditPageProps {
  initialData?: IArticle
  errorData: TResponseError<IArticleSave>
  onEdit: (article: IArticleSave) => void
}

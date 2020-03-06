import IArticle from '@type/article/IArticle'
import IArticleSave from '@type/article/IArticleSave'
import TResponseError from '@type/common/TResponseError'

export interface IArticleFormProps {
  initialData?: IArticle
  errorData: TResponseError<IArticleSave>
  onSave: (article: IArticleSave) => void
}

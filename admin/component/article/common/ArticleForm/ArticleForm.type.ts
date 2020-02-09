import IArticleSave from '@type/article/IArticleSave'
import TResponseError from '@type/common/TResponseError'

export interface IArticleFormProps {
  errorData: TResponseError<IArticleSave>
  onSave: (article: IArticleSave) => void
}

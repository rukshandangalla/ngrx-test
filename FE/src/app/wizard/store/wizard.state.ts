import { MasterDataState } from './reducers/master.data.reducer';
import { CustomerState } from './reducers/customer.reducer';
import { ArticleState } from './reducers/article.reducer';
import { ProductState } from './reducers/product.reducer';

export interface WizardState {
  masterDataState: MasterDataState;
  customerState: CustomerState;
  articleState: ArticleState;
  productState: ProductState;
}

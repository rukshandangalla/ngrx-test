import { Customer } from './customer';
import { ArticleMainType } from './article.main.type';
import { Product } from './product';

export interface WizardState {
  selectedCustomer: Customer;
  selectedArticle: ArticleMainType;
  selectedProduct: Product;
}

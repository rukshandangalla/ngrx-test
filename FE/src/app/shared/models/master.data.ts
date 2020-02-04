import { SearchType } from './search.type';
import { ArticleMainType } from './article.main.type';
import { Product } from './product';

export interface MasterData {
  searchTypes: SearchType[];
  articleMainTypes: ArticleMainType[];
  products: Product[];
}

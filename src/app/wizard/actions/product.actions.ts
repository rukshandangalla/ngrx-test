import { Action } from '@ngrx/store';
import { Product } from 'src/app/shared/models/product';

export enum ProductActionTypes {
  Select = '[Product] Select'
}

export class AddProductAction implements Action {
  readonly type = ProductActionTypes.Select;
  constructor(public payload: Product) {}
}

export type ProductActionUnion = AddProductAction;

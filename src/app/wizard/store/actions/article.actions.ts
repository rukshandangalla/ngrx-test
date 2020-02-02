import { Action } from '@ngrx/store';
import { ArticleMainType } from 'src/app/shared/models/article.main.type';

export enum ArticleActionTypes {
  Select = '[Article] Select',
  Reset = '[Article] Reset'
}

export class AddArticleAction implements Action {
  readonly type = ArticleActionTypes.Select;
  constructor(public payload: ArticleMainType) {}
}

export class ResetArticleAction implements Action {
  readonly type = ArticleActionTypes.Reset;
  constructor() {}
}

export type ArticleActionUnion = AddArticleAction | ResetArticleAction;

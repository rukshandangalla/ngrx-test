import { Action, props, createAction } from '@ngrx/store';
import { ArticleMainType } from 'src/app/shared/models/article.main.type';

export const add = createAction(
  '[Article] Select',
  props<{ payload: ArticleMainType }>()
);

export const reset = createAction('[Article] Reset');

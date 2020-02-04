import { createReducer, on, Action } from '@ngrx/store';
import * as ArticleActions from '../actions/article.actions';
import { ArticleMainType } from 'src/app/shared/models/article.main.type';

export interface ArticleState {
  selectedArticle: ArticleMainType;
}

const initialState: ArticleState = {
  selectedArticle: null
};

const reducer = createReducer(
  initialState,
  on(ArticleActions.add, (state, { payload: article }) => {
    return { ...state, selectedArticle: article };
  }),
  on(ArticleActions.reset, (state) => {
    return { ...state, ...initialState };
  })
);

export function ArticleReducer(state: ArticleState | undefined, action: Action) {
  return reducer(state, action);
}

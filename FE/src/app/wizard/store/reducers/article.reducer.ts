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
  on(ArticleActions.addArticle, (state, { payload: article }) => {
    console.log(article);
    return { ...state, ...article };
  }),
  on(ArticleActions.resetArticle, (state) => {
    state = null;
    return state;
  })
);

export function ArticleReducer(state: ArticleState | undefined, action: Action) {
  return reducer(state, action);
}

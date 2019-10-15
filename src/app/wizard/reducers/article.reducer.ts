import { ArticleActionTypes, ArticleActionUnion } from '../actions/article.actions';

export const ArticleReducer = (state = null, action: ArticleActionUnion) => {
  switch (action.type) {
    case ArticleActionTypes.Select:
      return { ...state, ...action.payload };
    case ArticleActionTypes.Reset:
      state = null;
      return state;
    default:
      return state;
  }
};

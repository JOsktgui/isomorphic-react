import { unionWith, isEqual } from 'lodash';

export const questions = (state = [], {type, questions, question}) => {
  // const questionEquality = (a = {}, b = {}) => {
  //   return a.question_id == b.question_id;
  // };
  if (type === 'FETCHED_QUESTION') {
    state = unionWith([question], state, isEqual);
  }

  if (type === 'FETCHED_QUESTIONS') {
    state = unionWith(state, questions, isEqual);
  }

  return state;
};
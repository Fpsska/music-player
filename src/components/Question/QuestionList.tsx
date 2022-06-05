import React from 'react';

import { useAppSelector } from '../../app/hooks';

import { RootState } from '../../app/store';

import Question from './QuestionTemplate';
import './question.scss';

// /. imports

const QuestionList: React.FC = () => {
  const { questions } = useAppSelector(
    (state: RootState) => state.burgerSlice
  );

  const list = questions.map((item) => {
    return (
      <Question
        key={item.id}
        id={item.id}
        question={item.question}
        answer={item.answer}
        isDropDownHidden={item.isDropDownHidden}
      />
    );
  });

  return (
    <div className="question">
      <div className="question__wrapper">{list}</div>
    </div>
  );
};

export default QuestionList;

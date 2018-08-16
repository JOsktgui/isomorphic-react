import React from 'react';
import { map, join } from 'lodash';
import { connect } from 'react-redux';
import TagList from './TagList';
import { Link } from 'react-router-dom';

const QuestionListItem = ({ title, tags, question_id }) => {
  return (
    <div className='mb-3'>
      <h3>{ title }</h3>
      <div className='mb-2'>
        <TagList tags={tags} />
      </div>
      <div>
        <Link to={`/questions/${question_id}`}>
          <button>More Info!</button>
        </Link>
      </div>
    </div>
  )
}

const QuestionList = ({ questions }) => {
  return (
    <div>
      { questions && questions.length ?
        <div>
          { map(questions, question => <QuestionListItem key={question.question_id} {...question} />) }
        </div> :
        <div>
          ... Loading Questions ...
        </div>
      }
    </div>
  )
};

const mapStateToProps = ({ questions }) => ({ questions });

export default connect(mapStateToProps)(QuestionList);
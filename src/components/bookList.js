import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BooksList = (props) => {
  const dispatch = useDispatch();
  const {
    title, category, Author,
  } = props;
  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <div className="d-flex flex-row justify-content-center my-2">
        <div className="d-flex flex-column px-3">
          <h3>{category}</h3>
          <h1>{title}</h1>
          <span>{Author}</span>
          <div>
            <ul>
              <li>Comments</li>
              <button type="button" onClick={() => removeBookFromStore(props.id)}>Remove</button>
              <li>Edit</li>
            </ul>
          </div>
        </div>
        <div className="px-3">
          <div>Animated Circle</div>
          <div>XX%</div>
          <h4>Completed</h4>
        </div>
        <div className="px-3">
          <h3>CURRENT CHAPTER</h3>
          <p>Chapter 17</p>
          <button type="button" className="btn btn-primary">Update Progress</button>
        </div>
      </div>
    </div>
  );
};

export default BooksList;

BooksList.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

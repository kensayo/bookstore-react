import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BooksList = (props) => {
  const dispatch = useDispatch();
  const {
    title, category, author,
  } = props;

  const deleteBook = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div className="card my-2">
      <div className="d-flex flex-row justify-content-between my-2">
        <div className="d-flex flex-column px-3">
          <h3>{category}</h3>
          <h1>{title}</h1>
          <span>{author}</span>
          <div>
            <ul className="d-flex flex-row text-decoration-none navbar-nav">
              <li>Comments</li>
              <li> | </li>
              <li>
                <button className="remove p-0" type="button" onClick={() => deleteBook(props.id)}>Remove</button>
              </li>
              <li> | </li>
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
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

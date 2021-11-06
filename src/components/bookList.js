import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { removeBook } from '../redux/books/books';

const BooksList = (props) => {
  const dispatch = useDispatch();
  const {
    title, category, author,
  } = props;
  const progress = Math.round(Math.random() * (100 - 0) + 0);
  const chapter = Math.round(Math.random() * (20 - 0) + 0);
  const deleteBook = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div className="card card-style mx-auto my-2">
      <div className="d-flex flex-row align-items-center justify-content-between my-2">
        <div className="d-flex flex-column px-3">
          <h5 className="text-secondary">{category}</h5>
          <h3>{title}</h3>
          <h5 className="author text-primary fw-light">{author}</h5>
          <div>
            <ul className="d-flex flex-row text-decoration-none navbar-nav">
              <li className="text-primary fw-light mx-2">Comments</li>
              <li> | </li>
              <li>
                <button className="remove text-primary fw-light p-0 mx-2" type="button" onClick={() => deleteBook(props.id)}>Remove</button>
              </li>
              <li> | </li>
              <li className="text-primary fw-light mx-2">Edit</li>
            </ul>
          </div>
        </div>
        <div className="d-flex flex-row px-3">
          <div className="m-2"><CircularProgress color="primary" variant="determinate" value={progress} /></div>
          <div className="flex-column">
            <h2>
              {progress}
              %
            </h2>
            <h5 className="completed">Completed</h5>
          </div>
        </div>
        <div className="px-3">
          <h5>CURRENT CHAPTER</h5>
          <p>
            Chapter
            {` ${chapter}`}
          </p>
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

import React from 'react';
import { useSelector } from 'react-redux';
import RemoveBook from './removeBook';

const BookList = () => {
  const bookStore = useSelector((state) => state.book);
  return (
    <div>
      {bookStore.map((book) => (
        <div key={book.id} className="d-flex flex-row justify-content-center my-2">
          <div className="d-flex flex-column px-3">
            <h3>Lorem</h3>
            <h1>{book.title}</h1>
            <span>{book.author}</span>
            <div>
              <ul>
                <li>Comments</li>
                <RemoveBook id={book.id} />
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
      ))}
    </div>
  );
};

export default BookList;

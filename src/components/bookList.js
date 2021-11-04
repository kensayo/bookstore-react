import React from 'react';
import RemoveBook from './removeBook';

const BookList = () => {
  const bookStore = [{ id: 123, title: 'Lorem', author: 'Ipsum' }];
  return (
    <div className="d-flex flex-row justify-content-center my-2">
      {bookStore.map((book) => (
        <div className="d-flex flex-column px-3" key={book.id}>
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
      ))}
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
  );
};

export default BookList;

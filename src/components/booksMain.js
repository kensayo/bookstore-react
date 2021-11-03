import React from 'react';
import BookList from './bookList';
import AddBookList from './addBook';

const Books = () => (
  <div className="d-flex flex-column justify-content-center mx-4">
    <BookList />
    <AddBookList />
  </div>
);

export default Books;

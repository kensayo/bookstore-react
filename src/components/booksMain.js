import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BooksList from './bookList';
import AddBookList from './addBook';
import { getAPIBooks } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAPIBooks());
  }, []);

  const item = [];
  const list = useSelector((data) => data.reduceBooks.books);
  Object.entries(list).forEach((book) => {
    const [key, value] = book;
    item.push(value.map((e) => (
      <BooksList
        key={key}
        title={e.title.split(' - ')[0]}
        author={e.title.split(' - ')[1]}
        category={e.category}
        id={key}
      />
    )));
  });

  return (
    <div className="d-flex flex-column justify-content-center m-5">
      {item}
      <br />
      <AddBookList />
    </div>
  );
};

export default Books;

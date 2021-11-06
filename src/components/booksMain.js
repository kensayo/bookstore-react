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

  const BookItem = [];
  const booklist = useSelector((data) => data.reduceBooks.books);
  Object.entries(booklist).forEach((element) => {
    const [key, value] = element;
    BookItem.push(value.map((item) => (
      <BooksList
        key={key}
        title={item.title}
        Author={item.title}
        category={item.category}
        id={key}
      />
    )));
  });

  return (
    <div className="d-flex flex-column justify-content-center mx-4">
      {BookItem}
      <AddBookList />
    </div>
  );
};

export default Books;

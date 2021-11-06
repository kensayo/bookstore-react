import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const eTitle = document.getElementById('title');
    const eCategory = document.getElementById('category');
    const eAuthor = document.getElementById('author');
    const bookTitle = `${eTitle.value} - ${eAuthor.value}`;
    const bookCategory = eCategory.options[eCategory.selectedIndex].text;
    const id = uuidv4();
    eTitle.value = '';
    dispatch(createBook({ title: bookTitle, category: bookCategory, item_id: id }));
  };

  return (
    <div className="card-style mx-auto m-4">
      <h2 className="add-book fw-bold text-secondary">ADD NEW BOOK</h2>
      <div className="d-flex justify-content-between">
        <input type="text" id="title" className="Lesson-Panel" placeholder="Book title" />
        <input type="text" id="author" className="Lesson-Panel" placeholder="Book author" />
        <select type="select" className="Lesson-Panel p-0 w-25" id="category">
          <option value="Lorem 1">Lorem 1</option>
          <option value="Lorem 2">Lorem 2</option>
          <option value="Lorem 3">Lorem 3</option>
        </select>
        <input type="button" className="btn btn-primary" onClick={() => { handleClick(); }} value="Add Book" />
      </div>
    </div>
  );
};

export default AddBook;

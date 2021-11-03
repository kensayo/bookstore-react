import React from 'react';

const AddBook = () => (
  <div className="mx-auto m-4">
    <h2>ADD NEW BOOK</h2>
    <form>
      <input type="text" placeholder="Book title" />
      <select type="select">
        <option value="test">Lorem 1</option>
        <option value="test">Lorem 2</option>
        <option value="test">Lorem 3</option>
      </select>
      <input type="submit" value="Add Book" />
    </form>
  </div>
);

export default AddBook;

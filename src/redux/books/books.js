import React from 'react';

const Books = () => (
  <div className="d-flex flex-column justify-content-center mx-4">
    <div className="d-flex flex-row justify-content-center">
      <div className="d-flex flex-column px-3">
        <h3>Lorem</h3>
        <h1>Lorem Ipsun</h1>
        <span>Subtittle</span>
        <div>
          <ul>
            <li>Comments</li>
            <li>Remove</li>
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
  </div>
);

export default Books;

const SUCCESS = 'bookStore/books/SUCCESS';
const id = 'uxBClYb6z190yZSUZnAS';
const api = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${id}`;
const initialState = {
  books: [],
};

const reduceBooks = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};

export const getAPIBooks = () => (dispatch) => {
  fetch(`${api}/books`)
    .then((res) => res.json())
    .then((resResponse) => dispatch({
      type: SUCCESS,
      payload: resResponse,
    }));
};


export default reduceBooks;

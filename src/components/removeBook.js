import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

export default function RemoveBook({ id }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeBook(id));
  };

  return (
    <button type="button" onClick={handleClick}>
      Remove
    </button>
  );
}

RemoveBook.propTypes = {
  id: PropTypes.number.isRequired,
};

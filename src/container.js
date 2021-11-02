import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, NavLink,
} from 'react-router-dom';
import Books from './redux/books/books';
import Categories from './redux/categories/categories';
import Footer from './components/Footer';

// eslint-disable-next-line react/prefer-stateless-function
class Container extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <nav>
            <div>
              <NavLink to="/">Bookstore</NavLink>
              <div>
                <ul>
                  <li>
                    <NavLink exact to="/">Books</NavLink>
                  </li>
                  <li>
                    <span>|</span>
                  </li>
                  <li>
                    <NavLink to="/categories">Categories</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            <Route path="/books">
              <Books />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default Container;

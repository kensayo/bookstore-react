import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, NavLink, Redirect,
} from 'react-router-dom';
import Books from './components/booksMain';
import Categories from './components/categoriesMain';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
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
                    <NavLink to="/books">Books</NavLink>
                  </li>
                  <li>
                    <NavLink to="/categories">Categories</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            <Route exact path="/">
              <Redirect to="/books" />
            </Route>
            <Route path="/books">
              <Books />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

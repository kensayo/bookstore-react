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
          <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container-fluid">
              <NavLink className="navbar-brand text-primary fw-bold fs-2 p-0" to="/">Bookstore</NavLink>
              <div className="navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-start w-100 pe-5">
                  <li className="nav-item px-3">
                    <NavLink className="montserrat nav-link" to="/books">BOOKS</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="montserrat nav-link" to="/categories">CATEGORIES</NavLink>
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

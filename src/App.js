import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Shelves from "./components/Shelves";
import Search from "./components/Search";
import { BrowserRouter as Router, Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = async () => {
    const getBooks = await BooksAPI.getAll();
    this.setState({ books: getBooks });
  };

  changeBookShelf = async (bookId, title) => {
    this.updateBook(bookId, title);
  };

  updateBook = async (id, title) => {
    await BooksAPI.update(id, title);
    this.getBooks();
  };

  render() {
    return (
      <div className="app">
        <Router>
          <Route exact path="/">
            <Shelves
              books={this.state.books}
              onChangeBookShelf={this.changeBookShelf}
            />
          </Route>
          <Route path="/search">
            <Search
              books={this.state.books}
              onChangeBookShelf={this.changeBookShelf}
            />
          </Route>
        </Router>
      </div>
    );
  }
}

export default BooksApp;


import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";


class Search extends Component {
  state = {
    query: "",
    books: [],
  };

  changeQuery = async (event) => {
    const newQuery = event.target.value;
    this.setState({ query: newQuery });
    if (newQuery === "") {
      this.setState({ books: [] });
    } else if (newQuery) {
      const searchedBooks = await this.getBooks(newQuery);
      if (searchedBooks && searchedBooks.length > 0) {
        this.setState({ books: searchedBooks });
      } else {
        this.setState({ books: [] });
      }
    }
  };

  getBooks = async (searchText) => {
    try {
      const searched = await BooksAPI.search(
        searchText,
      );
     if (searched) {
        const updatedBooks = this.updateShelves(searched);
        return updatedBooks;
      }
    } catch (error) {
      console.log(error);
    }
  };

  updateShelves(searched) {
    const { books } = this.props;
    const updatedBooks = searched.map((searched) => {
      books.forEach((homeBook) => {
        if (homeBook.id === searched.id) {
          searched.shelf = homeBook.shelf;
        }
      });
      if (!searched.shelf) searched.shelf = "none";
      return searched;
    });
    return updatedBooks;
  }

  render() {
    const { onChangeBookShelf } = this.props;
    const { books } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              value={this.state.query}
              onChange={this.changeQuery}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.length === 0 ? (
              <li />
            ) : (
              books.map((book) => (
                <li key={book.id}>
                  <Book book={book} onChangeBookShelf={onChangeBookShelf} />
                </li>
              ))
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;

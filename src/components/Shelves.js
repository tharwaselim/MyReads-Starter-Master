import React, { Component } from "react";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";

class Shelves extends Component {
  getShelves = (books) => {
    const currentlyReading = books.filter(
      (book) => book.shelf === "currentlyReading"
    );
    const wantToRead = books.filter(
      (book) => book.shelf === "wantToRead");
    const read = books.filter(
      (book) => book.shelf === "read");
    return [
      {
        id: 1,
        title: "Currently Reading",
        books: currentlyReading,
      },
      {
        id: 2,
        title: "Want To Read",
        books: wantToRead,
      },
      {
        id: 3,
        title: "Read",
        books: read,
      },
    ];
  };

  render() {
    const shelves = this.getShelves(this.props.books);
    const { onChangeShelf } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.length > 0 &&
            shelves.map((shelf) => (
              <Shelf
                key={shelf.id}
                books={shelf.books}
                shelfTitle={shelf.title}
                onChangeBookShelf={onChangeShelf}
              />
            ))}
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Shelves;


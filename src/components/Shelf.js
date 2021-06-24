import React from "react";
import Book from "./Book";

const Shelf = ({ books, Title, onChangeBookShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{Title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.length > 0 &&
            books.map((book) => (
              <li key={book.id}>
                <Book book={book} onChangeBookShelf={onChangeBookShelf} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;

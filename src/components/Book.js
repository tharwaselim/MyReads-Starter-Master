import React from "react";
import Select from "./Select";
import { update } from '../BooksAPI';

const Book = props=> {
  const {book} = props;
  const defaultCoverImage =
    "https://cdn141.picsart.com/311796011013201.jpg?type=webp&to=crop&r=256";
  function choosingShelf (shelfTitle) {
      update(book, shelfTitle)
  }

  return (
    
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${
                book.imageLinks ? book.imageLinks.thumbnail : defaultCoverImage
              }")`,
            }}
          />
          
          <Select shelf={(book.shelf !== undefined)?(book.shelf):("none")} onUpdate={(e)=>{choosingShelf(e)}}/>

              
          
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
        </div>
      
    )
;
};

export default Book;

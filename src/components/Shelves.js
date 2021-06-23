import React from 'react';
import Shelf from './Shelf';

class Shelves extends React.Component {

    render() {
        const allBooks = this.props.allBooks;
        
        

        console.log("im hre",allBooks)



        const currentlyReading=allBooks.filter(book=>book.shelf==="currentlyReading");
        const wantToRead=allBooks.filter(book=>book.shelf==="wantToRead");
        const read=allBooks.filter(book=>book.shelf==="read");
        
        return (
            <div className="list-books-content">
                <div>
                {/*//shelf*/}
                <Shelf 
                books={currentlyReading} 
                title={"Currently Reading"} 
                changeShelf={this.props.changeShelf}/>
                
                {/*//shelf*/}
                <Shelf 
                books={wantToRead} 
                title={"Want To Read"} 
                changeShelf={this.props.changeShelf}/>

                {/*//shelf*/}
                <Shelf 
                books={read} 
                title={"Read"} 
                changeShelf={this.props.changeShelf}/>
                </div>
            </div>
        )
    }
}

export default Shelves;
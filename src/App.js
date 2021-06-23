/* eslint-disable no-unused-expressions */
import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelves from './components/Shelves'
import Search from './components/Search'
import SearchButton from './components/SearchButton';
import Header from './components/Header'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books:[],
    query:""
  };

  updateSearch= state=>{
    console.log("hi",state);
    this.setState({showSearchPage:state});
  }

componentDidMount(){
  BooksAPI.getAll().then((response=>this.setState({books:response})))
}

changeBookShelf=(book,shelf) => {
  console.log("hiii",this);
  this.setState({
    books:this.state.books.map(b => {
      b.id === book.id ? (b.shelf = shelf) :b ;
      return b;
    })
  });
};
  render() {
  //const {shelves, allBooks} = this.props;
    return (
      <div className="app">
        {this.state.showSearchPage ? (

          ////search
          <Search showSearchPage={this.updateSearch }/>
        ) : (
          <div className="list-books">

            {/*header*/}
            
            <Header />
            <div className="list-books-content">
                <>
                    
                </>
</div>
            {/*//shelves*/}
         <Shelves  allBooks={this.state.books} 
         changeShelf={this.changeBookShelf}/>
            
            {/*//search button*/}
           
            <SearchButton showSearchPage={this.updateSearch }/>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp

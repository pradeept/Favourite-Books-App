import React,{useEffect} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import useBooksContext from './hooks/use-books-context';

function App(){
    
    const {fetchBooks} = useBooksContext();

    //To run fetchBooks() on initial render
    useEffect(()=>{
        fetchBooks();
    },[]);



    return <div className="app">
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
    </div>

    
}

export default App;
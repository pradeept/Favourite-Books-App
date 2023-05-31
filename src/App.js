import React,{useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App(){
    const [books,setBooks] = useState([]);

    function createBook(book){
        return setBooks((prev)=>{
            return [...prev,book];
        });
        // OR
        // const updatedBooks = [...books,book];
        // setBooks(updatedBooks);
    }
    return <div>
        <BookCreate  createBook={createBook} />
        {/* <BookList list={books}/> */}
    </div>
}

export default App;
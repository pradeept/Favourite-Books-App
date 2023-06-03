import React,{useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App(){
    const [books,setBooks] = useState([]);
    console.log(books);
    function createBook(title){
         setBooks((prev)=>{
            const updated = {
                id:Math.round(Math.random()*999),
                title:title
            }
            return [ ...prev, updated ]
        });
        // OR
        // const updatedBooks = [...books,book];
        // setBooks(updatedBooks);
    }

    function deleteBookById(id){
        setBooks(()=>{
            return books.filter((book)=>{
                return book.id !== id;
            }); 
        });
    }

    function editBookById(id, newTitle){
        setBooks(()=>{
            return books.map((book)=>{
                if(book.id === id){
                    return {...book, title:newTitle};
                }
                return book;
            });
           
        });

        
    }
    return <div className="app">
        <h1>Reading List</h1>
        <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
        <BookCreate  onCreate={createBook} />
    </div>
}

export default App;
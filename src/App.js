import React,{useState,useEffect} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

function App(){
    const [books,setBooks] = useState([]);
    
    async function fetchBooks(){
        const response = await axios.get("http://localhost:3001/books");
        console.log(response.data);
        setBooks(()=>{
            return response.data;
        })
    }

    
    //To run fetchBooks() on initial render
    useEffect(()=>{
        fetchBooks();
    },[]);



    async function createBook(title){

        //API request
        const response = await axios.post("http://localhost:3001/books",{
            title               
            //title is the title that is been passed to createbook
        });     

        //Updating state
         setBooks((prev)=>{
            return [ ...prev, response.data ]
        });

    }



    async function editBookById(id, newTitle){
            //make API request
        const response = await axios.put(`http://localhost:3001/books/${id}`,{
            title:newTitle
        });

        //update state with response.data we got along with books we had in the [].
        setBooks(()=>{
            return books.map((book)=>{
                if(book.id === id){
                    return {...book, ...response.data};
                }
                return book;
            });       
        });
    }



    async function deleteBookById(id){
        await axios.delete(`http://localhost:3001/books/${id}`);

        setBooks(()=>{
            return books.filter((book)=>{
                return book.id !== id;
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
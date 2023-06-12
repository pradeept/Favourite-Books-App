import {createContext, useState} from 'react';  
import axios from 'axios';


// we get createContext object
const BookContext =  new createContext();

//This is the provider component that serves value and fun() to change value
//It takes the component as prop ('children' in this case)
const Provider = ({children})=>{
    
    const [books,setBooks] = useState([]);



    async function fetchBooks(){
        const response = await axios.get("http://localhost:3001/books");
        console.log(response.data);
        setBooks(()=>{
            return response.data;
        })
    }



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

    const valuesToShare = {
        books,
        fetchBooks,
        editBookById,
        deleteBookById,
        createBook
    }

    //.Provider is the property given by createContext
    //the component that we pass in here and it's children will have access to 'value' prop
    return <BookContext.Provider value={valuesToShare}>
        {children}
    </BookContext.Provider>
}
 
export {Provider}           //exporting by name - to import => import {Provider} from './whatever.js' 
export default BookContext;
import React, { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookEdit({book,onSubmit}){

    const {editBookById} = useBooksContext();

    const [title,setTitle] = useState(book.title);


    function handleChange(e){
        const val = e.target.value;
        setTitle(val);
    }



    function handleSubmit(e){
        e.preventDefault();
        console.log(title);
        editBookById(book.id,title);
        onSubmit();
    }



    return <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange}/>
        <button className="button is-primary">Save</button>
    </form>

}


export default BookEdit;
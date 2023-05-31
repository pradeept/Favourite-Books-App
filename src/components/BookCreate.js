import React,{useState} from 'react';

function BookCreate({createBook}){
    const [title,setTitle] = useState("");
    function handleChange(e){
        const val = e.target.value;
        setTitle(val);
    }
    function handleSubmit(e){
        e.preventDefault();
        createBook(title);
        setTitle("");
    }
    return <div className="book-create">
        <h3>Add a Book.</h3>
        <form>
            <label>Title</label>
            <input onChange={handleChange} value={title} className='input'/>
            <button onClick={handleSubmit} className='button'>Create</button>
        </form>
       
    </div>
}

export default BookCreate;
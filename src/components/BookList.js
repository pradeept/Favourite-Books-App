import React from 'react';
import BookShow from './BookShow';

function BookList({books,onDelete,onEdit}){
    return <div className="book-list">
        {books.map((item)=>{
            return <BookShow book={item} key={item.id} onDelete={onDelete} onEdit={onEdit}/>
        })}
    </div>
}

export default BookList;
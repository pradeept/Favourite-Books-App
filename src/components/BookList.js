import React from 'react';
import BookShow from './BookShow';

function BookList({list}){
    return <div>
        {list.map((item,index)=>{
            return <BookShow bookTitle={item} key={index}/>
        })}
    </div>
}

export default BookList;
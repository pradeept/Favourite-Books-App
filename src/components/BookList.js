import BookShow from './BookShow';
import useBooksContext from '../hooks/use-books-context';

function BookList(){
 
    const { books } = useBooksContext(); 

    return <div className="book-list">
 
        {books.map((item)=>{
            return <BookShow key={item.id} book={item} />
        })}
    </div>
}

export default BookList;
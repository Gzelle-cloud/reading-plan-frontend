import { useEffect, useState } from "react";
import MyBooks from "./MyBooks";
import { addBook, deleteBook, editBook, getAllBooks } from "./FetchBooks";

const ReadingPlanner = () => {
  const [myBooks, setMyBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [bookId, setBookId] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    getAllBooks(setMyBooks);
  }, [])

  const updatingInput = (_id, title, category) => {
    setEditing(true);
    setTitle(title);
    setCategory(category);
    setBookId(_id);
  }

  const handleButtonClick = () => {
    if (!title) return alert("Please enter a book author and/or a title");  

    editing ? 
    editBook(bookId, title, setTitle, category, setCategory, setMyBooks, setEditing) 
    : 
    addBook(title, setTitle, category, setCategory, setMyBooks)
  }

  return (
    <div className='container'>
    <div className="background-overlay">
      <h1>Plan your reading journey!</h1>
      <form className="section">
        <select className="input" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-fiction</option>
          <option value="professional">Professional</option>
          <option value="self-help">Self-help</option>
          <option value="children's books">Children's book</option>
        </select>
        <input 
          type="text"
          className="input" 
          placeholder="Author: Book title"
          value={ title }
          onChange={(e)=>setTitle(e.target.value)}
          />
      </form>  
      

      <div className="section">
        <button 
          className="btn"
          onClick={handleButtonClick}>
          { editing ? "Edit" : "Add" }
        </button>
      </div>
      </div>

        <div className="books">
          
        
      {
        myBooks.map((book) => 
          <MyBooks 
            bookProp = {book.title} key={book._id}
            categoryProp = {book.category}
            updatingInputProp = {() => updatingInput(book._id, book.title)}
            deleteBookProp = {() => deleteBook(book._id, setMyBooks)}
          />
        )
      }
      </div>
    </div>
  )
}

export default ReadingPlanner;

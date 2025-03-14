import axios from 'axios'

MY_URL = "https://reading-plan.onrender.com";

const getAllBooks = (setMyBooks) => {
  axios.get(`${MY_URL}/`)
  .then(({ data }) => {
    setMyBooks(data);
  })  
}

const addBook = (title, setTitle, category, setCategory, setMyBooks) => {
  axios.post(`${MY_URL}/savebooks`, { title, category })
  .then((data) => {
    setTitle("");
    setCategory("");
    getAllBooks(setMyBooks);
  })
}

const editBook = (bookId, title, setTitle, category, setCategory, setMyBooks, setEditing) => {
  axios.put(`${MY_URL}/editBook`, { _id: bookId, title, category })
  .then((data) => {
    setTitle("");
    setCategory("");
    setEditing(false);
    getAllBooks(setMyBooks);
  })
}

const deleteBook = (_id, setMyBooks) => {
  axios.delete(`${MY_URL}/deleteBook`, { data: { _id } })
  .then((data) => {
    getAllBooks(setMyBooks);
  })
}

export { getAllBooks, addBook, editBook, deleteBook };
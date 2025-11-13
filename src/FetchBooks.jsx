import axios from 'axios'

const MY_URL = "https://reading-plan.onrender.com";

const getAllBooks = (setMyBooks, setLoading) => {
  setLoading(true);
  axios.get(`${MY_URL}/`)
  .then(({ data }) => {
    setMyBooks(data);
  })
  .finally(() => setLoading(false));  
}

const addBook = (title, setTitle, category, setCategory, setMyBooks, setLoading) => {
  axios.post(`${MY_URL}/savebooks`, { title, category })
  .then((data) => {
    setTitle("");
    setCategory("");
    getAllBooks(setMyBooks, setLoading);
  })
}

const editBook = (bookId, title, setTitle, category, setCategory, setMyBooks, setEditing, setLoading) => {
  axios.put(`${MY_URL}/editBook`, { _id: bookId, title, category })
  .then((data) => {
    setTitle("");
    setCategory("");
    setEditing(false);
    getAllBooks(setMyBooks, setLoading);
  })
}

const deleteBook = (_id, setMyBooks, setLoading) => {
  axios.delete(`${MY_URL}/deleteBook`, { data: { _id } })
  .then((data) => {
    getAllBooks(setMyBooks, setLoading);
  })
}

export { getAllBooks, addBook, editBook, deleteBook };
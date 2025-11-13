import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const MyBooks = ({ bookProp, categoryProp, updatingInputProp, deleteBookProp }) => {
  return (
    <div className="book-container">
      <h4>{ bookProp }</h4>
      <p className="tag">#{ categoryProp }</p>
      <MdModeEdit className="icon" onClick={updatingInputProp}/>
      <MdDelete className="icon" onClick={deleteBookProp}/>
    </div>
  )
}

export default MyBooks;
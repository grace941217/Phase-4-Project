import {Link, useNavigate} from 'react-router-dom'

function BookCard({book}) {
  const {title, author, id, year} = book
  const navigate = useNavigate()

  function handleDelete() {
     fetch(`/books/${id}`,{
       method:'DELETE',
      })
      navigate('/')
      window.location.reload(false);
  }

    return (
      <>
      <div className="book">
        <Link className="item-link" to={`/books/${id}`}> <h2>{title}</h2></Link>
          <p className="book-detail">Author : {author}</p>
          <p className="book-detail">Written in <i>{year}</i></p>
          <button className="button"><Link id="edit-button" to={`/books/${id}/edit`}>Edit</Link></button>
          <button className="button" onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
}

export default BookCard
import {Link} from 'react-router-dom'

function ReviewCard({review}) {
    const {rating, book_review, id} = review

    return (
      <>
        <div className="content">
          <Link to={`/books/${id}`}></Link>
            <p>Rating : {rating}</p>
            <p>Review : {book_review}</p>
        </div>
     </>
    );
  }
  
  export default ReviewCard
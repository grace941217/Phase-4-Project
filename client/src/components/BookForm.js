import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'

function BookForm({addBook}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title:'',
    author:'',
    year:'',
    description:''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function onSubmit(e){
    fetch('/books',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({...formData, ongoing:true})
    })
    .then(res => {
        res.json().then(addBook)
        navigate("/")
    })
  }
    return (
      <div id ='book-form' className='content'>
        <div onSubmit={onSubmit}>
          <label>Title : </label>
          <input type='text' name='title' value={formData.title} onChange={handleChange} />
          
          <label> Author : </label>
          <input type='text' name='author' value={formData.author} onChange={handleChange} />
        
          <label>Year : </label>
          <input type='number' name='year' value={formData.year} onChange={handleChange} />

          <label>Description</label>
          <textarea type='text' rows='4' cols='50' name='description' value={formData.description} onChange={handleChange} />
        
          <input id="add-book" className="button" type='submit' value='Add Book' onClick={onSubmit}/>
        </div>
      </div>
    )
  }
  
  export default BookForm


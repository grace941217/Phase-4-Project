import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function SignUp() {
    const [formData, setFormData] = useState({
        username:'',
        password:''
    })
    const [errors, setErrors] = useState([])
    const {username, password} = formData
    const navigate = useNavigate()

    function onSubmit(e){
        e.preventDefault()
        navigate("/")
        const user = {
            username,
            password
        }
       
        fetch(`/users`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(user => {
                    navigate(`/login`)
                })
            } else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <> 
            <div id ="signup-page" className="content"> 
            <label>Username : </label>  
            <input placeholder="Your Username..." type='text' name='username' value={username} onChange={handleChange} />
        
            <label>Password : </label>
            <input placeholder="Your Password..." type='password' name='password' value={password} onChange={handleChange} />
            
            <input id="signup-form" className="button" type='submit' value="Sign Up" onClick={onSubmit}/>
            {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
            </div>
        </>

    )
}

export default SignUp

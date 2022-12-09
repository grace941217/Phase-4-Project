import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Login({updateUser}) {
    const [formData, setFormData] = useState({
        username:'',
        password:''
    })
    const [signup, setSignup] = useState(false)
    const [errors, setErrors] = useState([])
    const {username, password} = formData
    const navigate = useNavigate()

    function onSubmitLogin(e){
        // e.preventDefault()
        const user = {
            username,
            password
        }

        let url = `/login`
        if(signup) url = '/users'
        fetch(url,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(user => sessionStorage.setItem('user_id', user.id))
    
        // updateUser(true)      
        navigate(`/`)
    }

    function onSubmitSignin(e){
        e.preventDefault()
        // navigate("/")
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
                    // navigate(`/login`)
                    // window.location.reload(false);
                })
            } else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
                // window.location.reload(false);

            }
        })

    }


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }

    return (
        <> 
        <div id="login-page" className="content" > 

        <label>Username : </label>
        <input placeholder="Your Username..." type='text' name='username' value={username} onChange={handleChange} />
      
        <label>Password : </label>
        <input placeholder="Your Password..." type='password' name='password' value={password} onChange={handleChange} />
       
        <input id="login-form" className="button" type='submit' value='Log In' onClick={()=> {
            onSubmitLogin();
            setSignup(true);
            // updateUser(true)
        }}/>
        <input id="signup-form" className="button" type='submit' value="Sign Up" onClick={onSubmitSignin}/>


        {errors? <div>{errors}</div>:null}
        </div>
        </>
    )
}

export default Login

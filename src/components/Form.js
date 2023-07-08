import React,{useState} from 'react'
export default function Form(props) {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState('');
    const [emailChecker, setemailChecker] = useState("");
    const [passwordChecker, setpasswordChecker] = useState("");
    const handleEmail = (event) =>{
        setemail(event.target.value);
        if (event.target.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) !== null) {
            setemailChecker("");
        }
        else if(event.target.value === "") {
            setemailChecker("");
        }
        else{
            setemailChecker("Invalid E-mail!");
        }
    };
    const handelPassword = (event) =>{
        let pass = event.target.value;
        setpassword(pass);
        if (/[A-Z]/.test(pass) === false) {
            setpasswordChecker("Your password must contain at least one uppercase letter.")
        }
        else if (/[a-z]/.test(pass) === false) {
            setpasswordChecker("Your password must contain at least one lowercase letter.")
        }
        else if (/[!@#$%^&*]/.test(pass) === false) {
            setpasswordChecker("Your password must contain at least one special letter.")
        }
        else if (/[0-9]/.test(pass) === false) {
            setpasswordChecker("Your password must contain at least one digit letter.")
        }
        else if (pass.length < 8) {
            setpasswordChecker("Your password must contain more the 8 characters.")
        }
        else{
            setpasswordChecker("");
        }
    };
    const showPassword = () =>{
        let passInput = document.getElementById("exampleInputPassword1");
        let passCheckbox = document.getElementById("exampleCheck1");
        if (passCheckbox.checked) {
            passInput.type = "text";
        }
        else{
            passInput.type = "password";
        }
    };
    const handleSubmit = (e) =>{
        if (email === "" || password === "" || passwordChecker !== "") {
            e.preventDefault();
        };
    };
  return (
    
    <form className={`text-${props.txtMode}`}>
        <div >
            <h1 className="text-center mb-3">Login here</h1>
        </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} name='user-email' onChange={handleEmail}/>
    <div id="emailHelp" className={`form-text text-${props.txtMode}`}>We'll never share your email with anyone else.</div>
    <div id="emailHelp" className="form-text text-danger fs-4">{emailChecker}</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password {props.passInfo}</label>
    <input type="password" className="form-control" name='user-password' id="exampleInputPassword1" value={password} onChange={handelPassword}/>
  </div>
    <div id="emailHelp" className="form-text text-danger fs-4">{passwordChecker}</div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={showPassword}/>
    <label className="form-check-label" htmlFor="exampleCheck1">show password</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
  );
}

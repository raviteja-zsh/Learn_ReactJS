import { useState } from "react";

function Login(){

    var[email,setEmail]= useState("")
    var[pword,setPword] = useState("")
    //for storing


    //for validation
    var[emailError,setEmailError] = useState("");
    var[pwordError,setPwordError] = useState("");

    //forapi call
    var[apicall,setApicall] = useState("");

    function handleEmail(e){
        setEmail(e.target.value)
    }

    function handlePword(e){
        setPword(e.target.value)
    }

    function handleLogin(){
        var noOfErrors = 0;

        if(email.length > 8){ // should use regular expression
            setEmailError("");
        }else{
            setEmailError("Invalid Email ID");
            noOfErrors++;
        }

        if(pword.length>8){
            setPwordError("");
        }else{
            setPwordError("Invalid password");
            noOfErrors++;
        }

        if(noOfErrors == 0){
            setApicall("API Call Successful")
        }else{
            setApicall("")
        }


    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h3>Login</h3>
                    <div className="mb-3 mt-3">
                        <label>Email</label>
                        <input className="form-control" onChange={e => handleEmail(e)} type="text" placeholder="Name" ></input>
                        <div className="text-danger" >
                            {emailError}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input className="form-control" onChange={e => handlePword(e)} type="password" placeholder="Password"></input>
                        <div className="text-danger">
                            {pwordError}
                        </div>
                    </div>
                    <div>
                        <button onClick={e => handleLogin(e)} className="btn btn-warning">Create Account</button>
                    </div>

                    <div>
                        {email} <br/>
                        {pword}
                    </div>

                    <div className="text-success">
                        {apicall}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
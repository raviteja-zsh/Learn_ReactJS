import { useState } from "react";

function Signup(){

    // var name = "Thanos"
    // var email = "cap@stark.edu.in"

    //in javascript if a variables goes to html it does it change again
    //to make it change we use usestate

    var [name,setName] = useState("Thanos");
    var [email,setEmail] = useState("cap@stark.edu.in");
    var [mobile,setMobile] = useState();
    var [Pword,setPword] = useState();


    function HandleNameChange(event){
        setName(event.target.value);
    }

    function HandleEmailChange(event){
        setEmail(event.target.value);
    }

    function HandleMobileChange(event){
        setMobile(event.target.value);
    }

    function HandlePwordChange(event){
        setPword(event.target.value);
    }

    function HandleCreateAccount(){
        console.log(name,email,Pword,mobile)
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h3>Create Account</h3>
                    <div className="mb-3 mt-3">
                        <label>Name</label>
                        <input type="text" onChange={event => HandleNameChange(event)} className="form-control" placeholder="Name"/>
                    </div>
                    <div className="mb-3">
                        <label>Email</label>
                        <input type="text" onChange={event => HandleEmailChange(event)} className="form-control" placeholder="Email"/>
                    </div>
                    <div className="mb-3">
                        <label>Mobile</label>
                        <input type="number" onChange={event => HandleMobileChange(event) } className="form-control" placeholder="Mobile"/>
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input type="password" onChange={event => HandlePwordChange(event)} className="form-control" placeholder="password"/>
                    </div>
                    <div>
                        <button className="btn btn-warning" onClick={e => HandleCreateAccount()}>Create Account</button>
                    </div>
                    {name}
                    <br/>
                    {email}
                </div>
            </div>
        </div>
    )
}

export default Signup;
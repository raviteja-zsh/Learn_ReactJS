
function ForgotPassword(){
    return(
        <div className="container">
        <div className="row mt-4">
        <div className="col-4"></div>
         <div className="col-4">
         <h3>Forgot Password</h3>
         <div className="mb-4">
             <label>Username/Emaild</label>
             <input type="text" className="form-control" placeholder="Username/Email"></input>
             </div>            
             <div>
                 <button className="btn btn-primary mb-3">Send Verification Code</button>
                 </div> 
                 <div>
                <a className="btn btn-primary mb-2" href="/signup">Signup</a> <br></br>
                <a className="btn btn-primary mb-2" href="/login">Login</a> <br></br>
                <a className="btn btn-primary mb-2" href="/">Home</a> <br></br>
            </div>              
         </div>
        </div>
     </div>
    )
}

export default ForgotPassword
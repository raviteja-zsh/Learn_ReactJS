
function Signup(){
    return(
        <div className="container">
           <div className="row mt-4">
           <div className="col-4"></div>
            <div className="col-4">
            <h3>Signup</h3>
            <div className="mb-4">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username"></input>
                </div>            
                <div className="mb-4">
                <label>Email</label>
                <input type="text" className="form-control" placeholder="Email"></input>
                </div>
                <div className="mb-4">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="password"></input>
                </div> 
                <div>
                    <button className="btn btn-primary mb-3">Signup</button>
                </div>

                <div>
                <a className="btn btn-primary mb-2" href="/login">login</a> <br></br>
                <a className="btn btn-primary mb-2" href="/">Home</a> <br></br>
            </div> 
              
            </div>
           </div>
        </div>
    )
}

export default Signup;

function Login(){
    return( //should use () instead of {}
        <div className="container">
           <div className="row mt-4">
           <div className="col-4"></div>
            <div className="col-4">
            <h3>Login</h3>
                <div className="mb-4">
                <label>Email</label>
                <input type="text" className="form-control" placeholder="Email"></input>
                </div>
                <div className="mb-4">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="password"></input>
                </div> 
                <div className="mb-4">
                    <button className="btn btn-primary">Login</button>
                    </div>
                    <div>
                <a className="btn btn-primary mb-2" href="/signup">Signup</a> <br></br>
                <a className="btn btn-primary mb-2" href="/forgotpassword">forgotpassword</a> <br></br>
                <a className="btn btn-primary mb-2" href="/">Home</a> <br></br>
            </div>               
            </div>

           </div>
        </div>
    )
}

export default Login
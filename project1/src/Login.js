
function Login(){
    return( //should use () instead of {}
        <div className="container">
           <div className="row">
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
                <div>
                    <button className="btn btn-primary">Login</button>
                    </div>               
            </div>
           </div>
        </div>
    )
}

export default Login
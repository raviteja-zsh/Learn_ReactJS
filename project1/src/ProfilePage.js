
function ProfilePage(){
    return(
        <div className="container">
        <div className="row mt-4">
        <div className="col-4"></div>
         <div className="col-4">
         <h3>Update Password</h3>
         <div className="mb-4">
             <label>Password</label>
             <input type="password" className="form-control" placeholder="Username/Email"></input>
             </div>            
             <div>
                 <button className="btn btn-primary mb-3">Update</button>
                 </div> 
                 <div>
            <a className="btn btn-primary mb-2" href="/">Home</a>
                </div>  
         </div>
        </div>
     </div>
    )
}

export default ProfilePage
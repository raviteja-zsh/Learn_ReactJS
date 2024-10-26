import Form from "./Auth/Form";

function Home(){
    return(
        <div className="container">
        <h1>Hardest choices requires hardest Will</h1>
        <a className="btn btn-primary" href="/signup">Signup</a>
        <div className="mt-3"><Form/></div>
        
        </div>
    
    )
}

export default Home;
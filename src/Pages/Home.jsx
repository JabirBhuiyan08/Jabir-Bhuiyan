import { Link } from "react-router-dom";



const Home = () => {
    return (
        <div>
            <h1>This is Home</h1>
            <Link to="/about" className="btn btn-primary">Go to About</Link>
            
            
        </div>
    );
};

export default Home;
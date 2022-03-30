import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="notfound">
            <h4>Error 404: Page not found</h4><br />
            <h3><Link to="/">Click here and return to home page</Link> to see more recipes</h3>
        </div>
     );
}
 
export default NotFound;
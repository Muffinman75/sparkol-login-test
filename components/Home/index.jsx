import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>
                WELCOME HOME!
            </h1>
            <Link to='/'>
                Click here to Logout!!
            </Link>
        </div>
    );
}
  
export default Home;
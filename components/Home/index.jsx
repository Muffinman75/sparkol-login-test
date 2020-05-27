import React from "react";
import { Link } from 'react-router-dom';
import { getUserName } from "../../helpers";

function Home() {
    const userName = getUserName();

    function logOut() {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        localStorage.removeItem("user_name");
    }

    return (
        <div>
            <h1>
                Welcome home {userName}!
            </h1>

            <Link to="/">
                <button type="submit" className="" onClick={logOut}>
                    Sign out
                </button>
            </Link>
        </div>
    );
}
  
export default Home;
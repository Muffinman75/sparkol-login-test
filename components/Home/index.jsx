import React from "react";
import { Link } from 'react-router-dom';
import { getUserName, logOut } from "../../helpers";

function Home() {
    const userName = getUserName();
    const signOut = logOut();

    // function logOut() {
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("user_id");
    //     localStorage.removeItem("user_name");
    //     setAuthTokens();
    // }

    return (
        <div>
            <h1>
                Welcome home {userName}!
            </h1>

            <Link to="/">
                <button type="submit" className="" onClick={signOut}>
                    Sign out
                </button>
            </Link>
        </div>
    );
}
  
export default Home;
import React from "react";
import { logoutUser } from "../../authentication";
import { getUserName } from "../../helpers";

function Home() {
    const userName = getUserName();
    return (
        <div>
            <h1>
                Welcome home {userName}!
            </h1>

            <button type="submit" className="" onClick={logoutUser}>
                Log out
            </button>
        </div>
    );
}
  
export default Home;
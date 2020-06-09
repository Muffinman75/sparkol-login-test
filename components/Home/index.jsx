import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { getUserName } from "../../helpers";

function Home() {

    const [notes, setNotes] = useState([]);

    const userName = getUserName();
    const token = localStorage.getItem("token");

    useEffect(() => {
        // Update the document title using the browser API
        getNotes();
        // document.title = `You clicked ${count} times`;
    }, []);
    async function getNotes() {
        await axios.get("http://localhost:3333/notes", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
            ).then(result => {
            if (result.status === 200) {
                setNotes(result.data);
                console.log('result', result);
            } else {
                console.log('error');
            }
        }).catch(e => {
            console.log('catch error');
        });
    }

    function logOut() {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        localStorage.removeItem("user_name");
    }

    return (
        <div className="logout-container">
            <h1>
                Welcome home {userName}!
            </h1>

            <div>
                {notes.map((note, index) => (
                    <>
                        <h2>
                            {note.title}
                        </h2>
                        <p>
                            {note.date}
                        </p>
                        <p>
                            {note.body}
                        </p>
                    </>    
                ))}
            </div>

            <Link to="/">
                <button type="submit" className="logout" onClick={logOut}>
                    Sign out
                </button>
            </Link>
        </div>
    );
}
  
export default Home;
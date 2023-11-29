import { useRef, useState, useEffect, useContext } from "react";

import './Login.css';

export default function Login(){
    const userRef = useRef();
    const errRef = useRef();

    const [userEmail, setUserEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');  
    }, [userEmail, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userEmail, pwd);
        setUserEmail('');
        setPwd('');
        setSuccess(true);
    }

    return(
        <>
        {
            success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
            <main>
                <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="useremail">
                        Email:
                    </label>

                    <input
                        type="text"
                        id="useremail"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUserEmail(e.target.value)}
                        value={user}
                        required
                    />

                    <label htmlFor="password">
                        Password:
                    </label>

                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                    />

                    <button>Sign In</button>
                </form>
                <p>
                    Need an Account?<br />
                    <span className="line">
                            <a href="#">Sign Up</a>
                        </span> 
                </p>
            </section>
            </main>
            )
        }
        </>
        
        
    )
}
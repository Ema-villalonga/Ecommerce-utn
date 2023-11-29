import { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';

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
                        <Link to='/'>Home</Link>
                    </p>
                </section>
            ) : (
            <main className="container-sign-in">
                <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h2 className="title-sign-in">Sign In</h2>
                <form onSubmit={handleSubmit} className="form-contact">
                    <label htmlFor="useremail">
                        Email:
                    </label>

                    <input
                        type="text"
                        id="useremail"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUserEmail(e.target.value)}
                        value={userEmail}
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
                        <Link to='/register'>Sign Up</Link>
                    </span> 
                </p>
            </section>
            </main>
            )
        }
        </>
        
        
    )
}
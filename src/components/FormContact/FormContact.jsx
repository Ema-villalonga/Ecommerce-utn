import './FormContact.css';
import { useState } from 'react';

export default function FormContact(){
    const [data, setData] = useState({name: "", email: "", phone: "", mensagge: ""});
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]: value});
    }

    const handleSubmit = (e)  => {
        e.preventDefault();
    }

    return (
        <form className='container-form' method='post' onSubmit={handleSubmit}>
            <h1 className='title-form'>Contact <span>Here</span></h1>
            <div className='inputs-contact' onChange={handleChange}>
                <input type='text' name='name'  id='' value={data.name} placeholder='Enter your last name'/>
                <input type='email' name='email'  id='' value={data.email} placeholder='Enter your email addre'/>
                <input type='tel' name='phone'  id='' value={data.phone} placeholder='Enter your number telephone'/>
                <textarea name='mensagge' id='' value={data.mensagge} cols='40' rows='10' placeholder='Type here...'/>
                <button className='btn-send-contact' type='submit'>Send</button>
            </div>
            <p>{data.name}{data.email}{data.phone}{data.mensagge}</p>
        </form>
    )
}
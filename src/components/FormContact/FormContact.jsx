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
            <input type='text' name='name'  id='' onChange={handleChange} value={data.name} placeholder='Enter your last name'/>
            <input type='email' name='email'  id='' onChange={handleChange} value={data.email} placeholder='Enter your email addre'/>
            <input type='tel' name='phone'  id='' onChange={handleChange} value={data.phone} placeholder='Enter your number telephone'/>
            <textarea name='mensagge' id='' onChange={handleChange} value={data.mensagge} cols='40' rows='10' placeholder='Type here...'/>
            <button className='btn-send-contact' type='submit'>Send</button>
            <p>{data.name}{data.email}{data.phone}{data.mensagge}</p>
        </form>
    )
}
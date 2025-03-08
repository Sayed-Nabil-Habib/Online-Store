import React, { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        subject: '',
        email: '',
        body: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card p-4 shadow-lg contact-card hover-effect" style={{ maxWidth: '500px', width: '100%' }}>
                <h2 className="text-center mb-4">Contact Us</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">Full Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="fullName" 
                            name="fullName" 
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="subject" 
                            name="subject" 
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            name="email" 
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="body" className="form-label">Message</label>
                        <textarea 
                            className="form-control" 
                            id="body" 
                            name="body" 
                            rows="4" 
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;

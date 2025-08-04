import React, { useState } from 'react';
import internService from '../services/internService';

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        email: '', fullName: '', gender: '', highestQualification: '', college: '',
        country: '', contactNumber: '', internshipProgram: '', skillLevel: 'Beginner',
        duration: '1 month', interestedInJob: false, links: ''
    });
    const [status, setStatus] = useState({ message: '', type: '' });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ message: 'Submitting your application...', type: 'info' });

        if (!formData.internshipProgram) {
            setStatus({ message: 'Please select an internship program.', type: 'error' });
            return;
        }

        try {
            await internService.registerIntern(formData);
            setStatus({ message: 'Registration successful! We will get back to you soon.', type: 'success' });
            setFormData({
                email: '', fullName: '', gender: '', highestQualification: '', college: '',
                country: '', contactNumber: '', internshipProgram: '', skillLevel: 'Beginner',
                duration: '1 month', interestedInJob: false, links: ''
            });
        } catch (error) {
            setStatus({ message: 'Registration failed. The email might already be registered.', type: 'error' });
            console.error('Registration error:', error);
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Internship/Volunteer Registration Form</h2>
                
                {status.message && (
                    <div className={`status-message status-${status.type}`}>
                        {status.message}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" name="email" id="email" className="form-input" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fullName" className="form-label">Full Name (for Certificate)</label>
                            <input type="text" name="fullName" id="fullName" className="form-input" value={formData.fullName} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Gender</label>
                            <div className="radio-group">
                                <label><input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} required /> Male</label>
                                <label><input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} /> Female</label>
                                <label><input type="radio" name="gender" value="Other" checked={formData.gender === 'Other'} onChange={handleChange} /> Other</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="highestQualification" className="form-label">Highest Academic Qualification</label>
                            <input type="text" name="highestQualification" id="highestQualification" className="form-input" value={formData.highestQualification} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="college" className="form-label">College/University</label>
                            <input type="text" name="college" id="college" className="form-input" value={formData.college} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="country" className="form-label">Country</label>
                            <input type="text" name="country" id="country" className="form-input" value={formData.country} onChange={handleChange} required />
                        </div>
                         <div className="form-group">
                            <label htmlFor="contactNumber" className="form-label">Contact Number (WhatsApp/SMS)</label>
                            <input type="tel" name="contactNumber" id="contactNumber" className="form-input" value={formData.contactNumber} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="internshipProgram" className="form-label">Preferred Internship Program</label>
                            <select name="internshipProgram" id="internshipProgram" className="form-select" value={formData.internshipProgram} onChange={handleChange} required>
                                <option value="" disabled>Select a program...</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Java Full Stack">Java Full Stack</option>
                                <option value="MERN Stack">MERN Stack</option>
                                <option value="Data Science and Analytics">Data Science and Analytics</option>
                                <option value="App Development">App Development</option>
                                <option value="UI/UX Design">UI/UX Design</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Skill Level</label>
                            <div className="radio-group">
                                <label><input type="radio" name="skillLevel" value="Beginner" checked={formData.skillLevel === 'Beginner'} onChange={handleChange} /> Beginner</label>
                                <label><input type="radio" name="skillLevel" value="Intermediate" checked={formData.skillLevel === 'Intermediate'} onChange={handleChange} /> Intermediate</label>
                                <label><input type="radio" name="skillLevel" value="Advance" checked={formData.skillLevel === 'Advance'} onChange={handleChange} /> Advance</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Internship Duration</label>
                            <div className="radio-group">
                                <label><input type="radio" name="duration" value="1 month" checked={formData.duration === '1 month'} onChange={handleChange} /> 1 Month</label>
                                <label><input type="radio" name="duration" value="2 Months" checked={formData.duration === '2 Months'} onChange={handleChange} /> 2 Months</label>
                                <label><input type="radio" name="duration" value="3 Months" checked={formData.duration === '3 Months'} onChange={handleChange} /> 3 Months</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group form-full-width" style={{marginTop: '1.75rem'}}>
                        <label htmlFor="links" className="form-label">Resume / LinkedIn / Portfolio / GitHub Link</label>
                        <input type="text" name="links" id="links" className="form-input" value={formData.links} onChange={handleChange} placeholder="https://... or NA" required />
                    </div>
                    <div className="checkbox-group" style={{marginTop: '1.75rem'}}>
                        <label>
                            <input type="checkbox" name="interestedInJob" checked={formData.interestedInJob} onChange={handleChange} />
                            Are you interested in a full-time job opportunity?
                        </label>
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="cta-button">
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;
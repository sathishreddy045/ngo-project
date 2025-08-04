import React, { useState, useEffect } from 'react';
import internService from '../services/internService';

const AdminViewPage = () => {
    const [interns, setInterns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchInterns = async () => {
            try {
                const response = await internService.getInterns();
                const sortedInterns = response.data.sort((a, b) => new Date(b.registrationDate) - new Date(a.registrationDate));
                setInterns(sortedInterns);
            } catch (err) {
                setError('Failed to fetch applicants. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchInterns();
    }, []);

    if (loading) {
        return <div className="container" style={{textAlign: 'center'}}>Loading applicants...</div>;
    }

    if (error) {
        return <div className="container" style={{textAlign: 'center', color: '#991b1b'}}>{error}</div>;
    }

    return (
        <div className="container">
            <div className="admin-view">
                <h2>Registered Applicants ({interns.length})</h2>
                <div className="table-wrapper">
                    {interns.length === 0 ? (
                        <p>No applicants have registered yet.</p>
                    ) : (
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Contact</th>
                                    <th>Program Choice</th>
                                    <th>Registered On</th>
                                </tr>
                            </thead>
                            <tbody>
                                {interns.map(intern => (
                                    <tr key={intern.id}>
                                        <td>
                                            <div className="text-primary">{intern.fullName}</div>
                                            <div className="text-secondary">{intern.college}</div>
                                        </td>
                                        <td>
                                            <div className="text-primary">{intern.email}</div>
                                            <div className="text-secondary">{intern.contactNumber}</div>
                                        </td>
                                        <td>
                                            <div className="text-primary">{intern.internshipProgram}</div>
                                            <div className="text-secondary">{intern.skillLevel} ({intern.duration})</div>
                                        </td>
                                        <td>{new Date(intern.registrationDate).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminViewPage;
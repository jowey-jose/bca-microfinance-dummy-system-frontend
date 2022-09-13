import React, { useState, useEffect } from 'react'
import UserService from '../services/user.service';

// Show Loan Applicant View
const handleLoanRequest = () => {
    alert("Loan Request Sent Successfully.")
}

const BoardLoanApplicant = () => {
    const [content, setContent] = useState();

    useEffect(() => {
        UserService.getLoanApplicantBoard().then((response) => {
            setContent(response.data);
        }, (error) => {
            const _content =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) || error.message || error.toString();
            setContent(_content);
        });

    }, [])

    return (
        <div className="container">
            <header className="jumbotron">
                <h3>{content}</h3>
            </header>
            <h3>Your Journey Begins Here:</h3>
            <button onClick={handleLoanRequest}>Request New Loan</button>
        </div>
    )
}

export default BoardLoanApplicant
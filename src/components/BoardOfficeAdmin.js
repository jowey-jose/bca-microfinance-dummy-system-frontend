import React, { useState, useEffect } from 'react';
import UserService from '../services/user.service';

// Show Office Admin View.

const BoardOfficeAdmin = () => {
    const [content, setContent] = useState();

    const handleDisburse = () => {
        alert("Loan Amount is Successfully Disbursed to Client Mpesa Number.")
        
    }

    useEffect(() => {
        UserService.getOfficeAdminBoard().then((response) => {
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
            <h3>Approved Loans Awaiting Disbursement</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Loan Status</th>
                        <th scope="col">Disbursement Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Loan</td>
                        <td>Applicant</td>
                        <td style={{ color: 'orange' }}>Approved</td>
                        <td style={{ color: 'red' }}>Not Disbursed</td>
                        <td><button onClick={handleDisburse} type="button">Disburse to Mpesa</button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td style={{ color: 'orange' }}>Approved</td>
                        <td style={{ color: 'red' }}>Not Disbursed</td>
                        <td><button onClick={handleDisburse} type="button">Disburse to Mpesa</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BoardOfficeAdmin;
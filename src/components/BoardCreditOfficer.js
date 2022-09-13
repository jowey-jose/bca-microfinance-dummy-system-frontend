import React, { useState, useEffect } from 'react';
import UserService from '../services/user.service';
import Modal from 'react-modal';

// Implementing Modal
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

// Show Credit Officer View.
const BoardCreditOfficer = () => {
    const [content, setContent] = useState();

    // Credit Officer view
    const handleCreditRequest = () => {
        alert("Loan Package created Successfully, Awaiting Supervisor Approval.")
        
    }

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        UserService.getCreditOfficerBoard().then((response) => {
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

            <h3>New Loan Requests:</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Loan</td>
                        <td>Applicant</td>
                        <td style={{ color: 'green' }}>New Request</td>
                        <td><button onClick={openModal}>Create Loan Package</button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td style={{ color: 'green' }}>New Request</td>
                        <td><button onClick={openModal}>Create Loan Package</button></td>
                    </tr>
                </tbody>
            </table>

            {/* <button onClick={openModal}>Open Modal</button> */}
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Loan Details</h2>
                <button onClick={closeModal}>close</button>
                <br />
                <br />
                <div><strong>LOAN APPLICANT BIO DATA</strong></div>
                <form>
                    {/* <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button> */}
                    <label for="bname">Business Name:</label>
                    <input type="text" id="bname" value="Johnwise Enterprise" /><br />
                    <label for="blocation">Business location:</label>
                    <input type="text" id="blocation" value="Nairobi, Waiyaki way" /><br />
                    <label for="brevenue">Monthly Business Revenue:</label>
                    <input type="text" id="brevenue" value="ksh: 100,000" /><br />
                    <label for="lqualified">Loan Qualified:</label>
                    <input type="text" id="lqualified" value="ksh: 250,000" /><br />
                    <label for="pfee">Processing fee Paid:</label>
                    <input type="text" id="pfee" value="ksh: 300" /><br />
                    <label for="rperiod">Repayment Period:</label>
                    <input type="text" id="rperiod" value="3 Months" /><br /><br/>
                    {/* <input type="submit" value="Submit" /> */}
                    <button onClick={handleCreditRequest}>Submit</button>

                </form>
            </Modal>

        </div>
    );
};

export default BoardCreditOfficer
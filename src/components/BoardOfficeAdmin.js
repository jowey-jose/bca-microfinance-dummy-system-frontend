import React, {useState, useEffect } from 'react';
import UserService from '../services/user.service';

// Show Office Admin View.

const BoardOfficeAdmin = () => {
    const [content, setContent] = useState();

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
        </div>
    );
};

export default BoardOfficeAdmin;
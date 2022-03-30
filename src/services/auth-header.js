// This is a helper function that checks Local Storage for 'user' item.
// If there is a logged in 'user' with accessToken (JWT), return HTTP Authorization header.

export default function authHeader () {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        return {Authorization: 'Bearer ' + user.accessToken};

        // for Node.js Express back-end
        // return {'x-access-token': user.accessToken};
       
    } else{
        return {};
    }
};


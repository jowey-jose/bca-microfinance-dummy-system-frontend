// Data Service Provider
// Methods for retrieving data from the server.
// In this case we access protected resources, which the Http request needs Authorization header.
// We define a service for accessing the data.
// Note we add a HTTP header with the help of authHeader() function when requesting authorized resource.

import axios from "axios";
import authHeader from "./auth-header";
const API_URL= "http://localhost:8090/api/test/";

const getPublicContent = () => {
    return axios.get(API_URL + "all");
};

const getLoanApplicantBoard = () => {
    return axios.get(API_URL + "loan_applicant", { headers: authHeader()});
};

const getSupervisorBoard = () => {
    return axios.get(API_URL + "supervisor", { headers: authHeader()});
};

const getCreditOfficerBoard = () => {
    return axios.get(API_URL + "credit_officer", { headers: authHeader()});
};

const getOfficeAdminBoard = () => {
    return axios.get(API_URL + "office_admin", { headers: authHeader()})
};

const userService ={
    getPublicContent,
    getLoanApplicantBoard,
    getSupervisorBoard,
    getCreditOfficerBoard,
    getOfficeAdminBoard
};

export default userService;
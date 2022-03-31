// Navigation Bar
// The Navbar dynamically changes by login status and current User's roles.
// - Home: always
// - Login & SignUp: If user hasn't signed in yet
// - User: AuthService.getCurrentUser() returns a value
// - Board LoanApplicant: roles include ROLE_LOAN_APPLICANT
// - Board Supervisor: roles include ROLE_SUPERVISOR
// - Board CreditOfficer: roles include ROLE_CREDIT_OFFICER
// - Board OfficeAdmin: roles include ROLE_OFFICE_ADMIN

import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AuthService from "./services/auth.service";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardLoanApplicant from "./components/BoardLoanApplicant";
import BoardCreditOfficer from "./components/BoardCreditOfficer";
import BoardSupervisor from "./components/BoardSupervisor";
import BoardOfficeAdmin from "./components/BoardOfficeAdmin";

const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [showCreditOfficerBoard, setShowCreditOfficerBoard] = useState(false);
  const [showSupervisorBoard, setShowSupervisorBoard] = useState(false);
  const [showOfficeAdminBoard, setShowOfficeAdminBoard] = useState(false);
  const [showLoanApplicantBoard, setShowLoanApplicantBoard] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowCreditOfficerBoard(user.roles.includes("ROLE_CREDIT_OFFICER"));
      setShowSupervisorBoard(user.roles.includes("ROLE_SUPERVISOR"));
      setShowOfficeAdminBoard(user.roles.includes("ROLE_OFFICE_ADMIN"));
      setShowLoanApplicantBoard(user.roles.includes("ROLE_LOAN_APPLICANT"));

    }
  }, []);
  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Business Cash Advance
        </Link>
        <div className="navbar-nav mr-auto">

          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {showCreditOfficerBoard && (
            <li className="nav-item">
              <Link to={"/credit-officer"} className="nav-link">
                Credit Officer Board
              </Link>
            </li>
          )}

          {showSupervisorBoard && (
            <li className="nav-item">
              <Link to={"/supervisor"} className="nav-link">
                Supervisor Board
              </Link>
            </li>
          )}

          {showOfficeAdminBoard && (
            <li className="nav-item">
              <Link to={"/office-admin"} className="nav-link">
                Office Admin Board
              </Link>
            </li>
          )}

          {showLoanApplicantBoard && (
            <li className="nav-item">
              <Link to={"/loan-applicant"} className="nav-link">
                Loan Applicant Board
              </Link>
            </li>
          )}

          {/* {currentUser && (
            <li className="nav-item">
              <Link to={"/loan-applicant"} className="nav-link">
                Loan Applicant Board
              </Link>
            </li>
          )} */}

        </div>
        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/credit-officer" element={<BoardCreditOfficer />} />
          <Route path="/supervisor" element={<BoardSupervisor />} />
          <Route path="/office-admin" element={<BoardOfficeAdmin />} />
          <Route path="/loan-applicant" element={<BoardLoanApplicant />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

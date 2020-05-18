import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';
import { Navbar } from '../Navbar/Navbar';
import './App.css';
import { Routes } from '../Routes/Routes';
import { JobsProvider } from '../../context/JobsContext';
import { Modal } from '../Modal/Modal';
import { ModalProvider } from '../../context/ModalContext';

export const App: React.FC = () => {
    return (
        <Router>
            <AuthProvider>
                <ModalProvider>
                    <JobsProvider>
                        <Navbar />
                        <Routes />
                        <Modal />
                    </JobsProvider>
                </ModalProvider>
            </AuthProvider>
        </Router>
    )
}
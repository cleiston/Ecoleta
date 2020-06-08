import React from 'react';
import { FiCheckCircle, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './styles.css';

const Success = () => {


    return (
        <div id="success-message">
            <span id="checkCircle"><FiCheckCircle /></span>
            <h1 id="message">Cadastro concluído!</h1>
            <Link to="/">
                <span><FiArrowLeft id="arrow-left" /></span>
            </Link>
        </div>
    );
}

export default Success;
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useContext } from 'react';
import { userLoginContextObj } from '../../Context/UserContext/UserLoginContext';
import './invitation.css'
import jsPDF from 'jspdf';

const Invitation = () => {

    
    let { user } = useContext(userLoginContextObj);

    


    let p = 0;


    if (user.specializations === 'Cardiology') {
        p = 50000;
    }
    else if (user.specializations === 'Dermatology') {
        p = 2000;
    }
    else if (user.specializations === 'Ophthalmology') {
        p = 1200;
    }



    else if (user.specializations === 'Urology') {
        p = 4000;
    }
    else if (user.specializations === 'Gastroenterology') {
        p= 1500;
    }
    else if (user.specializations === 'Orthopedic') {
        p = 2000;
    }
    else if (user.specializations === 'Hematology') {
        p = 5000;
    }
    else if (user.specializations === 'Physiotherapy') {
        p= 1800;
    }


let generatePdf=()=>{
    const doc= new jsPDF();
    const img = new Image()
    img.src='https://res.cloudinary.com/dlcfdkdjv/image/upload/v1708836814/jryknkhe3uf6pxhamx08.png'
    doc.addImage(img, 'JPEG', 0, 0, 190, 60);
    doc.setFontSize(18);
    doc.text(`First Name: ${user.firstname}`, 10, 60);
    doc.text(`Last Name: ${user.lastname}`, 10, 80);
    doc.text(`Specialization: ${user.specializations}`, 10, 100);
    doc.text(`Estimate: Rs ${p}`, 10, 120);
    doc.text('For further process we will contact you directly THANK YOU!', 10, 140);
    doc.save(`${user.firstname}_${user.lastname}_estimate.pdf`);
}


    return (
        <>
            <div className='img' style={{minHeight:'100vh'}}>
            <div className="container">
            <div className = "row justify-content-end ">
            <div className = 'col-sm-5 '> 
            <div className="card"style={{marginTop: '20%'}}>
                <h3 className="card-header">Estimation Details</h3>
                <div className="card-body">
                <h5 className="card-title"></h5>
                <h4>First Name:{user.firstname}</h4>
                <h4>Last Name:{user.lastname}</h4>
                <h4>Specialization:{user.specializations}</h4>
                <h4>Estimate:Rs {p}</h4>
                <a href="#" className="btn btn-primary" onClick={generatePdf} >Download</a>
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>

        </>
    )
}

export default Invitation
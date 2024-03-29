"use client";
import React from "react";
import Navbar from "../componants/navbar";
import Footer from "../componants/footer";
import Switcher from "../componants/switcher";
import RentEV from "../rentEV/page";

const Ev = ({ location }) => {
    const handleSubmit = () => {
        const name = location.state.name; // Assuming name is passed as state

        // Redirect to the review page with name as a query parameter
        window.location.href = `/review?Owner Name:=${OwnerName}`;
    };

    return (
        <>
            <Navbar navClass="navbar-white" />
            <div className="pt-16 flex justify-center items-center min-h-screen">
                <div className="w-full sm:max-w-md">
                    <h1 className="text-center text-2xl mb-4">Preview</h1>
                    <div className="space-y-4">
                        <fieldset>
                            <legend>Owner Details</legend>
                            <p><strong>Owner Name:</strong> {RentEV.ownerName}</p>
                            <p><strong>Owner Contact:</strong> {RentEV.ownerContact}</p>
                            <p><strong>Owner Email:</strong> {RentEV.ownerEmail}</p>
                            <p><strong>Owner City:</strong> {RentEV.ownerCity}</p>
                        </fieldset>

                        <fieldset>
                            <legend>Vehicle Details</legend>
                            <p><strong>Vehicle Type:</strong> {RentEV.vehicleType}</p>
                            <p><strong>Brand:</strong> {RentEV.brand}</p>
                            <p><strong>Model:</strong> {RentEV.model}</p>
                            <p><strong>Plate Number:</strong> {RentEV.plateNo}</p>
                            <p><strong>Battery Power(mAh):</strong> {RentEV.batteryPower}</p>
                            <p><strong>Kilometres Driven:</strong> {RentEV.kilometresDriven}</p>
                        </fieldset>
                        
                        {/* Wrap handleSubmit in an arrow function */}
                        <button type="button" onClick={() => handleSubmit()} className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full">Submit</button>
                    </div>
                </div>
            </div>
            <Footer />
            <Switcher />
        </>
    );
};

export default Ev;

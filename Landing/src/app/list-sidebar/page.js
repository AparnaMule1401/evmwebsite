"use client";
import React from "react";
import Link from "next/link";
import Navbar from "../componants/navbar";
import Footer from "../componants/footer";
import Switcher from "../componants/switcher";
import { useState } from 'react';

export default function ListSidebar(){
    const [ownerName, setOwnerName] = useState('');
    const [ownerContact, setOwnerContact] = useState('');
    const [ownerEmail, setOwnerEmail] = useState('');
    const [ownerCity, setOwnerCity] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [varient, setVarient] = useState('');
    const [location, setLocation] = useState('');
    const [rtocode, setRtocode] = useState('');
    const [batteryPower, setBatteryPower] = useState('');
    const [kilometresDriven, setKilometresDriven] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here (e.g., send data to backend or perform client-side validation)
        console.log('Form submitted:', {
            ownerName,
            ownerContact,
            ownerEmail,
            ownerCity,
            vehicleType,
            brand,
            model,
            varient,
            location,
            rtocode, 
            batteryPower,
            kilometresDriven,
            image,
        });
        // Reset form fields after submission
        setOwnerName('');
        setOwnerContact('');
        setOwnerEmail('');
        setOwnerCity('');
        setVehicleType('');
        setBrand('');
        setModel('');
        setVarient('');
        setLocation('');
        setRtocode('');
        setKilometresDriven('');
        setImage(null);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    return(
        <>
            <Navbar navClass="navbar-white" />
            <div className="pt-16 flex justify-center items-center min-h-screen">
                <div className="w-full sm:max-w-md">
                    <h1 className="text-center text-2xl mb-4">Enter Vehicle  details you want to sell</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        

                        <fieldset>
                            <legend>Vehicle Details</legend>
                            <label className="text-green-500" >
                                Vehicle Type:
                                <input type="text" value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br/><br/>
                            <label className="text-green-500">
                                Brand:
                                <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br/><br/>
                            <label className="text-green-500">
                                Model:
                                <input type="text" value={model} onChange={(e) => setModel(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br/><br/>
                            <label className="text-green-500">
                                Varient:
                                <input type="text" value={varient} onChange={(e) => setVarient(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br/><br/>
                            <label className="text-green-500">
                                Location:
                                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br/><br/>
                            <label className="text-green-500">
                                RTO Code:
                                <input type="text" value={rtocode} onChange={(e) => setRtocode(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br/><br/>
                            <label className="text-green-500">
                                Battery Power(mAh):
                                <input type="text" value={batteryPower} onChange={(e) => setBatteryPower(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br/><br/>
                            <label className="text-green-500">
                                Kilometres Driven:
                                <input type="text" value={kilometresDriven} onChange={(e) => setKilometresDriven(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br/><br/>
                            <label className="text-green-500">
                                Upload Image:
                                <input type="file" accept="image/*" onChange={handleImageChange} required className="w-full border rounded-sm py-1 px-2" />
                            </label><br/><br/>
                        </fieldset>

                        <fieldset>
                            <legend>Enter your Details</legend>
                            <label className="text-green-500">
                                Your Name:
                                <input type="text" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br/><br/>
                            <label className="text-green-500">
                                Your Contact Number:
                                <input type="text" value={ownerContact} onChange={(e) => setOwnerContact(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br/><br/>
                            <label className="text-green-500">
                                Your Email:
                                <input type="email" value={ownerEmail} onChange={(e) => setOwnerEmail(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br/><br/>
                        </fieldset>
                        <div className="flex justify-center">
                        <Link href="/approve" className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full">Submit</Link>
                     </div>
                    </form>
                </div>
            </div>
            <Footer />
            <Switcher />
        </>
    )
}

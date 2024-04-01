import React from "react";
import Link from "next/link";

import {propertiesDetails} from '../../data/data';

import Navbar from '../../componants/navbar'
import Footer from '../../componants/footer'
import Switcher from '../../componants/switcher'
import PropertyImage from '../../componants/propertyImage';


import {MdDirectionsCar, MdTune, MdSettingsInputComponent, FiPhone} from '../../assets/icons/vander'

export default function PropertiesDetail(props) {
    const property = propertiesDetails.find((user) => user?.id === parseInt(props?.params?.id || 0));

  return(
    <>
       <Navbar/>
        <section className="relative md:pb-24 pb-16 mt-20">
        <div className="container-fluid">
                    <PropertyImage images={property.images} />
                </div>

            <div className="container md:mt-24 mt-16">
                <div className="md:flex">
                    <div className="lg:w-2/3 md:w-1/2 md:p-4 px-3">
                        <h4 className="text-2xl font-medium">{property?.name}</h4>

                        <ul className="py-6 flex items-center list-none">
                            <li className="flex items-center lg:me-6 me-4">
                                <MdDirectionsCar className=" lg:text-3xl text-2xl me-2 text-green-600"/>
                                <span className="lg:text-xl">{property?.Model}</span>
                            </li>

                            <li className="flex items-center lg:me-6 me-4">
                                <MdSettingsInputComponent className=" lg:text-3xl text-2xl me-2 text-green-600"/>
                                <span className="lg:text-xl">{property?.Type}</span>
                            </li>

                            <li className="flex items-center">
                                <MdTune className=" lg:text-3xl text-2xl me-2 text-green-600"/>
                                <span className="lg:text-xl">{property?.Range}</span>
                            </li>
                        </ul>
                    <div>


                        
                    </div>
                        <div className="flex flex-wrap justify-start gap-4">
    <div className="text-black">
        <p className="text-slate-400">Registration Year:</p>
        <p className="text-slate-400 mt-4">No. of Owners:</p>
        <p className="text-slate-400 mt-4">Registration:</p>
        <p className="text-slate-400 mt-4">Location:</p>
        <p className="text-slate-400 mt-4">Body Type:</p>
        <p className="text-slate-400 mt-4">Kilometres Driven:</p>
        <p className="text-slate-400 mt-4">Colour:</p>
    </div>
    <div className="text-black">
        <p className="text-slate-400">{property?.registrationYear}</p>
        <p className="text-slate-400 mt-4">{property?.numOfOwners}</p>
        <p className="text-slate-400 mt-4">{property?.registration}</p>
        <p className="text-slate-400 mt-4">{property?.Location}</p>
        <p className="text-slate-400 mt-4">{property?.bodytype}</p>
        <p className="text-slate-400 mt-4">{property?.kilometersDriven}</p>
        <p className="text-slate-400 mt-4">{property?.colour}</p>
    </div>
</div>


                        <div className="w-full leading-[0] border-0 mt-6">
                        
                        </div>
                    </div>

                    <div className="lg:w-1/3 md:w-1/2 md:p-4 px-3 mt-8 md:mt-0">
                        <div className="sticky top-20">
                            <div className="rounded-md bg-slate-50 dark:bg-slate-800 shadow dark:shadow-gray-700">
                                <div className="p-6">
                                    <h5 className="text-2xl font-medium">Price:</h5>

                                    <div className="flex justify-between items-center mt-4">
                                        <span className="text-xl font-medium">$ {property?.price}</span>

                                        <span className="bg-green-600/10 text-green-600 text-sm px-2.5 py-0.75 rounded h-6">For Sale</span>
                                    </div>

                                    <ul className="list-none mt-4">

                                        <li className="flex justify-between items-center mt-2">
                                            <span className="text-slate-400 text-sm">Monthly Payment (estimate)</span>
                                            <span className="font-medium text-sm">$ 1497/Monthly</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex">
                                <div className="flex justify-center">
    <div className="flex flex-wrap justify-center gap-4">
        <Link href="/testdrive" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md">Book a Test Drive</Link>
        <Link href="/offer" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md">Make an Offer</Link>
        <Link href="/buynow" className="btn bg-green-600 hover:bg-green-700 text-white rounded-md">Buy Now</Link>
    </div>
</div>
                            </div>
                            </div>

                            <div className="mt-12 text-center">
                                <h3 className="mb-6 text-xl leading-normal font-medium text-black dark:text-white">Have Question? Get in touch!</h3>

                                <div className="mt-6">
                                    <Link href="/contact" className="btn bg-transparent hover:bg-green-600 border border-green-600 text-green-600 hover:text-white rounded-md"><FiPhone className="align-middle me-2"/> Contact us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <Switcher/>
    </>
  )
  }
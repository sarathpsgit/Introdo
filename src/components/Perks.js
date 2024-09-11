// src/components/Perks.js

import React from 'react';
import './Perks.css';
import Payrollvector from '../assets/payroll-vector.png';
import Person from '../assets/person.png';
import Harmony from '../assets/harmony.png';
import Compliances from '../assets/compliances.png';
import Cloud from '../assets/cloud.png';
import Timer from './Timer'; // Import the Timer component

const Perks = () => {
    return (
        <section className="benefits-section py-5 text-center">
            <div className="container">
                <div className='row justify-content-center align-items-center'>
                    <div className='col-12'>
                        <div className='d-flex flex-row justify-content-center text-center'>
                            <p className="lead">WHY INTRODO?</p>
                        </div>
                        <div className='d-flex flex-row justify-content-center text-center'>
                            <h2 className="text-primary fw-bold">Unlock The Perks!</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                        <div className='perk-box-1'>
                            <div className='white-head'>Global Payroll Simplicity</div>
                            <p>Manage multi-currency payroll across the GCC and beyond, in English & Arabic. Seamless onboarding included!</p>
                            <img className='img-fluid' src={Payrollvector} alt="Global Payroll Simplicity" />
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-12 p-0'>
                                    <div className='perk-box-2'>
                                        <div className='timerbody'>
                                            <img className='img-fluid float-start me-2' src={Person} alt="Person" />
                                            <div className='person-data'>
                                                <div className='person-name'>Fatima Saleem</div>
                                                <div className='date'>(Aug 07, 2024 - Aug 15, 2024)</div>
                                            </div>
                                            <Timer /> {/* Add Timer component */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                            <div className='col-12 p-0'>
                                    <div className='perk-box-2a'>
                                       <div className='smart-insight'>Smart Insights</div>
                                       <p>Craft customized reports and dashboards to steer data-driven decisions. All your historic employee data within one end-to-end solution.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                        <div className='perk-box-3'>
                        <div className='compliancehead'>Legacy Harmony</div>
                        <p>Maximize operational efficiency with zero data loss. Sync all your business tools with an open API for seamless data integration.</p>
                        <img className='img-fluid' src={Harmony} alt="Global Payroll Simplicity" />
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                        <div className='perk-box-4'>
                            <div className='container-fluid'>
                                <div className='row'>
                                <div className='col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12  p-0'>
                                    <div className='compliancehead'>Rock-Solid Compliance</div>
                                    <p>Stay GCC law-aligned amidst changing regulations. Worry-free compliance across locations, preventing penalties and legal hassles.</p>
                                </div>
                                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 p-0'>
                                <img className='img-fluid' src={Compliances} alt="Global Payroll Simplicity" />
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>
                    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                        <div className='perk-box-5'>
                        <div className='container-fluid'>
                                <div className='row'>
                                <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 p-0'>
                                    
                                <img className='img-fluid' src={Cloud} alt="Global Payroll Simplicity" />
                                </div>
                                <div className='col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12'>
                                    <div className='compliancehead'>Rock-Solid Compliance</div>
                                    <p>Stay GCC law-aligned amidst changing regulations. Worry-free compliance across locations, preventing penalties and legal hassles.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Perks;

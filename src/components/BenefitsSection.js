import React, { useState, useEffect } from 'react';
import './BenefitsSection.css';
import HRicon from '../assets/hr-icon.png';
import EMPIcon from '../assets/EMP-icon.png';
import LinIcon from '../assets/Lin-icon.png';
import StreamIcon from '../assets/StreamIcon.svg';
import { Tabs, Tab } from 'react-bootstrap';

const BenefitsSection = () => {
    const [activeTab, setActiveTab] = useState('hr-managers');
    const tabs = ['hr-managers', 'line-managers', 'employees'];

    useEffect(() => {
        // Timer for auto-switching tabs
        const interval = setInterval(() => {
            switchToNextTab();
        }, 5000); // 5 seconds interval

        // Clean up the timer on component unmount
        return () => clearInterval(interval);
    }, [activeTab]);

    const switchToNextTab = () => {
        const currentIndex = tabs.indexOf(activeTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        setActiveTab(tabs[nextIndex]);
    };

    const handleTabSelect = (tab) => {
        setActiveTab(tab); // Manual switch resets the timer
    };

    return (
        <section className="benefits-section py-5 text-center">
            <div className="container">
                <div className='row justify-content-center align-items-center'>
                    <div className='col-12'>
                        <div className='d-flex flex-row justify-content-center text-center'>
                            <p className="lead">Empower Every Role</p>
                        </div>
                        <div className='d-flex flex-row justify-content-center text-center'>
                            <h2 className="text-primary fw-bold">Triple The Benefits!</h2>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12'>
                        <div className='tabftr'>
                            <img src={StreamIcon} alt="HRicon" style={{ width: '30px', height: '30px', float: 'left', margin: '0 12px 0 0' }} />
                            Streamline Workforce<br/> Management
                        </div>
                        <hr />
                        <div className='tabftr'>
                            <img src={StreamIcon} alt="HRicon" style={{ width: '30px', height: '30px', float: 'left', margin: '0 12px 0 0' }} />
                            Smooth Employee<br/> Onboarding
                        </div>
                        <hr />
                        <div className='tabftr'>
                            <img src={StreamIcon} alt="HRicon" style={{ width: '30px', height: '30px', float: 'left', margin: '0 12px 0 0' }} />
                            Enhance Internal<br/> Communication
                        </div>
                    </div>
                    <div className='col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12'>
                        <Tabs activeKey={activeTab} onSelect={handleTabSelect} id="benefits-tabs" className="mb-4 border-0">
                            <Tab eventKey="hr-managers" title={<><img src={HRicon} alt="HRicon" style={{ width: '28px', height: '28px', marginRight: '8px' }} /> For HR Managers</>}>
                                <div className="content-box p-4 rounded bg-light">
                                    <p>
                                        Handle employee information digitally on our user-friendly platform.
                                        With automation, accuracy is guaranteed for reliable record-keeping.
                                    </p>
                                    <hr />
                                    <p>
                                        Simplify onboarding, capture essential employee data and automate payroll
                                        for seamless employee experiences.
                                    </p>
                                    <hr />
                                    <p>
                                        Facilitate company-wide communication, keeping everyone in the loop
                                        with important announcements, subsidiary changes, and HR policy updates.
                                    </p>
                                </div>
                            </Tab>
                            <Tab eventKey="line-managers" title={<><img src={LinIcon} alt="LinIcon" style={{ width: '28px', height: '28px', marginRight: '8px' }} /> For Line Managers</>}>
                                <div className="content-box p-4 rounded bg-light">
                                    <p>
                                        Handle employee information digitally on our user-friendly platform.
                                        With automation, accuracy is guaranteed for reliable record-keeping.
                                    </p>
                                    <hr />
                                    <p>
                                        Simplify onboarding, capture essential employee data and automate payroll
                                        for seamless employee experiences.
                                    </p>
                                    <hr />
                                    <p>
                                        Facilitate company-wide communication, keeping everyone in the loop
                                        with important announcements, subsidiary changes, and HR policy updates.
                                    </p>
                                </div>
                            </Tab>
                            <Tab eventKey="employees" title={<><img src={EMPIcon} alt="EMPIcon" style={{ width: '28px', height: '28px', marginRight: '8px' }} /> For Employees</>}>
                                <div className="content-box p-4 rounded bg-light">
                                    <p>
                                        Handle employee information digitally on our user-friendly platform.
                                        With automation, accuracy is guaranteed for reliable record-keeping.
                                    </p>
                                    <hr />
                                    <p>
                                        Simplify onboarding, capture essential employee data and automate payroll
                                        for seamless employee experiences.
                                    </p>
                                    <hr />
                                    <p>
                                        Facilitate company-wide communication, keeping everyone in the loop
                                        with important announcements, subsidiary changes, and HR policy updates.
                                    </p>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;

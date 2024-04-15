import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';


const Footer = () => {
    return (
        <>
            <div className='text-white mt-20'>
                <div data-aos="fade-down"
                    className=' container bg-gradient-to-b from-primary
                 to-primaryDark rounded-3xl'>
                    <div>
                        <h1 className='text-3xl py-10 font-bold
                        text-yellow text-center'>Contact us</h1>

                        <div className='grid grid-cols-1 sm:grid-cols-2
                        md:grid-cols-3 gap-14 border-b-2 border-white pb-6'>

                            {/* AddresSection */}
                            <div className='text-center space-y-4'>
                                <div className='flex justify-center'>
                                    <IoLocationSharp className='text-5xl' />
                                </div>
                                <p>
                                    #92, 3rd Main, Virgo Nagar, Post,
                                    <br /> Seegehalli, Banglore, Karnataka
                                    560049
                                </p>
                            </div>

                            <div className='text-center space-y-4'>
                                <div className='flex justify-center'>
                                    <MdEmail className='text-5xl' />
                                </div>
                                <div>
                                    <p>info@goodfood.com</p>
                                    <p>hr@goodfood.com</p>
                                </div>
                            </div>

                            <div className='text-center space-y-4'>
                                <div className='flex justify-center'>
                                    <MdEmail className='text-5xl' />
                                </div>
                                <div>
                                    <p>+91 8989898909 - Sales and Services</p>
                                    <p>+91 3353443453 - Hiring Querries</p>
                                    <p>+91 8343534453 - WhatsApp</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* bottom */}
                    <div className='flex justify-between p-4 items-center'>
                        <p>
                            © 2022 TCJ. All rights reserved
                        </p>
                        <div className='flex items-center gap-6'>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms & Condition</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;

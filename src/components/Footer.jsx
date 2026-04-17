import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaWhatsapp } from "react-icons/fa";
import bgImage from '../assets/13.jpg';

export default function Footer() {
    return (
        <footer className="relative w-full mt-20">
            {/* Main Contact Area */}
            <div
                className="w-full py-16 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="max-w-full mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* Left Section: Branding & Info */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="text-4xl">☕</span>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#3b2f2f] drop-shadow-sm">
                                    Espresso Emporium
                                </h2>
                            </div>

                            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl">
                                Always ready to be your friend. Come & Contact with us to share your
                                memorable moments, to share with your best companion.
                            </p>

                            {/* Social Icons */}
                            <div className="flex flex-wrap gap-4">
                                {[
                                    { icon: <FaFacebookF />, link: "https://www.facebook.com/mdmaneul.islam" },
                                    { icon: <FaGithub />, link: "https://github.com/Maneulislam" },
                                    { icon: <FaWhatsapp />, link: "https://wa.me/01791106969" },
                                    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/maneul-islam-690603236/" }
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white text-[#3b2f2f] rounded-full shadow-md hover:bg-[#3b2f2f] hover:text-white transition-all duration-300 text-xl"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>

                            {/* Contact Info */}
                            <div className="pt-4">
                                <h3 className="text-2xl font-extrabold text-[#3b2f2f] mb-6">Get in Touch</h3>
                                <div className="space-y-4 text-gray-800 font-medium">
                                    <div className="flex items-center gap-4 group">
                                        <FaPhoneAlt className="text-[#3b2f2f] group-hover:scale-110 transition-transform" />
                                        <span className="hover:text-amber-800 transition-colors">+88 01791-106969</span>
                                    </div>
                                    <div className="flex items-center gap-4 group">
                                        <FaEnvelope className="text-[#3b2f2f] group-hover:scale-110 transition-transform" />
                                        <span className="hover:text-amber-800 transition-colors">maneulislam512@gmail.com</span>
                                    </div>
                                    <div className="flex items-center gap-4 group">
                                        <FaMapMarkerAlt className="text-[#3b2f2f] group-hover:scale-110 transition-transform" />
                                        <span className="hover:text-amber-800 transition-colors">Dhaka, Bangladesh</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Section: Form */}
                        <div>

                            <h3 className="text-2xl font-extrabold text-[#3b2f2f] mb-6">Connect with Us</h3>



                            <form className="space-y-4">

                                <input

                                    type="text"

                                    placeholder="Name"

                                    className="w-full p-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b2f2f]"

                                />



                                <input

                                    type="email"

                                    placeholder="Email"

                                    className="w-full p-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b2f2f]"

                                />



                                <textarea

                                    placeholder="Message"

                                    rows="4"

                                    className="w-full p-3 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b2f2f]"

                                ></textarea>



                                <button

                                    type="submit"

                                    className="px-6 py-2 border-2 border-[#3b2f2f] text-[#3b2f2f] rounded-full hover:bg-[#3b2f2f] hover:text-white transition"

                                >

                                    Send Message

                                </button>

                            </form>

                        </div>

                    </div>



                </div>
            </div>


            {/* Copyright Bar */}
            {/* <div className="bg-[#2b1f1f] py-4 px-4 text-center">
                <p className="text-white/80 text-sm font-medium">
                    Copyright © {new Date().getFullYear()} <span className="text-[#e3b577]">Espresso Emporium</span> | All Rights Reserved
                </p>
            </div> */}
        </footer >
    );
}

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import bgImage from '../assets/13.jpg';

export default function Footer() {
    return (
        <div>
            <div className="w-full  mt-40 py-16 px-6 md:px-20 bg-cover" style={{ backgroundImage: `url(${bgImage})`, }}>
                <div className="grid md:grid-cols-2 gap-10 px-20">

                    {/* Left Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="text-3xl">☕</div>
                            <h2 className="text-3xl font-extrabold text-[#3b2f2f]">Espresso Emporium</h2>
                        </div>

                        <p className="text-gray-600 mb-6 max-w-md">
                            Always ready to be your friend. Come & Contact with us to share your
                            memorable moments, to share with your best companion.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 mb-6 text-[#3b2f2f] text-lg">
                            <FaFacebookF className="cursor-pointer hover:text-black text-4xl" />
                            <FaTwitter className="cursor-pointer hover:text-black text-4xl" />
                            <FaInstagram className="cursor-pointer hover:text-black text-4xl" />
                            <FaLinkedinIn className="cursor-pointer hover:text-black text-4xl" />
                        </div>

                        {/* Contact Info */}
                        <h3 className="text-2xl font-extrabold text-[#3b2f2f] mb-4">Get in Touch</h3>

                        <div className="space-y-3 text-gray-700">
                            <div className="flex items-center gap-3">
                                <FaPhoneAlt />
                                <span>+88 01533 333 333</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaEnvelope />
                                <span>info@gmail.com</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaMapMarkerAlt />
                                <span>72, Wall street, King Road, Dhaka</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Form */}
                    <div>
                        <h3 className="text-2xl font-extrabold text-[#3b2f2f] mb-6">Connect with Us</h3>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full p-3 bg-white rounded-md  focus:outline-none focus:ring-2 focus:ring-[#3b2f2f]"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 bg-white rounded-md  focus:outline-none focus:ring-2 focus:ring-[#3b2f2f]"
                            />

                            <textarea
                                placeholder="Message"
                                rows="4"
                                className="w-full p-3 bg-white rounded-md  focus:outline-none focus:ring-2 focus:ring-[#3b2f2f]"
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
            {/* Footer */}
            <div className=" text-center text-white bg-[#2b1f1f] py-3 text-sm">
                Copyright Espresso Emporium | All Rights Reserved
            </div>
        </div>
    );
}

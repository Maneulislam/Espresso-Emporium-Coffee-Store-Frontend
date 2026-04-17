import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';


const LearnMore = () => {
    return (
        <div className="card bg-base-100 w-8/12 mx-auto shadow-sm">


            <figure className="px-10 pt-10">
                <img
                    src={"/src/assets/3.png"}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>


            <h3 className='text-xl font-bold mt-7 pl-6'>Would you like a Cup of Delicious Coffee?</h3>

            <div className="card-body items-center ">


                <p>Would you like a cup of truly exceptional coffee—one that goes beyond taste and becomes a moment you look forward to every day? It’s coffee time, a gentle reminder to pause, sip, and truly savor life. In the rush of daily routines, our coffee offers you a chance to slow down and reconnect with yourself. Every cup is crafted not just to refresh you, but to bring comfort, warmth, and a sense of nostalgia that feels familiar and soothing. Whether you're greeting the morning sun, taking a mindful break in the afternoon, or unwinding after a long, tiring day, our coffee stands by you as a perfect companion—quietly enhancing every moment and turning it into something memorable.

                    The experience begins even before the first sip. As soon as the coffee is poured, a rich and captivating aroma fills the air—deep, smooth, and inviting. It gently awakens your senses, lifting your mood and creating an atmosphere of calm and focus. This aroma isn’t accidental; it is the result of a carefully refined process where every detail matters. From sourcing to serving, we maintain a commitment to excellence that ensures each cup delivers consistency, richness, and satisfaction.

                    At the heart of our coffee lies quality you can trust. We use only premium-grade beans, selected with precision and care. These are pure green coffee beans, preserved in their most natural state before roasting, allowing us to retain their authentic character and flavor profile. This dedication to purity ensures that what you taste is genuine—no shortcuts, no compromises—just real coffee at its finest.

                    The transformation truly happens during roasting, where science meets art. Our beans are roasted with expert precision, unlocking layers of flavor that range from bold and intense to smooth and balanced. This process enhances the natural oils and depth within each bean, giving the coffee its signature richness and full-bodied taste. Every batch is handled with care to ensure that the final result is a perfectly brewed cup that feels both luxurious and comforting.

                    But our coffee is more than its ingredients and process—it’s about the experience it creates. It’s the quiet joy of holding a warm cup in your hands, the gentle steam rising as you take a moment for yourself, the familiar taste that brings back cherished memories, and the calm that settles in with every sip. It’s about conversations shared, ideas born, and peaceful moments enjoyed alone.

                    With every cup, you’re not just drinking coffee—you’re embracing a ritual, a feeling, and a story. A story of passion, craftsmanship, and dedication to bringing you something truly special. So go ahead, take a sip, breathe in the aroma, and let your coffee moment become a beautiful part of your day.

                </p>

                <div className="my-12">
                    <Link to="/" className="flex items-center gap-2 text-[#374151] hover:text-[#D2B48C] transition-colors font-rancho text-2xl">
                        <FaArrowLeft />
                        <span style={{ fontFamily: 'Rancho, cursive' }}>Back to home</span>
                    </Link>
                </div>


            </div>
        </div>
    );
};

export default LearnMore;
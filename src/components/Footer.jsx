import React from 'react';
import { Link } from 'react-router-dom';
import { footer_img } from '../images';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background lg:grid lg:grid-cols-5">
            <div className="relative block h-32 lg:col-span-2 lg:h-full">
                <img
                    src={footer_img}
                    alt="Footer Image"
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
                    <div className="border-r-2 border-secondary pr-8">
                        <p className="text-2xl font-medium text-primary mt-2">
                            PicVault celebrates the art of mobile photography by showcasing stunning images captured on smartphones. Discover creative photos, engage with photographers, and explore a world of mobile photography in one place.
                        </p>
                    </div>

                    <div className="pr-8">
                        <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
                        <ul className="mt-4 space-y-2 text-sm text-accent">
                            {['/login', '/gallery', '/terms_and_conditions', '/privacy-policy', '/contact'].map((link, index) => (
                                <li key={index}>
                                    <Link to={link} className="hover:text-primary transition">
                                        {link.slice(1).replace(/-/g, ' ') || 'Home'}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t-2 border-secondary pt-8 text-center text-accent">
                    <p>&copy; {currentYear} PicVault. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

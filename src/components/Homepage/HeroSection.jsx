import React from "react";

const HeroSection = () => {
    return (
        <div className="flex flex-wrap">
            {/* Text Section */}
            <div className="w-full sm:w-8/12 mb-10">
                <div className="container mx-auto h-full sm:p-10">
                    <nav className="flex px-4 justify-between items-center">
                        {/* App Logo */}
                        <div className="text-4xl font-bold">
                            PicVault<span className="text-green-700">.</span>
                        </div>
                    </nav>
                    {/* Header Content */}
                    <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
                        <div className="w-full">
                            <h1 className="text-4xl lg:text-6xl font-bold">
                                Discover and showcase your best
                                <span className="text-green-700"> moments</span>
                            </h1>
                            <div className="w-20 h-2 bg-green-700 my-4"></div>
                            <p className="text-xl mb-10">
                                Explore a world of stunning visuals. Upload, manage, and display
                                your cherished images with PicVault, your personal photo gallery.
                            </p>
                            <button className="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">
                                Get Started
                            </button>
                        </div>
                    </header>
                </div>
            </div>
            {/* Image Section */}
            <img
                src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                alt="Leafs"
                className="w-full h-48 object-cover sm:h-screen sm:w-4/12"
            />
        </div>
    );
};

export default HeroSection;
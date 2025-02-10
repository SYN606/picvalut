import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ReactImageLightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";


const MasonryLayout = ({ images }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [userImages, setUserImages] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
    };

    const handleImageClick = (index, userName) => {
        const imagesByUser = images.filter(img => img.userName === userName);
        setUserImages(imagesByUser);
        setSelectedImageIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex -ml-7"
                columnClassName="pl-7"
            >
                {images.map((image, index) => (
                    <div key={index} className="mb-7">
                        <LazyLoadImage
                            src={image.src}
                            alt={image.alt}
                            effect="blur"
                            className="w-full rounded-lg shadow-lg cursor-pointer"
                            onClick={() => handleImageClick(index, image.userName)}
                        />

                        <div className="flex items-center mt-3">
                            <LazyLoadImage
                                src={image.userAvatar}
                                alt="User Avatar"
                                effect="blur"
                                className="w-10 h-10 rounded-full mr-3"
                            />
                            <p className="text-sm font-semibold">{image.userName}</p>
                        </div>
                    </div>
                ))}
            </Masonry>

            {isOpen && selectedImageIndex !== null && (
                <ReactImageLightbox
                    mainSrc={images[selectedImageIndex].src}
                    nextSrc={images[(selectedImageIndex + 1) % images.length].src}
                    prevSrc={images[(selectedImageIndex + images.length - 1) % images.length].src}
                    onCloseRequest={closeModal}
                    onMovePrevRequest={() =>
                        setSelectedImageIndex((selectedImageIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setSelectedImageIndex((selectedImageIndex + 1) % images.length)
                    }
                    imageTitle={images[selectedImageIndex].userName}
                    imageCaption={images[selectedImageIndex].alt}
                    reactModalStyle={{
                        overlay: {
                            zIndex: 1000,
                        },
                    }}
                />
            )}

            {isOpen && userImages.length > 0 && (
                <div className="grid grid-cols-3 gap-4 overflow-y-auto max-h-80 mt-6">
                    {userImages.map((image, index) => (
                        <LazyLoadImage
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            effect="blur"
                            className="w-full h-36 object-cover rounded-lg cursor-pointer"
                            onClick={() => setSelectedImageIndex(images.findIndex(img => img.src === image.src))}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MasonryLayout;

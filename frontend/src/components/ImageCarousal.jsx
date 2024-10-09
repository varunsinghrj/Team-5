import React, { useState, useEffect } from 'react';
import { images } from '../assets/assets';

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
        }, 5000);
        return () => clearInterval(interval); 
    }, [totalImages]);

    const prevHandler = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? totalImages - 1 : prevIndex - 1
        );
    };

    const nextHandler = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex + 1) % totalImages
        );
    };

    return (
        <div className='relative w-full min-h-[500px] overflow-hidden'>
            <div 
                className="flex transition-transform duration-300" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, id) => (
                    <img 
                        src={image.image} 
                        key={id} 
                        className='w-full h-full object-cover' 
                        alt={`Slide ${id + 1}`} 
                    />
                ))}
            <button 
                onClick={prevHandler} 
                className='absolute top-1/2 left-0 transform -translate-y-1/2 w-20 h-60 bg-gray-600 text-white text-4xl flex items-center justify-center'
            >
                {'<'}
            </button>
            <button 
                onClick={nextHandler} 
                className='absolute top-1/2 right-0 transform -translate-y-1/2 w-20 h-60 bg-gray-600 text-white text-4xl flex items-center justify-center'
            >
                {'>'}
            </button>
            </div>
        </div>
    );
};

export default ImageCarousel;

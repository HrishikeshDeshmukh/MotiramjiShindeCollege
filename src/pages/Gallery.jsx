import React, { useState } from 'react';
import Image from '../assets/1.jpeg';
import Image2 from '../assets/3.jpeg';
import Image3 from '../assets/college imarat.jpg';
import Image4 from '../assets/pic.jpeg';
import Image5 from '../assets/pic1.jpeg';
import Image6 from '../assets/pic2.jpg';
import Image7 from '../assets/pic3.jpeg';
import Image8 from '../assets/pic4.jpeg';
import Image9 from '../assets/pic5.jpeg';
import Image10 from '../assets/pic6.jpeg';
import Image11 from '../assets/pic7.jpeg';
import Image12 from '../assets/pic8.jpeg';
import Image13 from '../assets/Img (1).jpeg';
import Image14 from '../assets/Img (2).jpeg';
import Image15 from '../assets/Img (3).jpeg'
import Image16 from '../assets/Img (4).jpeg'
import Image17 from '../assets/Img (5).jpeg'
import Image18 from '../assets/Img (6).jpeg'
import Image19 from '../assets/Img (7).jpeg'
import Image20 from '../assets/Img (8).jpeg'
import Image21 from '../assets/Img (9).jpeg'
import Image22 from '../assets/Img (10).jpeg'
import Image23 from '../assets/Img (11).jpeg'
import Image24 from '../assets/Img (12).jpeg'
import Image25 from '../assets/Img (13).jpeg'
import Image26 from '../assets/Img (14).jpeg'
import Image27 from '../assets/Img (15).jpeg'
import Image28 from '../assets/Img (16).jpeg'
import Image29 from '../assets/Img (17).jpeg'
import Image30 from '../assets/Img (18).jpeg'
import Image31 from '../assets/Img (19).jpeg'
import Image32 from '../assets/Img (20).jpeg'
import Image33 from '../assets/film (1).jpg'
import Image34 from '../assets/film (2).jpg'
import Image35 from '../assets/film (3).jpg'
import Image36 from '../assets/film (4).jpg'
import Image37 from '../assets/film (5).jpg'
import Image38 from '../assets/film (6).jpg'
import Image39 from '../assets/film (7).jpg'
import Image40 from '../assets/film (8).jpg'
import Image41 from '../assets/film (9).jpg'
import Image42 from '../assets/film (10).jpg'
import Image43 from '../assets/film (11).jpg'
import Image44 from '../assets/film (12).jpg'
import Image45 from '../assets/film (13).jpg'
import Image46 from '../assets/film (14).jpg'
import Image47 from '../assets/film (15).jpg'
import Image48 from '../assets/film (16).jpg'
import Image49 from '../assets/film (17).jpg'
import Image50 from '../assets/film (18).jpg'
import Image51 from '../assets/film (19).jpg'
import Image52 from '../assets/film (20).jpg'
import Image53 from '../assets/Img (21).jpeg'
import Image54 from '../assets/Img (22).jpeg'
import Image55 from '../assets/Img (17).jpeg'


const Data = [
    { image: Image },
    { image: Image2 },
    { image: Image3 },
    { image: Image4 },
    { image: Image5 },
    { image: Image6 },
    { image: Image7 },
    { image: Image8 },
    { image: Image9 },
    { image: Image10 },
    { image: Image11 },
    { image: Image12 },
    { image: Image13 },
    { image: Image14 },
    { image: Image15 },
    { image: Image16 },
    { image: Image17 },
    { image: Image18 },
    { image: Image19 },
    { image: Image20 },
    { image: Image21 },
    { image: Image22 },
    { image: Image23 },
    { image: Image24 },
    { image: Image25 },
    { image: Image26 },
    { image: Image27 },
    { image: Image28 },
    { image: Image29 },
    { image: Image30 },
    { image: Image31 },
    { image: Image32 },
    { image: Image33 },
    { image: Image34 },
    { image: Image35 },
    { image: Image36 },
    { image: Image37 },
    { image: Image38 },
    { image: Image39 },
    { image: Image40 },
    { image: Image41 },
    { image: Image42 },
    { image: Image43 },
    { image: Image44 },
    { image: Image45 },
    { image: Image46 },
    { image: Image47 },
    { image: Image48 },
    { image: Image49 },
    { image: Image50 },
    { image: Image51 },
    { image: Image52 },
    { image: Image53 },
    { image: Image54 },
    { image: Image55 },
    { image: Image12 },


];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="h-full mx-auto">
            <div class="heading py-7">
                Gallery
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {Data.map((item, index) => (
                    <div key={index} className="group cursor-pointer relative">
                        <img
                            src={item.image}
                            alt={`Image ${index + 1}`}
                            className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                            onClick={() => setSelectedImage(item.image)}
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent click event propagation
                                    setSelectedImage(item.image);
                                }}
                            >
                                View
                            </button>
                        </div>
                    </div>
                ))}

                {/* Image Preview Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative">
                            <img
                                src={selectedImage}
                                alt="Selected preview"
                                className="max-w-full max-h-[80vh] rounded shadow-lg"
                            />
                            <button
                                className="absolute top-2 right-2 text-white text-lg bg-red-600 rounded-full px-2 py-1"
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent closing when clicking the button
                                    setSelectedImage(null);
                                }}
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;

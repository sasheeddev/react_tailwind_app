import React from 'react';
import interior1 from '../Assets/interior1.jpg'; // Corrected spelling to 'interior'
import interior2 from '../Assets/interior2.jpg';
import interior3 from '../Assets/interior3.jpg';
import interior4 from '../Assets/interior4.jpg';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const ImageSlider = () => {
  const slides = [
    { image: interior1 }, // Use 'image' property for clarity
    { image: interior2 },
    { image: interior3 },
    { image: interior4 },
  ];

  return (
    <div>
      <div className='max-w-[1400px] h-screen w-full m-auto py-16 px-4 relative '>
        <img className='w-full h-full duration-500 bg-center bg-cover rounded-2xl ' src={slides[3].image} alt="Interior Design 1" style={{ width: '100%', height: '100%' }} /> {/* Add alt text and styles */}
      </div>
      
    </div>
    
  );
};

export default ImageSlider;
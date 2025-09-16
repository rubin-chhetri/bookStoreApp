import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import Cards from "./Cards";
import { useEffect, useState } from "react";
const FreeBook = () => {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try {
       const res= await axios.get('http://localhost:3000/api/v1/book');
       const filteredData = res.data.filter(item => item.price === 0);
        console.log(filteredData);
       setBook(filteredData);  
      } catch (error) {
        console.log(error);
      }
  }
  getBook()  },[])

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1, // smoother scrolling
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: true },
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <h2 className="text-2xl font-bold mb-2">Free Offered Books</h2>
      <p className="mb-4">
        Here are the widely popular books that are freely available for you. Read them and enjoy!
      </p>

      <div className="slider-container">
        <Slider {...settings}>
          {book.map((item, index) => (
            <div key={index} className="flex h-full"> 
              {/* Flex wrapper ensures all cards stretch equally */}
              <Cards item={item} isSlider={true} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FreeBook;

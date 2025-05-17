import React from 'react';
import 'swiper/swiper-bundle.css';

import { Swiper, SwiperSlide } from "swiper/react"; // Correct import
import "swiper/css"; // Import styles
import "swiper/css/navigation";
import "swiper/css/pagination";


// Import modules separately


function VehiclesSection() {
  const vehicles = [
    { id: 1, name: 'Model 1', price: '100,000 DA', image: 'imag.png' },
    { id: 2, name: 'Model 2', price: '120,000 DA', image: 'imag.png' },
    // Add more vehicles here
  ];

  return (
    <section className="vehicules" id="vehicules">
      <h1 className="heading" id="nm">Nouveaux Modèles</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          991: { slidesPerView: 3 },
        }}
      >
        {vehicles.map((vehicle) => (
          <SwiperSlide key={vehicle.id} className="box">
            <img src={vehicle.image} alt={vehicle.name} className="vec" />
            <div className="conten">
              <h3>La nouvelle {vehicle.name}</h3>
              <div className="prix"> <span>prix: </span>{vehicle.price}</div>
              <button className="btn">voir plus</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
export default VehiclesSection;


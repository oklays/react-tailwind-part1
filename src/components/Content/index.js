import React from "react";
import ImageOne from "../../images/pict1.jpg";
import ImageTwo from "../../images/pict2.jpg";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img
          src={ImageOne}
          alt="work"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Jeruk Manis</h2>
          <p className="mb-2 text-center">
            Perpaduan rasa yang manis dan asam, membuat jeruk ini terasa
            menyegarkan
          </p>
          <span>Rp. 50.000/kg</span>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageTwo}
          alt="work"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Brokoli</h2>
          <p className="mb-2 text-center">
            Warna hijau yang membuat suasana menjadi natural
          </p>
          <span>Rp. 100.000/kg</span>
        </div>
      </div>
    </>
  );
};

export default Content;

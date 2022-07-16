import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import "./Order.css";

// import OrderCard from "./OrderCard";
// import img1 from "./img-1.jpg";
// import img2 from "./img-2.jpg";
// import img3 from "./img-3.jpg";
// import required modules
import { Pagination, Navigation } from "swiper";

export default function Order() {

  const [cakes, fetchCakes] = React.useState([])
  const [loaded, isloaded] = React.useState(false)
  const [imageLoaded, setImageLoaded] = React.useState(false);


  const getData = async () => {
    fetch('https://sweetcups-server.herokuapp.com/cakeDetails')
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        fetchCakes(res)
      })
  }

  React.useEffect(() => {
    if (cakes.length !== 0) {
      isloaded(true);
    }
    getData()
  }, [cakes])

  // const data = {
  //   name: 'red velvet',
  //   price1: '1,200',
  //   price2: '1,340'
  // }

  // const name = 'red velvet'
  return (
    <section id="order-section">
    <h3 id='order-h3'> Delicious Products </h3>
    <hr></hr>
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        navigation={true}

        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1023: {
            slidesPerView: 3,
            spaceBetween: 10,
          }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {
          loaded ?
            (cakes.map((cake) => (
              <SwiperSlide>

                <Link to={`/cakes/${cake.cakeName}`} state={cake} >

                  <Box>
                      <img
                        style={{
                          width: '70%',
                          display: 'block',
                          marginLeft: 'auto',
                          marginRight: 'auto'
                        }}
                        src={`https://sweetcups-server.herokuapp.com/images/${cake.cakeImgUrl}`}
                        alt='pics goes her'
                        className={`smooth-image image-${imageLoaded ? 'visible' : 'hidden'
                          }`}
                        onLoad={() => setImageLoaded(true)}
                      />

                    {!imageLoaded && (
                      <div className="smooth-preloader" style={{
                        width: '50%',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                      }}>
                        <img src='https://cdn.dribbble.com/users/107759/screenshots/3756455/cake.gif' alt='' />
                        <span className="loader" />
                      </div>
                    )}

                    {cake ? (
                      <Box sx={{ pr: 10 }}>
                        <Typography gutterBottom variant="body2" style={{ marginTop: '3%', fontSize: '1.5rem', color:'#ff610c' }}>
                          {cake.cakeName}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {`~ from 2000`}
                        </Typography>
                      </Box>
                    ) : (
                      <Box sx={{ pt: 0.5 }}>
                        <Skeleton />
                        <Skeleton width="60%" />
                      </Box>
                    )}
                  </Box>

                </Link>
              </SwiperSlide>))) :

            (
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <Skeleton
                      sx={{ bgcolor: 'white.900' }}
                      variant="rectangular"
                    />
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <Skeleton
                      sx={{ bgcolor: 'white.900' }}
                      variant="rectangular"
                    />
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <Skeleton
                      sx={{ bgcolor: 'white.900' }}
                      variant="rectangular"
                    />
                  </div>
                </div>
              </div>
            )

        }




      </Swiper>

      {/* <p className="append-buttons">
        <button onClick={() => prepend2()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => prepend()} className="prepend-slide">
          Prepend Slide
        </button>
        <button onClick={() => append()} className="append-slide">
          Append Slide
        </button>
        <button onClick={() => append2()} className="append-2-slides">
          Append 2 Slides
        </button>
      </p> */}
    </section >
  );
}

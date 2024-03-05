import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Home.css"
//import Footer from './contact/Footer';
import Services from './Services';



const Home = ({addToCart}) => {
  
  return (
    <div className="swiper-container">
      <h1 className="welcome-heading"
      style={{
        textAlign:'center',
        justifyContent:'center',
        fontSize:'34px',
        marginBottom:"20px",
        marginTop:'90px',
        color:'#3366cc'
      }}
      >Welcome to Our Mobiles Shop</h1>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <img
          src='https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt728703b7ef784c98/6581cf92d082f744d525dd13/wi-evergreen-231222-feature-fg-s23ultra-pixel8pro-m-en.png?width=150p&quality=80&auto=webp'
          alt='samsung'
          style={{
            width: '100%',
            margin: '10px', 
            height: '600px', 
            padding: '10px', 
            boxSizing: 'border-box',
           
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.eir.ie/opencms/export/sites/default/.galleries/eir/January24/4014_iPhone_14_600x328_181223_2X.png"
          alt='tecno'
          style={{
            width: '100%',
            margin: '10px',
            height: '600px',
            padding: '10px',
            boxSizing: 'border-box',
          
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src='https://thumbs.dreamstime.com/b/shenzhen-china-mobile-phone-shop-shops-interior-landscape-display-phones-etc-75133690.jpg'
          alt='i-phone'
          style={{
            width: '100%',
            margin: '10px',
            height: '600px',
            padding: '10px',
            boxSizing: 'border-box',
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src='https://img.freepik.com/premium-photo/mobile-phones-store-generative-ai_220873-21824.jpg'
          alt='redmi'
          style={{
            width: '100%',
            margin: '10px',
            height: '600px',
            padding: '10px',
            boxSizing: 'border-box',
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src='https://www.shutterstock.com/shutterstock/videos/1046361478/thumb/1.jpg?ip=x480'
          alt='redmi'
          style={{
            width: '100%',
            margin: '10px',
            height: '600px',
            padding: '10px',
            boxSizing: 'border-box',
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src='https://www.dennemeyer.com/fileadmin/a/blog/Everyday_IP_Spreading_the_word_about_mobile_phones/Everyday-IP_Spreading-the-word-about-mobile-phones_12.jpg'
          alt='redmi'
          style={{
            width: '100%',
            margin: '10px',
            height: '600px',
            padding: '10px',
            boxSizing: 'border-box',
          }}
        />
      </SwiperSlide>
    </Swiper>
    <Services addToCart={addToCart}/>
    {/* Footer */}
    </div>
  );
};

export default Home;
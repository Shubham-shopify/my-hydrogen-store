// app/components/Slideshow.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // ✅ correct for Swiper v9+
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Slideshow.module.css';

const slides = [
  {
    id: 1,
    image: 'https://cdn.shopify.com/s/files/1/0933/1789/0388/files/bracelet-guide-banner-desktop_6cbf26c9-bfc0-40ba-bb08-3d15e89855e6.webp?v=1743415333',
    alt: 'Promo Banner 1',
  },
  {
    id: 2,
    image: 'https://cdn.shopify.com/s/files/1/0933/1789/0388/files/bespoke-banner.jpg?v=1739878484',
    alt: 'Promo Banner 2',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/1200x500?text=Slide+3',
    alt: 'Promo Banner 3',
  },
];

export default function Slideshow() {
  return (
    <div className={styles.slideshow}>
      <Swiper
        modules={[Autoplay, Pagination]}
        //autoplay={{ delay: 3000, disableOnInteraction: false }}//
        pagination={{ clickable: true }}
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.image}
              alt={slide.alt}
              className={styles.image}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

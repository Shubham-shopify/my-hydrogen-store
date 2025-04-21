import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination'; // Optional: Import pagination styles if needed
import styles from './InstagramFeed.module.css'; // Import CSS module

const InstagramFeed = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [slides, setSlides] = useState([]);
  const endpoint = '/instagram-proxy';

  useEffect(() => {
    const loadInstagramFeed = async () => {
      try {
        console.log("Fetching Instagram feed from:", endpoint);

        const res = await fetch(endpoint);
        const data = await res.json();

        if (data.error) {
          console.error("Error:", data.error);
          console.error("Message:", data.message);
          if (data.previous_response) {
            console.log("Displaying previous response:", data.previous_response);
            data = data.previous_response;
          }
        }

        const posts = data?.data || [];
        const EXCLUDED_IDS = ["18166609282334512", "POST_ID_2"];

        const filteredPosts = posts.filter(post => !EXCLUDED_IDS.includes(post.id));
        const visiblePosts = filteredPosts.slice(0, 20);

        const newSlides = visiblePosts.map((post, i) => {
          const imageUrl =
            post.media_url || post.image || post.image_url || post.src ||
            post.images?.standard_resolution?.url ||
            post.videos?.standard_resolution?.url ||
            post.thumbnail_url;
          const postLink = post.permalink || post.link;

          if (!imageUrl) return null;

          return (
            <SwiperSlide key={i}>
              <div className={styles['aspect-ratio-box']}>
                <a href={postLink} target="_blank" rel="noopener noreferrer">
                  <img src={imageUrl} alt={`Instagram ${i + 1}`} loading="lazy" />
                </a>
              </div>
            </SwiperSlide>
          );
        }).filter(Boolean);

        setSlides(newSlides);

      } catch (err) {
        console.error("Error loading feed:", err);
        setError("Error loading feed.");
      } finally {
        setLoading(false);
      }
    };

    loadInstagramFeed();
  }, [endpoint]);

  return (
    <section className="p-lg-4 py-4 home-instagram">
      <div className={styles['insta-feed-wrapper']}>
        <div className={styles['insta-link']}>
          <a href="https://www.instagram.com/abelinijewellery" target="_blank">
            @abelinijewellery
          </a>
        </div>
        {loading && <div className={styles['loading-message']}>Loading...</div>}
        {error && <div className={styles['error-message']} style={{ display: 'block' }}>{error}</div>}
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 6 },
          }}
          className={styles['swiper-container']}
          style={{ display: loading || error ? 'none' : 'block' }}
        >
          {slides}
        </Swiper>
      </div>
    </section>
  );
};

export default InstagramFeed;

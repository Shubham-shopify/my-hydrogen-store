import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './InstagramFeed.module.css';

// This component fetches Instagram feed data from our server endpoint (/instagram-proxy),
// and displays it in a responsive Swiper carousel.
const InstagramFeed = () => {
  const [loading, setLoading] = useState(true);         // Loading state
  const [error, setError] = useState(null);             // Error message (if any)
  const [slides, setSlides] = useState([]);             // Slides to render
  const endpoint = '/instagram-proxy';                  // Server route (this uses server-side cache fallback)

  useEffect(() => {
    const loadInstagramFeed = async () => {
      try {
        console.log(" Fetching Instagram feed from:", endpoint);

        const res = await fetch(endpoint);
        const data = await res.json();

        if (!res.ok || data.error) {
          throw new Error(data.message || "Instagram API error");
        }

        // Filter out unwanted posts (e.g., manually excluded ones)
        const EXCLUDED_IDS = ["18166609282334512", "POST_ID_2"];
        const posts = data?.data || [];

        const visiblePosts = posts
          .filter(post => !EXCLUDED_IDS.includes(post.id))
          .slice(0, 20); // Limit to first 20 posts

        const newSlides = visiblePosts.map((post, i) => {
          const imageUrl =
            post.media_url || post.image || post.image_url || post.src ||
            post.images?.standard_resolution?.url ||
            post.videos?.standard_resolution?.url ||
            post.thumbnail_url;

          const postLink = post.permalink || post.link;

          // Only create slide if image exists
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
        }).filter(Boolean); // Remove nulls

        setSlides(newSlides);

      } catch (err) {
        console.error(" Error loading feed:", err.message);
        setError("Could not load Instagram feed.");
      } finally {
        setLoading(false);
      }
    };

    loadInstagramFeed();
  }, []);

  return (
    <section className="p-lg-4 py-4 home-instagram">
      <div className={styles['insta-feed-wrapper']}>

        {/* Instagram Profile Link */}
        <div className={styles['insta-link']}>
          <a href="https://www.instagram.com/abelinijewellery" target="_blank">
            @abelinijewellery
          </a>
        </div>

        {/* Show loading message */}
        {loading && (
          <div className={styles['loading-message']}>
            Loading...
          </div>
        )}

        {/* Show error message if something went wrong */}
        {error && (
          <div className={styles['error-message']} style={{ display: 'block' }}>
            {error}
          </div>
        )}

        {/* Swiper only renders if there's no error and not loading */}
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

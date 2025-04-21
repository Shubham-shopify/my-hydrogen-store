import React from 'react';
import styles from './Slideshow.module.css';

const VisitAndBespoke = () => {
  return (
    <>
         {/* Bespoke Design Section */}
      <div className={styles.bespokeMain}>
        {/* Background Image */}
        <img
          src="https://cdn.shopify.com/s/files/1/0933/1789/0388/files/bespoke_image.jpg?v=2024173836"
          alt="Bespoke Banner"
          className={`${styles.bespokeImg} ${styles.desktopImg}`}
        />
        {/* Overlay Text */}
        <div className={styles.bespokeText}>
          <p className={styles.bespokeSubtitle}>Create Your Own Design</p>
          <h2 className={styles.bespokeTitle}>Bespoke Design Service</h2>
          <p className={styles.bespokeDescription}>
            ABELINI Jewellery can transform the latest trends and preferences of style into bespoke jewellery through exquisite design.
            So if you are looking for a unique design that has been made for you, ABELINI will make your dream a reality.
          </p>
          <a href="bespoke.html" className={styles.bespokeButton}>
            Request Bespoke Design
          </a>
        </div>
      </div>

    
      {/* Visit Showroom Section */}
      <div id="static-visit-showroom-html">
        <section className={styles.homeShowroom}>
          <div className={styles.mainWrapper}>
            {/* Background Image */}
            <div className={styles.imageWrapper}>
              <img
                src="https://cdn.shopify.com/s/files/1/0933/1789/0388/files/visit_showroom.jpg?v=2024173836"
                alt="Visit Showroom Banner"
                className={styles.backgroundImage}
                loading="lazy"
              />
            </div>

            {/* Text Overlay */}
            <div className={styles.contentOverlay}>
              <p className={styles.title}>TRY & FEEL</p>
              <h2 className={styles.bespokeShowroom}>Visit Our Showroom</h2>
              <p className={styles.description}>
                Visit our showroom at Hatton Garden (London) for a one-to-one consultation. We offer a no-pressure
                environment, so you choose the perfect diamond jewellery. Please schedule an appointment to view our
                diamond rings and fine jewellery selection today.
              </p>
              <a className={styles.button} href="bespoke.html">
                Book an appointment now
              </a>
            </div>
          </div>
        </section>
      </div>

     
    </>
  );
};

export default VisitAndBespoke;

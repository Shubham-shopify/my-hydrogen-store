import styles from './JewelleryOccasion.module.css';
import { useEffect } from 'react';

const sliderData = [
  {
    name: 'Solitaire',
    img: 'https://cdn.shopify.com/s/files/1/0933/1789/0388/files/solitaire.jpg',
    link: '/collections/solitaire-rings',
  },
  {
    name: 'Side Stone',
    img: 'https://cdn.shopify.com/s/files/1/0933/1789/0388/files/side_stone.jpg',
    link: '/collections/side-stone-rings',
  },
  {
    name: 'Halo',
    img: 'https://cdn.shopify.com/s/files/1/0933/1789/0388/files/halo.jpg',
    link: '/collections/halo-rings',
  },
  {
    name: 'Trilogy',
    img: 'https://cdn.shopify.com/s/files/1/0933/1789/0388/files/trilogy.jpg',
    link: '/collections/trilogy-rings',
  },
  {
    name: 'Trilogy',
    img: 'https://cdn.shopify.com/s/files/1/0933/1789/0388/files/ruby.jpg',
    link: '/collections/trilogy-rings',
  },
  {
    name: 'Halo',
    img: 'https://cdn.shopify.com/s/files/1/0933/1789/0388/files/halo.jpg',
    link: '/collections/halo-rings',
  },
  {
    name: 'Solitaire',
    img: 'https://cdn.shopify.com/s/files/1/0933/1789/0388/files/solitaire.jpg',
    link: '/collections/solitaire-rings',
  },
];

export default function JewelleryOccasion() {
  useEffect(() => {
    // Ensures the effect runs only on the client-side
    if (typeof document !== 'undefined') {
      const ringSlider = document.getElementById('ringSlider');
      const prevButton = document.getElementById('prevButton');
      const nextButton = document.getElementById('nextButton');

      if (ringSlider && prevButton && nextButton) {
        // Scroll on the "previous" button click
        prevButton.addEventListener('click', () => {
          ringSlider.scrollBy({ left: -200, behavior: 'smooth' });
        });

        // Scroll on the "next" button click
        nextButton.addEventListener('click', () => {
          ringSlider.scrollBy({ left: 200, behavior: 'smooth' });
        });
      }
    }
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <section className={styles.wrapper}>
      <div className={styles.heading}>
        <p className={styles.subtext}>OUR JEWELLERY</p>
        <h2 className={styles.title}>Abelini For </h2>
        <h2 className={styles.title}>Any Occasion</h2>
      </div>

      <div className={styles.grid}>
        <div className={styles.left}>
          <img
            src="https://cdn.shopify.com/s/files/1/0933/1789/0388/files/most_loved_engagement_1.jpg?v=2024173836"
            alt="Gold ring with blue gem"
            className={styles.image}
          />

          <div className={styles.textBox}>
            <h3>Most Loved Engagement Rings</h3>
            <p>
              Our range of engagement rings includes timeless classics and stylish modern designs.
              Whether you’re looking for traditional solitaires or vibrant stones, you’ll find your
              dream ring here.
            </p>
            <button className={styles.cta}>Engagement Rings</button>
          </div>
        </div>

        <div className={styles.right}>
          <img
            src="https://cdn.shopify.com/s/files/1/0933/1789/0388/files/young_woman.jpg"
            alt="Model wearing jewelry"
            className={styles.image}
          />
        </div>
      </div>

      {/* Slider Section */}
      <div className={styles.sliderWrapper}>
        <button id="prevButton" className={styles.scrollButton}>
          ‹
        </button>

        <div id="ringSlider" className={styles.slider}>
          {sliderData.map((item, index) => (
            <a href={item.link} className={styles.card} key={index}>
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </a>
          ))}
        </div>

        <button id="nextButton" className={styles.scrollButton}>
          ›
        </button>
      </div>
    </section>
  );
}

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


useEffect(() => {
  const scrollButton = document.getElementById('ringSlider');
  if (scrollButton) {
    <div className={styles.sliderWrapper}>
    <button
      className={styles.scrollButton}
      onClick={() =>
        document.getElementById('ringSlider').scrollBy({ left: -200, behavior: 'smooth' })
      }
    >
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
  
    <button
      className={styles.scrollButton}
      onClick={() =>
        document.getElementById('ringSlider').scrollBy({ left: 200, behavior: 'smooth' })
      }
    >
      ›
    </button>
  </div>
  }
}, [])

export default function JewelleryOccasion() {
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
    </section>
  );
}

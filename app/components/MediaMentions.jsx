import styles from './MediaMentions.module.css';

const mediaLogos = [
  {
    name: 'The Sun',
    image: 'https://cdn.shopify.com/s/files/1/0933/1789/0388/files/sun_newspaper.svg?v=1739878479',
    alt: 'The Sun Logo',
  },
  {
    name: 'Express',
    image: 'https://cdn.shopify.com/s/files/1/0933/1789/0388/files/daily_express.svg?v=1739878478',
    alt: 'Express Logo',
  },
  {
    name: 'Marie Claire',
    image: 'https://cdn.shopify.com/s/files/1/0933/1789/0388/files/marie_claire.svg?v=1739878476',
    alt: 'Marie Claire Logo',
  },
  {
    name: 'Hitched',
    image: 'https://cdn.shopify.com/s/files/1/0933/1789/0388/files/logos.svg?v=1739878477',
    alt: 'Hitched Logo',
  },
  {
    name: 'Mirror',
    image: 'https://cdn.shopify.com/s/files/1/0933/1789/0388/files/mirrorlogo.svg?v=1739878479',
    alt: 'Mirror Logo',
  },
];

export default function MediaMentions() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.heading}>
        <p className={styles.subtext}>WHERE DO THEY MENTION US?</p>
        <h2 className={styles.title}>Abelini In The Spotlight</h2>
        <hr />
      </div>
      <div className={styles.logoGrid}>
        {mediaLogos.map((media) => (
          <img
            key={media.name}
            src={media.image}
            alt={media.alt}
            className={styles.logo}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}

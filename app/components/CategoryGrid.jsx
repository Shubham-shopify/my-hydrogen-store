// app/components/CategoryGrid.jsx
import styles from './CategoryGrid.module.css';

const categories = [
  {
    title: 'Engagement Rings',
    image: 'https://cdn.shopify.com/s/files/1/0933/1789/0388/files/rings_7ed80ebc-9813-44fd-b910-2935be79204a.jpg?v=1739878966',
    link: '/collections/engagement-rings',
  },
  {
    title: 'Wedding Rings',
    image: 'https://cdn.shopify.com/s/files/1/0933/1789/0388/files/wedding.jpg?v=1739878970',
    link: '/collections/wedding-rings',
  },
  {
    title: 'Eternity Rings',
    image: 'https://cdn.shopify.com/s/files/1/0933/1789/0388/files/eternity_c7f41279-019f-48aa-97e4-0e7d2a904be6.jpg?v=1739878966',
    link: '/collections/eternity-rings',
  },
  {
    title: 'Necklace',
    image: 'https://cdn.shopify.com/s/files/1/0933/1789/0388/files/necklace-pendants.jpg?v=1740997812',
    link: '/collections/necklace',
  },
  {
    title: 'Earrings',
    image: 'https://cdn.shopify.com/s/files/1/0933/1789/0388/files/diamond_stud_earrings_essential_20.jpg?v=1739354419',
    link: '/collections/earrings',
  },
  {
    title: 'Bracelets',
    image: 'https://cdn.shopify.com/s/files/1/0933/1789/0388/files/delicate_bracelets.jpg?v=1743762709',
    link: '/collections/bracelets',
  },
];

export default function CategoryGrid() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Select Category</h2>
        <a href="/collections" className={styles.showAll}>Show All &gt;</a>
      </div>
      <div className={styles.grid}>
        {categories.map((cat, index) => (
          <a key={index} href={cat.link} className={styles.card}>
            <img src={cat.image} alt={cat.title} />
            <p>{cat.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

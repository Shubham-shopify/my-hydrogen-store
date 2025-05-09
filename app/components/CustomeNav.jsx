import React from 'react';
import { Link } from '@remix-run/react';
import  '../styles/customenav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';


const CustomNav = () => {
  useEffect(() => {
    // Ensure Bootstrap JS is only loaded client-side
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
      script.async = true;
      script.onload = () => console.log('Bootstrap JS loaded');
      script.onerror = () => console.error('Failed to load Bootstrap JS');
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script); // Cleanup
      };
    }
  }, []);

  
   return (
    <div className="navwrap d-none d-lg-block" id="desktopmenu" style={{ minHeight: '45px' }}>
    <nav className="navbar align-items-center border-bottom py-1">
      <div className="nav-menu text-center d-flex align-items-center container-fluid">
        {/* Navigation Menu */}
        <ul className="nav justify-content-between" style={{ display: 'contents' }}>
          {/* Engagement Rings */}
          <li className="drop-down mega-menu">
            <Link to="collections/engagement-rings">Engagement Rings</Link>
            <ul className="mega-menu-block">
              <li>
                <div className="row justify-content-between px-4 py-4">
                  <div className="col-lg-5 d-flex">
                    <div className="col-12 p-0">
                      <div className="row row-cols-2 g-2">
                        <ul className="col">
                          <li>
                            <div className="lbl-title py-1 mt-2 text-gray-900">Create Your Own</div>
                          </li>
                          {[
                            {
                              src: 'diamond.png',
                              alt: 'Start With A Diamond',
                              text: 'Start With A Diamond',
                              to: '/choose-diamond.html',
                              width: 25,
                              height: 25,
                              style: { width: '25px', height: '25px' },
                            },
                          ].map((item, index) => (
                            <li key={index}>
                              <Link className="lbl-text" to={item.to}>
                                <img
                                  className="img-fluid lazy"
                                  src={`https://cdn.shopify.com/s/files/1/0933/1789/0388/files/${item.src}?v=1743166927`}
                                  alt={item.alt}
                                  width={item.width}
                                  height={item.height}
                                  loading="lazy"
                                  style={item.style}
                                />
                                <span className="ml-2">{item.text}</span>
                              </Link>
                            </li>
                          ))}
                          <li>
                            <div className="lbl-title py-1 text-gray-900">Shop By Style</div>
                          </li>
                          {[
                            { src: 'solitaire.png', alt: 'Classic Solitaire', text: 'Classic Solitaire', to: '/engagement-rings/classic-solitaire/diamonds.html' },
                            { src: 'halo.png', alt: 'Halo Rings', text: 'Halo Rings', to: '/engagement-rings/halo/diamonds.html' },
                            { src: 'side-stone.png', alt: 'Side Stone Rings', text: 'Side Stone Rings', to: '/engagement-rings/side-stone/diamonds.html' },
                            { src: 'three-stone.png', alt: 'Trilogy Rings', text: 'Trilogy Rings', to: '/engagement-rings/three-stone/diamonds.html' },
                            { src: 'oval.png', alt: 'Illusion Set Rings', text: 'Illusion Set Rings', to: '/engagement-rings/trilogy/diamonds.html' },
                            { src: 'cluster.png', alt: 'Cluster Rings', text: 'Cluster Rings', to: '/engagement-rings/vintage/diamonds.html' },
                            { src: 'vintage-engagement-rings.png', alt: 'Vintage Engagement Rings', text: 'Vintage Engagement Rings', to: '/engagement-rings/vintage/diamonds.html' },
                          ].map((item, index) => (
                            <li key={index}>
                              <Link className="lbl-text" to={item.to}>
                                <img
                                  className="img-fluid lazy"
                                  src={`https://cdn.shopify.com/s/files/1/0933/1789/0388/files/${item.src}?v=2024173836`}
                                  alt={item.alt}
                                  width="45"
                                  height="25"
                                  loading="lazy"
                                />
                                <span className="ml-2">{item.text}</span>
                              </Link>
                            </li>
                          ))}
                          <li className="py-0 text-center border-radius-24 mt-2 border-111111 menu-sale-link" style={{ width: '200px' }}>
                            <Link className="py-1 lbl-title font-weight-normal" to="/engagement-rings/classic-solitaire/diamonds.html">
                              Engagement Rings Sale
                            </Link>
                          </li>
                        </ul>
                        <ul className="col">
                          <li>
                            <div className="lbl-title py-1 mt-2 text-gray-900 invisible">Create Your Own</div>
                          </li>
                          {[
                            {
                              src: 'solitaire.png',
                              alt: 'Start With A Setting',
                              text: 'Start With A Setting',
                              to: '/choose-setting.html',
                              width: 45,
                              height: 25,
                            },
                          ].map((item, index) => (
                            <li key={index}>
                              <Link className="lbl-text" to={item.to}>
                                <img
                                  className="img-fluid lazy"
                                  src={`https://cdn.shopify.com/s/files/1/0933/1789/0388/files/${item.src}?v=2024173836`}
                                  alt={item.alt}
                                  width={item.width}
                                  height={item.height}
                                  loading="lazy"
                                />
                                <span className="ml-2">{item.text}</span>
                              </Link>
                            </li>
                          ))}
                          <li>
                            <div className="lbl-title py-1 text-gray-900 invisible">Shop By Style</div>
                          </li>
                          {[
                            { src: 'twisted-engagement-rings.png', alt: 'Twisted Engagement Rings', text: 'Twisted Engagement Rings', to: '/engagement-rings/twisted/diamonds.html' },
                            { src: 'unique-engagement-rings.png', alt: 'Unique Engagement Rings', text: 'Unique Engagement Rings', to: '/engagement-rings/unique/diamonds.html' },
                            { src: 'antique-engagement-rings.png', alt: 'Antique Engagement Rings', text: 'Antique Engagement Rings', to: '/engagement-rings/antique/diamonds.html' },
                            { src: 'gemstone.png', alt: 'Gemstone Rings', text: 'Gemstone Rings', to: '/engagement-rings/gemstone/diamonds.html' },
                            { src: 'couples-rings.png', alt: 'Couples Rings', text: 'Couples Rings', to: '/engagement-rings/couples/diamonds.html' },
                            { src: 'minimalist.png', alt: 'Minimalist Engagement Rings', text: 'Minimalist Engagement Rings', to: '/engagement-rings/minimalist/diamonds.html' },
                            { src: 'aquamarine.png', alt: 'Aquamarine Rings', text: 'Aquamarine Rings', to: '/engagement-rings/aquamarine/diamonds.html' },
                          ].map((item, index) => (
                            <li key={index}>
                              <Link className="lbl-text" to={item.to}>
                                <img
                                  className="img-fluid lazy"
                                  src={`https://cdn.shopify.com/s/files/1/0933/1789/0388/files/${item.src}?v=2024173836`}
                                  alt={item.alt}
                                  width="45"
                                  height="25"
                                  loading="lazy"
                                />
                                <span className="ml-2">{item.text}</span>
                              </Link>
                            </li>
                          ))}
                          <li className="py-0 text-center border-radius-24 mt-2 border-111111 menu-sale-link" style={{ width: '200px' }}>
                            <Link className="py-1 lbl-title font-weight-normal" to="/engagement-rings/classic-solitaire/diamonds.html">
                              Engagement Rings Sale
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 d-flex">
                    <div className="col-12 p-0">
                      <div className="row row-cols-3">
                      <ul className="col border-r-1 pl-3 border-l-1" style={{ borderLeft: '1px solid #ccc' }}>
                          <li>
                            <div className="lbl-title py-1 text-gray-900">Shop By Shape</div>
                          </li>
                          {[
                            { src: 'round.svg', alt: 'Round shape', text: 'Round', to: '/engagement-rings/round', width: 45, height: 25, style: { width: '45px', height: '25px' } },
                            { src: 'princess.svg', alt: 'Princess shape', text: 'Princess', to: '/engagement-rings/princess', width: 45, height: 25, style: { width: '45px', height: '25px' } },
                            { src: 'emerald.svg', alt: 'Emerald shape', text: 'Emerald', to: '/engagement-rings/emerald', width: 45, height: 25, style: { width: '45px', height: '25px' } },
                            { src: 'asscher.svg', alt: 'Asscher shape', text: 'Asscher', to: '/engagement-rings/asscher', width: 45, height: 25, style: { width: '45px', height: '25px' } },
                            { src: 'oval.svg', alt: 'Oval shape', text: 'Oval', to: '/engagement-rings/oval', width: 45, height: 25, style: { width: '45px', height: '25px' } },
                            { src: 'pear.svg', alt: 'Pear shape', text: 'Pear', to: '/engagement-rings/pear', width: 45, height: 25, style: { width: '45px', height: '25px' } },
                            { src: 'heart.svg', alt: 'Heart shape', text: 'Heart', to: '/engagement-rings/heart', width: 45, height: 25, style: { width: '45px', height: '25px' }, className: 'filter_heart' },
                            { src: 'marquise.svg', alt: 'Marquise shape', text: 'Marquise', to: '/engagement-rings/marquise', width: 45, height: 25, style: { width: '45px', height: '25px' }, className: 'filter_marquise' },
                            { src: 'cushion.svg', alt: 'Cushion shape', text: 'Cushion', to: '/engagement-rings/cushion', width: 45, height: 25, style: { width: '45px', height: '25px' }, className: 'filter_cushion' },
                          ].map((item, index) => (
                            <li key={index} className={item.className || ''}>
                              <Link className="lbl-text" to={item.to}>
                                <img
                                  className="img-fluid lazy"
                                  src={`https://cdn.shopify.com/s/files/1/0933/1789/0388/files/${item.src}?v=2024173836`}
                                  alt={item.alt}
                                  width="25"
                                  height="25"
                                  loading="lazy"
                                  style={item.style}
                                />
                                <span className="ml-2">{item.text}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <ul className="col border-r-1 pl-3" style={{ borderLeft: '1px solid #ccc' }}>
                          <li>
                            <div className="lbl-title py-1 text-gray-900">Shop By Stone Type</div>
                          </li>
                          {[
                            { src: 'di.png', alt: 'Diamond stone', text: 'Diamond', to: '/engagement-rings/diamonds', width: 25, height: 25 },
                            { src: 'di.png', alt: 'Lab Grown diamond', text: 'Lab Grown', to: '/engagement-rings/lab-grown-diamond', width: 25, height: 25 },
                            { src: 'di.png', alt: 'Moissanite stone', text: 'Moissanite', to: '/engagement-rings/moissanite', width: 25, height: 25 },
                            { src: 'bd.png', alt: 'Black Diamond stone', text: 'Black Diamond', to: '/engagement-rings/black-diamond', width: 25, height: 25 },
                            { src: 'bs.png', alt: 'Blue Sapphire stone', text: 'Blue Sapphire', to: '/engagement-rings/blue-sapphire', width: 25, height: 25 },
                            { src: 'rb.png', alt: 'Ruby stone', text: 'Ruby', to: '/engagement-rings/ruby', width: 25, height: 25 },
                            { src: 'em.png', alt: 'Emerald stone', text: 'Emerald', to: '/engagement-rings/emeralds', width: 25, height: 25 },
                            { src: 'tz.png', alt: 'Tanzanite stone', text: 'Tanzanite', to: '/engagement-rings/tanzanite', width: 25, height: 25 },
                            { src: 'am.png', alt: 'Amethyst stone', text: 'Amethyst', to: '/engagement-rings/amethyst', width: 25, height: 25 },
                            { src: 'gr.png', alt: 'Garnet stone', text: 'Garnet', to: '/engagement-rings/garnet', width: 25, height: 25 },
                          ].map((item, index) => (
                            <li key={index}>
                              <Link className="lbl-text" to={item.to}>
                                <img
                                  className="img-fluid lazy"
                                  src={`https://cdn.shopify.com/s/files/1/0933/1789/0388/files/${item.src}?v=2024173836`}
                                  alt={item.alt}
                                  width="25"
                                  height="25"
                                  loading="lazy"
                                />
                                <span className="ml-2">{item.text}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <ul className="col pl-3" style={{ borderLeft: '1px solid #ccc' }}>
                          <li>
                            <div className="lbl-title py-1 text-gray-900">Shop By Metal</div>
                          </li>
                          {[
                            { src: 'rose-gold.png', alt: 'Rose Gold metal', text: 'Rose Gold', to: '/engagement-rings/rose-gold', width: 25, height: 25, style: { width: '25px', height: '25px' } },
                            { src: 'white-gold.png', alt: 'White Gold metal', text: 'White Gold', to: '/engagement-rings/white-gold', width: 25, height: 25, style: { width: '25px', height: '25px' } },
                            { src: 'yellow-gold.png', alt: 'Yellow Gold metal', text: 'Yellow Gold', to: '/engagement-rings/yellow-gold', width: 25, height: 25, style: { width: '25px', height: '25px' } },
                            { src: 'platinum.png', alt: 'Platinum metal', text: 'Platinum', to: '/engagement-rings/platinum', width: 25, height: 25, style: { width: '25px', height: '25px' } },
                          ].map((item, index) => (
                            <li key={index}>
                              <Link className="lbl-text" to={item.to}>
                                <img
                                  className="img-fluid lazy"
                                  src={`https://cdn.shopify.com/s/files/1/0933/1789/0388/files/${item.src}?v=2024173836`}
                                  alt={item.alt}
                                  width="25"
                                  height="25"
                                  loading="lazy"
                                  style={item.style}
                                />
                                <span className="ml-2">{item.text}</span>
                              </Link>
                            </li>
                          ))}
                          <li>
                            <div className="lbl-title py-1 text-gray-900">More Links</div>
                          </li>
                          {[
                            { text: 'QuickShip Engagement Rings', to: '/ready-to-deliver?filter_param=10.235' },
                            { text: 'Bespoke Engagement Rings', to: '/bespoke' },
                            { text: "Women's Engagement Rings", to: '/engagement-rings/womens' },
                            { text: "Men's Engagement Rings", to: '/engagement-rings/mens' },
                            { text: '1 Carat Engagement Rings', to: '/engagement-rings/1-carat' },
                            { text: '1.5 Carat Engagement Rings', to: '/engagement-rings/one-and-half-carat' },
                            { text: '2 Carat Engagement Rings', to: '/engagement-rings/2-carat' },
                            { text: '3 Carat Engagement Rings', to: '/engagement-rings/3-carat' },
                            { text: '5 Carat Engagement Rings', to: '/engagement-rings/5-carat' },
                          ].map((item, index) => (
                            <li key={index}>
                              <Link className="lbl-text" to={item.to}>
                                <span>{item.text}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
  
              {/* QuickShip */}
              <li className="drop-down mega-menu">
                <Link to="/engagement-rings/classic-solitaire/diamonds.html">QuickShip</Link>
                <ul className="mega-menu-block">
                  <li>
                    <div className="row justify-content-between px-4 py-4">
                      <div className="col-lg-3 d-flex">
                        <div className="col-12 p-0">
                          <div className="row row-cols-2 g-2">
                            <ul className="col">
                              <li>
                                <div className="lbl-title py-1 color-111111">Shop By Style</div>
                              </li>
                              {[
                                { src: 'solitaire.png', alt: 'All Engagement Rings', text: 'All Engagement Rings' },
                                { src: 'eternity-half-rings.png', alt: 'All Wedding Rings', text: 'All Wedding Rings' },
                                { src: 'five-stone.png', alt: 'All Diamond Rings', text: 'All Diamond Rings' },
                                { src: 'stud.png', alt: 'All Earrings', text: 'All Earrings' },
                                { src: 'solitaire_desk.png', alt: 'All Necklace', text: 'All Necklace', width: '30', height: '30' },
                              ].map((item, index) => (
                                <li key={index}>
                                  <Link className="lbl-text" to="/engagement-rings/classic-solitaire/diamonds.html">
                                    <img
                                      className="img-fluid lazyload"
                                      src={`https://cdn.shopify.com/s/files/1/0933/1789/0388/files/${item.src}?v=2024173836`}
                                      alt={item.alt}
                                      width={item.width || '45'}
                                      height={item.height || '25'}
                                      loading="lazy"
                                    />
                                    <span className={item.width ? 'ml-4' : 'ml-2'}>{item.text}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <ul className="col border-right-1 pl-3">
                              <li>
                                <div className="lbl-title py-1 color-111111">Shop By Metal</div>
                              </li>
                              {[
                                { src: 'rose-gold.png', alt: 'Rose Gold', text: 'Rose Gold' },
                                { src: 'white-gold.png', alt: 'White Gold', text: 'White Gold' },
                                { src: 'yellow-gold.png', alt: 'Yellow Gold', text: 'Yellow Gold' },
                                { src: 'platinum.png', alt: 'Platinum', text: 'Platinum' },
                              ].map((item, index) => (
                                <li key={index}>
                                  <Link className="lbl-text" to="/engagement-rings/classic-solitaire/diamonds.html">
                                    <img
                                      className="img-fluid lazyload"
                                      src={`https://cdn.shopify.com/s/files/1/0933/1789/0388/files/${item.src}?v=2024173836`}
                                      alt={item.alt}
                                      width="25"
                                      height="25"
                                      loading="lazy"
                                      style={{ width: '25px', height: '25px' }}
                                    />
                                    <span className="ml-2">{item.text}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <ul className="col-6 d-flex align-items-center">
                              <div className="d-flex flex-column position-relative ready-to-delivery-img col-12">
                                <img
                                  className="img-fluid"
                                  src="https://cdn.shopify.com/s/files/1/0933/1789/0388/files/ready-to-delivery.jpg?v=2024173836"
                                  loading="lazy"
                                  alt="Visit Our Showroom"
                                  height="600"
                                  width="1000"
                                />
                                <Link to="/bespoke.html" className="btn btn-black btn-md radius-24 m-0 text-capitalize col-auto btn-w-3">
                                  Visit Our Showroom
                                </Link>
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
  
              {/* Inspiration */}
              <li className="drop-down mega-menu inspiration_menu">
                <a href="#!" className="span_a" role="button" onClick={(e) => e.preventDefault()}>
                  Inspiration
                </a>
                <ul className="mega-menu-block">
                  <li>
                    <div className="row justify-content-around my-4">
                      <div className="col-lg-6" style={{ borderRight: '1px solid #dee2e6' }}>
                        <div className="row">
                          <div className="col-lg-6">
                            <ul className="px-4 mb-0">
                              {[
                                { title: 'Engagement Rings', links: ['Engagement Rings Buying Guide', 'Engagement Rings Trends'] },
                                { title: 'Wedding Rings', links: ['Wedding Rings Buying Guide', 'Wedding Rings Trends'] },
                                { title: 'Diamond Rings', links: ['Diamond Rings Buying Guide', 'Diamond Eternity Rings Trends'] },
                              ].map((section, index) => (
                                <React.Fragment key={index}>
                                  <li className="text-left">
                                    <span className="lbl-title color-111111 text-uppercase">{section.title}</span>
                                  </li>
                                  {section.links.map((text, i) => (
                                    <li className="text-left" key={i}>
                                      <Link to="/blog/guide-to-buy-diamond-trilogy-rings.html">
                                        <span className="lbl-text">{text}</span>
                                      </Link>
                                    </li>
                                  ))}
                                  {index < 2 && <li className="text-left mt-3"></li>}
                                </React.Fragment>
                              ))}
                            </ul>
                          </div>
                          <div className="col-lg-6">
                            <ul className="px-4 mb-0">
                              {[
                                { title: 'Earrings', links: ['Earrings Buying Guide'] },
                                { title: 'Necklaces', links: ['Necklaces & Pendants Buying Guide', 'Necklaces & Pendants Trends'] },
                                { title: 'Bracelets', links: ['Diamond Bracelets Buying Guide', 'Diamond Bracelets Trends'] },
                              ].map((section, index) => (
                                <React.Fragment key={index}>
                                  <li className="text-left">
                                    <span className="lbl-title color-111111 text-uppercase">{section.title}</span>
                                  </li>
                                  {section.links.map((text, i) => (
                                    <li className="text-left" key={i}>
                                      <Link to="/blog/guide-to-buy-diamond-trilogy-rings.html">
                                        <span className="lbl-text">{text}</span>
                                      </Link>
                                    </li>
                                  ))}
                                  {index < 2 && <li className="text-left mt-3"></li>}
                                </React.Fragment>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3" style={{ borderRight: '1px solid #dee2e6' }}>
                        <ul className="px-4 mb-0">
                          <li className="text-left">
                            <span className="lbl-title color-111111 text-uppercase">Sizing</span>
                          </li>
                          {['Ring Size Guide', 'Necklace Size Guide', 'Engagement And Wedding Rings Resizing', 'Bracelet Size Guide'].map(
                            (text, index) => (
                              <li className="text-left" key={index}>
                                <Link to={text.includes('Resizing') ? '/blog/guide-to-buy-diamond-trilogy-rings.html' : '/about-us.html'}>
                                  <span className="lbl-text">{text}</span>
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                      <div className="col-lg-3" style={{ borderRight: '1px solid #dee2e6' }}>
                        <ul className="px-4 mb-0">
                          <li className="text-left">
                            <span className="lbl-title color-111111 text-uppercase">Education</span>
                          </li>
                          {['Diamond Education', 'Metal Guide', 'Which Finger Is The Ring Finger?', 'Ear Piercing Faqs'].map((text, index) => (
                            <li className="text-left" key={index}>
                              <Link to={text.includes('Guide') ? '/about-us.html' : '/blog/guide-to-buy-diamond-trilogy-rings.html'}>
                                <span className="lbl-text">{text}</span>
                              </Link>
                            </li>
                          ))}
                          <li className="text-left mt-3">
                            <span className="lbl-title color-111111 text-uppercase">Other Trends</span>
                          </li>
                          {['Birthstone Jewellery', "Are Men's Earrings in Style?", 'Gold Or Silver In Style?'].map((text, index) => (
                            <li className="text-left" key={index}>
                              <Link to={text.includes('Birthstone') ? '/about-us.html' : '/blog/guide-to-buy-diamond-trilogy-rings.html'}>
                                <span className="lbl-text">{text}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
  
             
            </ul>

          </div>
        </nav>
      </div>
    );
  };
  
  

export default CustomNav;
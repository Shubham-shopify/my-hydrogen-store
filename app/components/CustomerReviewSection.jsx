import './CustomerReviewSection.css';
import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomerReviewSection = () => {
  const carouselRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [reviews, setReviews] = useState([]);
  const [googleStats, setGoogleStats] = useState({ total: 0, rating: 0 });
  const [trustStats, setTrustStats] = useState({ total: 0, rating: 0 });

  useEffect(() => {
    const carousel = carouselRef.current;
    const prev = prevRef.current;
    const next = nextRef.current;

    const handlePrevClick = () => {
      carousel.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const handleNextClick = () => {
      carousel.scrollBy({ left: 300, behavior: 'smooth' });
    };

    prev?.addEventListener('click', handlePrevClick);
    next?.addEventListener('click', handleNextClick);

    const loadBootstrap = async () => {
      await import('bootstrap/dist/js/bootstrap.bundle.min.js');
    };
    loadBootstrap();

   fetch('https://www.abelini.com/shopify/api/google_review.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(async (res) => {
        const raw = await res.text();
        const data = JSON.parse(raw);

        setGoogleStats({
          total: data.google_total_review.total_review,
          rating: data.google_total_review.percentage,
        });

        setTrustStats({
          total: data.trust_shops_total_review.total_review,
          rating: data.trust_shops_total_review.percentage,
        });

        setReviews(data.google_reviews);
      })
      .catch((err) => {
        console.error('Failed to fetch reviews:', err);
      });

    if (typeof document !== 'undefined') {
      if (!document.querySelector('script[src*="tp.widget.bootstrap.min.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
        script.async = true;
        document.body.appendChild(script);
      }

      if (!document.querySelector('script[src*="widget.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://integrations.etrusted.com/applications/widget.js/v2';
        script.defer = true;
        document.body.appendChild(script);
      }
    }

    return () => {
      prev?.removeEventListener('click', handlePrevClick);
      next?.removeEventListener('click', handleNextClick);
    };
  }, []);
  
    return (
      <div className="container">
        <div className="row my-3 mx-0">
          <div className="col-12 text-center">
            <p className="text-uppercase title mt-3">Testimonials</p>
            <h2 className="title_heading text-capitalize testimonial_title">Our Customers Love Us</h2>
            <p className="title">More than 10000 happy customers all over Europe</p>
          </div>
        </div>
  
        <div className="row py-3 mx-0">
          <div className="col-12 p-0 review-block">
            <ul className="nav nav-tabs justify-content-center" role="tablist">
              <li className="nav-item col-4 p-0 text-center" role="presentation">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#tabs-2"
                  role="tab"
                  id="trustpilot-tab"
                  aria-controls="tabs-2"
                  aria-selected="true"
                >
                  <img
                    src="https://www.abelini.com/image/avif/catalog/view/theme/default/img/trustpilot_logo-180x50.avif"
                    alt="Trustpilot"
                    className="img-fluid mb-2 px-2"
                    width="130"
                    height="30"
                    loading="lazy"
                  />
                  {/* Trustpilot Widget */}
                  <div
                    className="trustpilot-widget"
                    data-locale="en-GB"
                    data-template-id="5419b6a8b0d04a076446a9ad"
                    data-businessunit-id="5982fc490000ff0005a809d7"
                    data-style-width="100%"
                    data-theme="light"
                    data-style-alignment="center"
                  ></div>
                </a>
              </li>
  
              <li className="nav-item col-4 d-flex justify-content-center text-center p-0" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tabs-3"
                  role="tab"
                  id="trustedshop-tab"
                  aria-controls="tabs-3"
                  aria-selected="false"
                >
                  <img
                    src="https://www.abelini.com/image/avif/catalog/view/theme/default/img/trusted_shop_logo-180x50.avif"
                    alt="Trusted Shop Logo"
                    className="img-fluid mb-2 px-2"
                    loading="lazy"
                    width="130"
                    height="30"
                  />
                  <p className="title m-0 d-none d-lg-block">Trust Shop 4.8 | 1878 reviews</p>
                  <p className="title_heading_small m-0 d-lg-none d-block mb-2">
                    Trust Shop 4.8
                    <br />
                    1878 reviews
                  </p>
                </a>
              </li>
  
              <li className="nav-item col-4 p-0 text-center" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tabs-1"
                  role="tab"
                  id="google-tab"
                  aria-controls="tabs-1"
                  aria-selected="false"
                >
                  <img
                    src="https://www.abelini.com/image/avif/catalog/view/theme/default/img/google_logo-180x50.avif"
                    alt="Google Logo"
                    className="img-fluid mb-2 px-2"
                    width="130"
                    height="30"
                    loading="lazy"
                  />
                  <p className="title m-0 d-none d-lg-block">Google 4.9 | 2881 reviews</p>
                  <p className="title_heading_small m-0 d-lg-none d-block mb-2">
                    Google 4.9
                    <br />
                    2881 reviews
                  </p>
                </a>
              </li>
            </ul>
  
            <div className="tab-content w-100">
            <div className="tab-pane w-100" id="tabs-1" role="tabpanel">
    {/* Google Review Slider */}
    <div className="row m-0 review-owl">
      <div className="col-12 p-0">
        <div className="review-slider px-2 px-lg-0">
          <div id="google-review" className="s-carousel scrollbar d-flex overflow-x-auto" ref={carouselRef}>
            {/* Arrow Controls */}
            <div className="arraows">
              <span className="prevIcon prev-icon-review" ref={prevRef} data-prev="3">
                <span className="iconify" style={{ fontSize: 22 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    style={{ fontSize: '22px', transform: 'rotate(360deg)' }}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M13.891 17.418a.697.697 0 0 1 0 .979a.68.68 0 0 1-.969 0l-7.83-7.908a.697.697 0 0 1 0-.979l7.83-7.908a.68.68 0 0 1 .969 0a.697.697 0 0 1 0 .979L6.75 10z"
                    />
                  </svg>
                </span>
              </span>
              <span className="nextIcon next-icon-review" ref={nextRef} data-nextv="5">
                <span className="iconify" style={{ fontSize: 22 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    style={{ fontSize: '22px', transform: 'rotate(360deg)' }}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M13.25 10L6.109 2.58a.697.697 0 0 1 0-.979a.68.68 0 0 1 .969 0l7.83 7.908a.697.697 0 0 1 0 .979l-7.83 7.908a.68.68 0 0 1-.969 0a.697.697 0 0 1 0-.979z"
                    />
                  </svg>
                </span>
              </span>
            </div>

            {/* Dynamic Google Reviews from API */}
            {reviews.map((r, index) => (
              <div key={r.review_id || index} className="s-item-new">
                <div className="text-center position-relative overflow-hidden d-flex flex-column">
                  <p className="m-0 text-black">Google Review</p>
                  <div className="mt-3">
                    <p className="mediumstars d-inline">
                      {[...Array(Number(r.rating))].map((_, i) => (
                        <span
                          key={i}
                          className="iconify txtclr-yellow"
                          data-icon="ant-design:star-filled"
                          style={{ fontSize: 22, lineHeight: '24px' }}
                        >
                          ★
                        </span>
                      ))}
                    </p>
                  </div>
                  <p className="text-black font-weight-bold my-3 title text-capitalize">{r.author}</p>
                  <p className="text-white-space title text-capitalize">{r.text}</p>
                  <p>A reviewer</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
             </div>

  
              <div className="tab-pane active w-100" id="tabs-2" role="tabpanel">
                <div className="row m-0 review-owl">
                  <div className="col-12 p-0 my-3">
                    {/* TrustBox Widget - Carousel */}
                    <div
                      className="trustpilot-widget"
                      data-locale="en-GB"
                      data-template-id="53aa8912dec7e10d38f59f36"
                      data-businessunit-id="5982fc490000ff0005a809d7"
                      data-style-height="140px"
                      data-style-width="100%"
                      data-theme="light"
                      data-stars="1,2,3,4,5"
                      data-review-languages="en"
                    >
                      <a
                        href="https://uk.trustpilot.com/review/abelini.com"
                        className="ask-confirm-before-visit"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Trustpilot
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
  
              <div className="tab-pane w-100" id="tabs-3" role="tabpanel">
                <div className="row m-0 review-owl s-carousel scrollbar">
                  <div className="col-12 p-0">
                    {/* Trusted Shops Widget */}
                    <etrusted-widget data-etrusted-widget-id="wdg-673e15ea-7c32-4a80-8a04-a688541a7c6b"></etrusted-widget>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default CustomerReviewSection;

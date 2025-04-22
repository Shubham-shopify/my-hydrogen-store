import React, { useEffect, useRef, useState } from 'react';
import './CustomerReviewSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewWidgets from './ReviewWidgets';
import ('bootstrap/dist/js/bootstrap.bundle.min.js');


const CustomerReviewSection = () => {
  const carouselRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [reviews, setReviews] = useState([]);
  const [googleStats, setGoogleStats] = useState({ total: 0, rating: 0 });
  const [trustStats, setTrustStats] = useState({ total: 0, rating: 0 });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const carousel = carouselRef.current;
    const prev = prevRef.current;
    const next = nextRef.current;

    const handlePrevClick = () => {
      if (carousel) carousel.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const handleNextClick = () => {
      if (carousel) carousel.scrollBy({ left: 300, behavior: 'smooth' });
    };

    if (prev && next) {
      prev.addEventListener('click', handlePrevClick);
      next.addEventListener('click', handleNextClick);
    }

    // Fetch review data
    fetch('https://www.abelini.com/shopify/api/google_review.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error('Failed to fetch reviews');
        const raw = await res.text();
        const data = JSON.parse(raw);

        setGoogleStats({
          total: data.google_total_review.total_review || 0,
          rating: data.google_total_review.percentage || 0,
        });

        setTrustStats({
          total: data.trust_shops_total_review.total_review || 0,
          rating: data.trust_shops_total_review.percentage || 0,
        });

        setReviews(data.google_reviews || []);
      })
      .catch((err) => {
        console.error('Failed to fetch reviews:', err);
        setError('Unable to load reviews. Please try again later.');
      });

    return () => {
      if (prev && next) {
        prev.removeEventListener('click', handlePrevClick);
        next.removeEventListener('click', handleNextClick);
      }
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

      {error && <div className="alert alert-danger text-center">{error}</div>}

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
                <p className="title m-0 d-none d-lg-block">
                  Trustpilot {trustStats.rating} | {trustStats.total} reviews
                </p>
                <p className="title_heading_small m-0 d-lg-none d-block mb-2">
                  Trustpilot {trustStats.rating}
                  <br />
                  {trustStats.total} reviews
                </p>
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
                <p className="title m-0 d-none d-lg-block">
                  Trust Shop {trustStats.rating} | {trustStats.total} reviews
                </p>
                <p className="title_heading_small m-0 d-lg-none d-block mb-2">
                  Trust Shop {trustStats.rating}
                  <br />
                  {trustStats.total} reviews
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
                <p className="title m-0 d-none d-lg-block">
                  Google {googleStats.rating} | {googleStats.total} reviews
                </p>
                <p className="title_heading_small m-0 d-lg-none d-block mb-2">
                  Google {googleStats.rating}
                  <br />
                  {googleStats.total} reviews
                </p>
              </a>
            </li>
          </ul>

          <div className="tab-content w-100">
            <div className="tab-pane w-100" id="tabs-1" role="tabpanel">
              <div className="row m-0 review-owl">
                <div className="col-12 p-0">
                  <div className="review-slider px-2 px-lg-0">
                    <div id="google-review" className="s-carousel scrollbar d-flex overflow-x-auto" ref={carouselRef}>
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
                              <path d="M13.891 17.418a.697.697 0 0 1 0 .979a.68.68 0 0 1-.969 0l-7.83-7.908a.697.697 0 0 1 0-.979l7.83-7.908a.68.68 0 0 1 .969 0a.697.697 0 0 1 0 .979L6.75 10z" />
                            </svg>
                          </span>
                        </span>
                        <span className="nextIcon next-icon-review" ref={nextRef} data-next="5">
                          <span className="iconify" style={{ fontSize: 22 }}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              style={{ fontSize: '22px', transform: 'rotate(360deg)' }}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M13.25 10L6.109 2.58a.697.697 0 0 1 0-.979a.68.68 0 0 1 .969 0l7.83 7.908a.697.697 0 0 1 0 .979l-7.83 7.908a.68.68 0 0 1-.969 0a.697.697 0 0 1 0-.979z" />
                            </svg>
                          </span>
                        </span>
                      </div>

                      {reviews.length > 0 ? (
                        reviews.map((r, index) => (
                          <div key={r.review_id || index} className="s-item-new">
                            <div className="text-center position-relative overflow-hidden d-flex flex-column">
                              <p className="m-0 text-black">Google Review</p>
                              <div className="mt-3">
                                <p className="mediumstars d-inline">
                                  {[...Array(Number(r.rating || 0))].map((_, i) => (
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
                              <p className="text-black font-weight-bold my-3 title text-capitalize">{r.author || 'Anonymous'}</p>
                              <p className="text-white-space title text-capitalize">{r.text || 'No review text'}</p>
                              <p>A reviewer</p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-center">No reviews available</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-pane active w-100" id="tabs-2" role="tabpanel">
              <ReviewWidgets type="trustpilot" />
            </div>

            <div className="tab-pane w-100" id="tabs-3" role="tabpanel">
              <ReviewWidgets type="trustedshop" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewSection;
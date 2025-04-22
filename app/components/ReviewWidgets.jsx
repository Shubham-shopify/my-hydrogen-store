import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomerReviewSection.css';

const ReviewWidgets = ({ type }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Load Trustpilot script
    if (type === 'trustpilot' && !document.querySelector('script[src*="tp.widget.bootstrap.min.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    }

    // Load TrustedShop script
    if (type === 'trustedshop' && !document.querySelector('script[src*="widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://integrations.etrusted.com/applications/widget.js/v2';
      script.defer = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    }

  }, [type]);

  useEffect(() => {
    if (type === 'trustpilot' && scriptLoaded && window.Trustpilot) {
      const widget = document.querySelector('.trustpilot-widget');
      if (widget) {
        window.Trustpilot.loadFromElement(widget, true);
      }
    }
  }, [type, scriptLoaded]);

  return (
    <>
      {type === 'trustpilot' && (
        <div className="row m-0 review-owl">
          <div className="col-12 p-0 my-3">
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
      )}

      {type === 'trustedshop' && (
        <div className="row m-0 review-owl s-carousel scrollbar">
          <div className="col-12 p-0">
            <etrusted-widget data-etrusted-widget-id="wdg-673e15ea-7c32-4a80-8a04-a688541a7c6b" />
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewWidgets;

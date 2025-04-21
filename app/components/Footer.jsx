import {Suspense} from 'react';
import {Await, NavLink} from '@remix-run/react';
import {Link} from '@remix-run/react';
import styles from './Footer.module.css';


export function Footer({footer: footerPromise, header, publicStoreDomain}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        {/* Left Side */}
        <div className={styles.left}>
          <h2 className={styles.title}>Stay In Touch!</h2>
        </div>
        {/* Right Side */}
        <div className={styles.right}>
          <form className={styles.form}>
            <input type="text" placeholder="Your Name *" className={styles.input} />
            <input type="email" placeholder="Your email *" className={styles.input} />
            <button type="submit" className={styles.button}>Subscribe</button>
          </form>
          <p className={styles.privacyText}>
            By subscribing, some personal data such as your name and email address are collected and stored securely for the purposes of sending you order updates, special offers, and other promotional materials. For further information on how we manage your data, please see our{" "}
            <Link to="/privacy-policy" className={styles.link}>
              Privacy Notice
            </Link>
          </p>
        </div>
      </div>


      <div className={styles.columns}>
        <div>
          <h4>About Abelini</h4>
          <ul>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/customer-reviews">Customer Reviews</Link></li>
            <li><Link to="/ethical-jewellery">Ethical Jewellery</Link></li>
            <li><Link to="/fair-price">Fair Price Guarantee</Link></li>
            <li><Link to="/virtual-try">Virtual Try</Link></li>
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div>
          <h4>Customer Care</h4>
          <ul>
            <li><Link to="/free-delivery">Free Delivery</Link></li>
            <li><Link to="/returns">Return & Exchange</Link></li>
            <li><Link to="/warranty">Warranty & Care</Link></li>
            <li><Link to="/insurance">Jewellery Insurance</Link></li>
            <li><Link to="/bespoke">Bespoke</Link></li>
            <li><Link to="/sample-services">Sample Services</Link></li>
            <li><Link to="/finance">0% Interest Finance</Link></li>
            <li><Link to="/resizing">Free Resizing Service</Link></li>
          </ul>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/customer-story">Customer Story</Link></li>
            <li><Link to="/birthstone">Birthstone By Month</Link></li>
            <li><Link to="/gift-finder">Jewellery Gift Finder</Link></li>
            <li><Link to="/hallmarking">Hallmarking</Link></li>
            <li><Link to="/jewellery-care">Jewellery Care</Link></li>
            <li><Link to="/ring-size">Ring Size Chart</Link></li>
            <li><Link to="/bracelet-size">Bracelet Size Guide</Link></li>
          </ul>
        </div>
        <div>
          <h4>Guides</h4>
          <ul>
            <li><Link to="/engagement-guide">Engagement Ring Guide</Link></li>
            <li><Link to="/earrings-guide">Earrings Guide</Link></li>
            <li><Link to="/wedding-guide">Wedding Rings Guide</Link></li>
            <li><Link to="/diamond-ring-guide">Diamond Ring Guide</Link></li>
            <li><Link to="/diamond-guide">Diamond Guide</Link></li>
            <li><Link to="/metal-guide">Metal Guide</Link></li>
            <li><Link to="/bracelet-guide">Bracelet Guide</Link></li>
            <li><Link to="/necklace-guide">Necklace Size Guide</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact Us</h4>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><a href="tel:+4420380512700">+44 (0) 20380512700</a></li>
            <li><a href="mailto:sales@abelini.com">sales@abelini.com</a></li>
            <li><Link to="/live-chat">Live Chat</Link></li>
            <li><Link to="/showroom">Visit Our Showroom</Link></li>
            <li><Link to="/faq">FAQ’s</Link></li>
          </ul>
        </div>
      </div>

      <div className="bg-light border" style={{ padding: '10px' , borderTop: '1px solid !important', borderBottom: '1px solid!important', boderleft: '0px!important', borderRight: '0px!important', }}>
      <div className="container-fluid">
        <div className="row m-0 customer-support justify-content-center">
          <div className="col-12 p-0">
            <div className="row m-0 justify-content-center text-center"style={{ gap: '50px' }}>
              <div className="col-auto p-2">
                <span
                  role="button"
                  alt="visitshowroom-modal1"
                  data-href="popup/visit_showroom_popup.html"
                  data-toggle="modal"
                  data-target="#visit_showroom"
                  className="text-dark"
                  style={{ textDecoration: 'none' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    width="24"
                    height="24"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  <p className="title_heading_1 text-capitalize m-0">Showroom</p>
                </span>
              </div>
              <div className="col-auto p-2">
                <a
                  href=""
                  className="text-dark"
                  style={{ textDecoration: 'none' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    width="24"
                    height="24"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 12H7v-2h10v2zm0-3H7V9h10v2zm0-3H7V6h10v2z"
                    />
                  </svg>
                  <p className="title_heading_1 text-capitalize m-0">Live Chat</p>
                </a>
              </div>
              <div className="col-auto p-2">
                <a
                  href="tel:+44 (0) 20380512700"
                  className="global_phone text-dark"
                  style={{ textDecoration: 'none' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    width="24"
                    height="24"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z"
                    />
                  </svg>
                  <p className="title_heading_1 text-capitalize m-0">Call Us</p>
                </a>
              </div>
              <div className="col-auto p-2">
                <a
                  href="mailto:sales@abelini.comm"
                  className="global_email text-dark"
                  style={{ textDecoration: 'none' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    width="24"
                    height="24"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"
                    />
                  </svg>
                  <p className="title_heading_1 text-capitalize m-0">Email Us</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.socials}>
    <a href="#" style={{ color: 'black', textDecoration: 'none' }}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    focusable="false"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 32 32"
    className="iconify"
    data-icon="cib:facebook-f"
    style={{ transform: 'rotate(360deg)', width: '25px', height: '35px' }}
  >
    <path fill="currentColor" d="m23.446 18l.889-5.791h-5.557V8.451c0-1.584.776-3.129 3.265-3.129h2.526V.392S22.277.001 20.085.001c-4.576 0-7.567 2.774-7.567 7.795v4.414H7.431v5.791h5.087v14h6.26v-14z" />
  </svg>
</a>
<a href="#" style={{ color: 'black', textDecoration: 'none' }} aria-label="Pinterest">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    focusable="false"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 32 32"
    className="iconify"
    data-icon="cib:pinterest"
    style={{ transform: 'rotate(360deg)' , width: '25px', height: '35px'}}
  >
    <path
      fill="currentColor"
      d="M16.021 0C7.193 0 .037 7.156.037 15.984c0 6.771 4.214 12.552 10.161 14.88c-.141-1.266-.266-3.203.052-4.583c.292-1.25 1.875-7.943 1.875-7.943s-.479-.964-.479-2.375c0-2.219 1.292-3.88 2.891-3.88c1.365 0 2.026 1.021 2.026 2.25c0 1.37-.87 3.422-1.323 5.323c-.38 1.589.797 2.885 2.365 2.885c2.839 0 5.026-2.995 5.026-7.318c0-3.813-2.75-6.49-6.677-6.49c-4.547 0-7.214 3.417-7.214 6.932c0 1.375.526 2.854 1.188 3.651c.13.161.146.302.109.464c-.12.5-.391 1.599-.443 1.818c-.073.297-.229.359-.536.219c-1.99-.922-3.245-3.839-3.245-6.193c0-5.036 3.667-9.672 10.563-9.672c5.542 0 9.854 3.958 9.854 9.229c0 5.516-3.474 9.953-8.307 9.953c-1.62 0-3.141-.839-3.677-1.839l-1 3.797c-.359 1.391-1.339 3.135-2 4.193c1.5.458 3.078.714 4.734.714c8.813 0 15.979-7.151 15.979-15.984C31.959 7.187 24.792.036 15.98.036z"
    />
  </svg>
</a>
<a href="#" style={{ color: 'black', textDecoration: 'none' }}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    focusable="false"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 32 32"
    className="iconify"
    data-icon="cib:instagram"
    style={{ transform: 'rotate(360deg)' , width: '25px', height: '35px'}}
  >
    <path
      fill="currentColor"
      d="M16 0c-4.349 0-4.891.021-6.593.093c-1.709.084-2.865.349-3.885.745a7.85 7.85 0 0 0-2.833 1.849A7.8 7.8 0 0 0 .84 5.52C.444 6.54.179 7.696.095 9.405c-.077 1.703-.093 2.244-.093 6.593s.021 4.891.093 6.593c.084 1.704.349 2.865.745 3.885a7.85 7.85 0 0 0 1.849 2.833a7.8 7.8 0 0 0 2.833 1.849c1.02.391 2.181.661 3.885.745c1.703.077 2.244.093 6.593.093s4.891-.021 6.593-.093c1.704-.084 2.865-.355 3.885-.745a7.85 7.85 0 0 0 2.833-1.849a7.7 7.7 0 0 0 1.849-2.833c.391-1.02.661-2.181.745-3.885c.077-1.703.093-2.244.093-6.593s-.021-4.891-.093-6.593c-.084-1.704-.355-2.871-.745-3.885a7.85 7.85 0 0 0-1.849-2.833A7.7 7.7 0 0 0 26.478.838c-1.02-.396-2.181-.661-3.885-.745C20.89.016 20.349 0 16 0m0 2.88c4.271 0 4.781.021 6.469.093c1.557.073 2.405.333 2.968.553a5 5 0 0 1 1.844 1.197a4.9 4.9 0 0 1 1.192 1.839c.22.563.48 1.411.553 2.968c.072 1.688.093 2.199.093 6.469s-.021 4.781-.099 6.469c-.084 1.557-.344 2.405-.563 2.968c-.303.751-.641 1.276-1.199 1.844a5.05 5.05 0 0 1-1.844 1.192c-.556.22-1.416.48-2.979.553c-1.697.072-2.197.093-6.479.093s-4.781-.021-6.48-.099c-1.557-.084-2.416-.344-2.979-.563c-.76-.303-1.281-.641-1.839-1.199c-.563-.563-.921-1.099-1.197-1.844c-.224-.556-.48-1.416-.563-2.979c-.057-1.677-.084-2.197-.084-6.459c0-4.26.027-4.781.084-6.479c.083-1.563.339-2.421.563-2.979c.276-.761.635-1.281 1.197-1.844c.557-.557 1.079-.917 1.839-1.199c.563-.219 1.401-.479 2.964-.557c1.697-.061 2.197-.083 6.473-.083zm0 4.907A8.21 8.21 0 0 0 7.787 16A8.21 8.21 0 0 0 16 24.213A8.21 8.21 0 0 0 24.213 16A8.21 8.21 0 0 0 16 7.787m0 13.546c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333s5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333M26.464 7.459a1.923 1.923 0 0 1-1.923 1.921a1.919 1.919 0 1 1 0-3.838c1.057 0 1.923.86 1.923 1.917"
    />
  </svg>
</a>
<a href="#" style={{ color: 'black', textDecoration: 'none' }} aria-label="YouTube">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    focusable="false"
    width="0.86em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 1536 1792"
    className="iconify"
    data-icon="fa:youtube"
    style={{ transform: 'rotate(360deg)', width: '25px', height: '35px' }}
  >
    <path
      fill="currentColor"
      d="M971 1244v211q0 67-39 67q-23 0-45-22v-301q22-22 45-22q39 0 39 67m338 1v46h-90v-46q0-68 45-68t45 68m-966-218h107v-94H138v94h105v569h100zm288 569h89v-494h-89v378q-30 42-57 42q-18 0-21-21q-1-3-1-35v-364h-89v391q0 49 8 73q12 37 58 37q48 0 102-61zm429-148v-197q0-73-9-99q-17-56-71-56q-50 0-93 54V933h-89v663h89v-48q45 55 93 55q54 0 71-55q9-27 9-100m338-10v-13h-91q0 51-2 61q-7 36-40 36q-46 0-46-69v-87h179v-103q0-79-27-116q-39-51-106-51q-68 0-107 51q-28 37-28 116v173q0 79 29 116q39 51 108 51q72 0 108-53q18-27 21-54q2-9 2-58M790 525V315q0-69-43-69t-43 69v210q0 70 43 70t43-70m719 751q0 234-26 350q-14 59-58 99t-102 46q-184 21-555 21t-555-21q-58-6-102.5-46T53 1626q-26-112-26-350q0-234 26-350q14-59 58-99t103-47q183-20 554-20t555 20q58 7 102.5 47t57.5 99q26 112 26 350M511 0h102L492 399v271H392V399q-14-74-61-212Q294 84 266 0h106l71 263zm370 333v175q0 81-28 118q-38 51-106 51q-67 0-105-51q-28-38-28-118V333q0-80 28-117q38-51 105-51q68 0 106 51q28 37 28 117m335-162v499h-91v-55q-53 62-103 62q-46 0-59-37q-8-24-8-75V171h91v367q0 33 1 35q3 22 21 22q27 0 57-43V171z"
    />
  </svg>
</a>
        </div>
        <div className={styles.bottomLinks}>
        <Link to="/cookie-policy">Cookie Policy</Link>
        <Link to="/privacy-policy">Privacy Notice</Link>
        <Link to="/company-details">Company Details</Link>
        <Link to="/sitemap">Sitemap</Link>
      </div>
      <div className={styles.copyRight}>
        <p>
          Copyright 2024, ABELINI Ltd. All rights reserved.<br />
          Reg. office: 154 Abercorn Crescent, Harrow, HA20PU. Registered in London.
        </p>
      </div>
    </footer>
  );
}



import { Suspense } from 'react';
import { Await, NavLink, useAsyncValue } from '@remix-run/react';
import { useAnalytics, useOptimisticCart } from '@shopify/hydrogen';
import { useAside } from '~/components/Aside';
import { useEffect, useState } from 'react';
import '~/components/AnnouncementBar.css';

/**
 * Announcement Bar Component that displays a countdown timer and trust information
 */
function AnnouncementBar() {
  const formatTimeLeft = (endTime) => {
    const now = new Date();
    const diff = endTime.getTime() - now.getTime();
    if (diff <= 0) return 'Sale Ended';

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${days}D | ${hours}H | ${minutes}M | ${seconds}S`;
  };

  const [saleEndTime] = useState(() => {
    const now = new Date().getTime();
    const futureTime =
      now +
      9 * 24 * 60 * 60 * 1000 + // 9 days
      12 * 60 * 60 * 1000 +     // 12 hours
      33 * 60 * 1000 +          // 33 minutes
      56 * 1000;                // 56 seconds
    return new Date(futureTime);
  });

  const [trustpilotRating] = useState(4.9);
  const [timeLeft, setTimeLeft] = useState(() => formatTimeLeft(
    new Date(
      new Date().getTime() +
        9 * 24 * 60 * 60 * 1000 +
        12 * 60 * 60 * 1000 +
        33 * 60 * 1000 +
        56 * 1000
    )
  ));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(formatTimeLeft(saleEndTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [saleEndTime]);

  return (
    <div className="announcement-bar">
      <div className="top-bar">
        Up To 15% Off Sale Ends In{' '}
        <span className="countdown-timer">{timeLeft}</span>
      </div>
      <div className="bottom-bar">
        <span className="guarantee">100% Money Back Guarantee</span>
        <span className="trustpilot">
          Excellent {trustpilotRating} Out of 5 <span className="star">★</span> Trustpilot
        </span>
        <span className="discount">Up To 70% Off High Street</span>
      </div>
    </div>
  );
}

export default AnnouncementBar;

/**
 * @param {HeaderProps} props
 */
export function Header({ header, isLoggedIn, cart, publicStoreDomain }) {
  const { shop, menu } = header;
  const spacing = '5px'; // Example spacing value, adjust as needed

  return (
    <>
      <AnnouncementBar />
      <header className="header">
        <div className="header-logo">
          <div 
            className="header-logo-left" 
            style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '5px 10px', fontSize: '14px', color: '#333' }}
          >
            <a 
              href="tel:+442038051270" 
              style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#333' }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                xmlns:xlink="http://www.w3.org/1999/xlink" 
                aria-hidden="true" 
                focusable="false" 
                width="1em" 
                height="1em" 
                style={{ fontSize: '20px', lineHeight: '20px', height: '20px', width: '20px', transform: 'rotate(360deg)', marginRight: spacing }} 
                preserveAspectRatio="xMidYMid meet" 
                viewBox="0 0 512 512" 
                className="iconify mr-1" 
                data-icon="ion:call-outline" 
                data-inline="false"
              >
                <path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M451 374c-15.88-16-54.34-39.35-73-48.76c-24.3-12.24-26.3-13.24-45.4.95c-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39s-47.34-61.62-50.53-76.48s5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3c-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160 160 0 0 0 83 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64s54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159 159 0 0 0 13.8-25.8C465 391.17 468 391.17 451 374Z"></path>
              </svg>
              +44 (0) 2038051270 <span style={{ padding: '0 5px', marginLeft: spacing }}>24/7</span>
            </a>
            <a 
              href="https://www.abelini.com/book-appointment" 
              style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#333' }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                xmlns:xlink="http://www.w3.org/1999/xlink" 
                aria-hidden="true" 
                focusable="false" 
                width="1em" 
                height="1em" 
                style={{ fontSize: '20px', lineHeight: '20px', height: '20px', width: '20px', transform: 'rotate(360deg)', marginRight: spacing }} 
                preserveAspectRatio="xMidYMid meet" 
                viewBox="0 0 512 512" 
                className="iconify mr-1" 
                data-icon="cil:location-pin" 
                data-inline="false"
              >
                <path fill="currentColor" d="M253.924 127.592a64 64 0 1 0 64 64a64.073 64.073 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.037 32.037 0 0 1-32 32"></path>
                <path fill="currentColor" d="M376.906 68.515A173.922 173.922 0 0 0 108.2 286.426l120.907 185.613a29.62 29.62 0 0 0 49.635 0l120.911-185.613a173.92 173.92 0 0 0-22.747-217.911m-4.065 200.444l-118.916 182.55l-118.917-182.55c-36.4-55.879-28.593-130.659 18.563-177.817a141.92 141.92 0 0 1 200.708 0c47.156 47.158 54.962 121.938 18.562 177.817"></path>
              </svg>
              Visit Us
            </a>
          </div>
          <div 
            className="brand-logo" 
            style={{ paddingRight: '125px', paddingBottom: '5px', paddingTop: '10px' }}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0933/1789/0388/files/logo-dark.svg?v=1739877824"
              alt="Brand Logo"
              height="26"              
              />
          </div>
          <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
        </div>
        <div className="header-menu">
          <HeaderMenu menu={menu} viewport="desktop" />
        </div>
      </header>
    </>
  );
}

/**
 * @param {{
 *   menu: HeaderProps['header']['menu'];
 *   primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
 *   viewport: Viewport;
 *   publicStoreDomain: HeaderProps['publicStoreDomain'];
 * }}
 */
export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
}) {
  const className = `header-menu-${viewport}`;
  const { close } = useAside();

  return (
    <nav className={className} role="navigation">
      {viewport === 'mobile' && (
        <NavLink
          end
          onClick={close}
          prefetch="intent"
          style={activeLinkStyle}
          to="/"
        >
          Home
        </NavLink>
      )}
      {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
        if (!item.url) return null;

        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        return (
          <NavLink
            className="header-menu-item"
            end
            key={item.id}
            onClick={close}
            prefetch="intent"
            style={activeLinkStyle}
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

/**
 * @param {Pick<HeaderProps, 'isLoggedIn' | 'cart'>}
 */
function HeaderCtas({ isLoggedIn, cart }) {
  return (
    <nav className="header-ctas" role="navigation">
      <HeaderMenuMobileToggle />
      <NavLink prefetch="intent" to="/account" style={activeLinkStyle}>
        <Suspense fallback="Sign in">
          <Await resolve={isLoggedIn} errorElement="Sign in">
            {(isLoggedIn) => (isLoggedIn ? 'Account' : 'Sign in')}
          </Await>
        </Suspense>
      </NavLink>
      <SearchToggle />
      <CartToggle cart={cart} />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  const { open } = useAside();
  return (
    <button
      className="header-menu-mobile-toggle reset"
      onClick={() => open('mobile')}
    >
      <h3>☰</h3>
    </button>
  );
}

function SearchToggle() {
  const { open } = useAside();
  return (
    <button className="reset" onClick={() => open('search')}>
      Search
    </button>
  );
}

/**
 * @param {{count: number | null}}
 */
function CartBadge({ count }) {
  const { open } = useAside();
  const { publish, shop, cart, prevCart } = useAnalytics();

  return (
    <a
      href="/cart"
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        });
      }}
    >
      Cart {count === null ? <span> </span> : count}
    </a>
  );
}

/**
 * @param {Pick<HeaderProps, 'cart'>}
 */
function CartToggle({ cart }) {
  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}

function CartBanner() {
  const originalCart = useAsyncValue();
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} />;
}

/**
 * @param {{
 *   isActive: boolean;
 *   isPending: boolean;
 * }}
 */
function activeLinkStyle({ isActive, isPending }) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'black',
  };
}

/** @typedef {'desktop' | 'mobile'} Viewport */
/**
 * @typedef {Object} HeaderProps
 * @property {HeaderQuery} header
 * @property {Promise<CartApiQueryFragment|null>} cart
 * @property {Promise<boolean>} isLoggedIn
 * @property {string} publicStoreDomain
 */

/** @typedef {import('@shopify/hydrogen').CartViewPayload} CartViewPayload */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
/** @typedef {import('storefrontapi.generated').CartApiQueryFragment} CartApiQueryFragment */
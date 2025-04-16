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
 * @param {HeaderProps}
 */
export function Header({ header, isLoggedIn, cart, publicStoreDomain }) {
  const { shop, menu } = header;
  return (
    <>
      <AnnouncementBar />
      <header className="header">
  <div className="header-logo">
    <div className="header-logo-mobile">
      <img    ></img></div>
  <div className="brand-logo">
    <img
      src="https://cdn.shopify.com/s/files/1/0933/1789/0388/files/logo-dark.svg?v=1739877824"
      alt="Brand Logo"
      height="40"
    />
  </div>
  <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
</div>
<div className="header-menu">
    <HeaderMenu
      menu={menu}
      viewport="desktop"
    />
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
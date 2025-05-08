import { redirect } from '@shopify/remix-oxygen';
import { useLoaderData, Link } from '@remix-run/react';
import {
  getPaginationVariables,
  Image,
  Money,
  Analytics,
} from '@shopify/hydrogen';
import { useVariantUrl } from '~/lib/variants';
import { PaginatedResourceSection } from '~/components/PaginatedResourceSection';
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const meta = ({ data }) => {
  return [{ title: `Hydrogen | ${data?.collection.title ?? ''} Collection` }];
};

export async function loader(args) {
  const criticalData = await loadCriticalData(args);
  return { ...criticalData };
}

async function loadCriticalData({ context, params, request }) {
  const { handle } = params;
  const { storefront } = context;

  if (!handle) {
    throw redirect('/collections');
  }

  const paginationVariables = getPaginationVariables(request, { pageBy: 8 });
  const variables = { handle, ...paginationVariables };

  const { collection } = await storefront.query(COLLECTION_QUERY, { variables });

  if (!collection) {
    throw new Response(`Collection ${handle} not found`, { status: 404 });
  }

  return { collection };
}

export default function Collection() {
  const { collection } = useLoaderData();
  const [isExpanded, setIsExpanded] = useState(false);
  const [apiDescription, setApiDescription] = useState('');
  const [filtersData, setFiltersData] = useState([]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const getCdnImageUrl = (originalPath) => {
    if (!originalPath) return '';
    const fileName = originalPath.split('/').pop(); // get "solitaire-icon.jpg?v=202501287"
    return `https://cdn.shopify.com/s/files/1/0933/1789/0388/files/${fileName}`;
  };
  

  // Fetching description and filters
  useEffect(() => {
    fetch('https://www.abelini.com/shopify/api/category_description.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('API Response:', data);
  
        const product = data.product || {};
  
        setApiDescription(product.description || '');
  
        const filterGroups = product.filter?.filter_groups || [];
  
        // Fetch the dynamic filter_group_id from the API response (e.g., if it's part of the response)
        const filterGroupId = data.filter_group_id || "5";  // defaulting to "5" if not provided
  
        // Filter out the group based on the dynamic filter_group_id
        const filteredGroups = filterGroups.filter(group => group.filter_group_id === filterGroupId);
  
        // Create filteredData based on the group name and options
        const filteredData = filteredGroups.map((group) => {
          const optionsObject = group.filter || {};
  
          // Only exclude Sale if its display is not "0"
          const options = Object.values(optionsObject)
            .filter((option) => {
              if (option.name === 'Sale') {
                return option.display === "0";
              }
              return true;
            })
            .map((option) => ({
              title: option.short_name,
              image: getCdnImageUrl(option.filter_image),
            }));
  
          return {
            title: group.name,
            options,
          };
        });
  
        console.log('Filtered Data:', filteredData);
        setFiltersData(filteredData);
      })
      .catch((err) => console.error('Error:', err));
  }, []);
  
  
  
  
  
  
  const getFirstTwoSentences = (text) => {
    if (!text) return '';
    const sentences = text.split('.').filter((s) => s.trim());
    return sentences.slice(0, 2).join('. ') + (sentences.length > 1 ? '.' : '');
  };

  const truncatedDescription = getFirstTwoSentences(apiDescription || collection.description);
  const displayDescription = isExpanded ? (apiDescription || collection.description) : truncatedDescription;

  return (
    <div className="collection">
      <nav className="breadcrumb">
        <Link to="/" className="breadcrumb-home">Home</Link>
        <span className="breadcrumb-separator"> / </span>
        <span className="breadcrumb-current">{collection.title}</span>
      </nav>

      <div className="collection-header">
        <h1>{collection.title}</h1>
        <p className="collection-description">
          {displayDescription}
          {!isExpanded && truncatedDescription !== (apiDescription || collection.description) && (
            <a href="#" onClick={(e) => { e.preventDefault(); setIsExpanded(true); }} style={{ marginLeft: '5px' }}>
              Read MORE
            </a>
          )}
          {isExpanded && truncatedDescription !== (apiDescription || collection.description) && (
            <a href="#" onClick={(e) => { e.preventDefault(); setIsExpanded(false); }} style={{ marginLeft: '5px' }}>
              Read LESS
            </a>
          )}
        </p>
      </div>

    {/* Swiper Carousel for Filters */}
    <section className="py-2 border-bottom-F2F2F2">
  <div className="container-fluid">
    <div className="row">
      <div className="col-12 position-relative">
        {filtersData.length > 0 && filtersData.some(group => group.options?.length > 0) ? (
          <>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={7}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              breakpoints={{
                0: { slidesPerView: 2 },
                600: { slidesPerView: 4 },
                1000: { slidesPerView: 7 },
              }}
              className="filter-swiper"
            >
              {filtersData.map((group) =>
                group.options.map((option) => (
                  <SwiperSlide key={`filter-${option.title}`}>
                    <Link
                      to={`/collections/engagement-rings?filter=${option.title}`}
                      className={`filter-div m-2 filter-div-hover`}
                      data-name={option.title}
                    >
                      <img
                        src={option.image} // Only image source for now
                        alt={option.title} // Only title for now
                        className="lazy-load"
                        loading="lazy"
                        width="150"
                        height="150"
                      />
                      <span className="mt-1 d-block filter-label">{option.title}</span>
                    </Link>
                  </SwiperSlide>
                ))
              )}
            </Swiper>
            <button
                    type="button"
                    aria-label="Previous Slide"
                    className="swiper-button-prev custom-nav-button"
                    ref={prevRef}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className="iconify"
                      style={{ transform: 'rotate(180deg)' }}
                    >
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.25 10L6.109 2.58a.697.697 0 0 1 0-.979a.68.68 0 0 1 .969 0l7.83 7.908a.697.697 0 0 1 0 .979l-7.83 7.908a.68.68 0 0 1-.969 0a.697.697 0 0 1 0-.979z"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Next Slide"
                    className="swiper-button-next custom-nav-button"
                    ref={nextRef}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className="iconify"
                    >
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.25 10L6.109 2.58a.697.697 0 0 1 0-.979a.68.68 0 0 1 .969 0l7.83 7.908a.697.697 0 0 1 0 .979l-7.83 7.908a.68.68 0 0 1-.969 0a.697.697 0 0 1 0-.979z"
                      />
                    </svg>
                  </button>
          </>
        ) : (
          <p>No filters availableaas</p>
        )}
      </div>
    </div>
  </div>
</section>

      {/* Product Grid */}
      <PaginatedResourceSection
        connection={collection.products}
        resourcesClassName="products-grid"
      >
        {({ node: product, index }) => (
          <ProductItem
            key={product.id}
            product={product}
            loading={index < 8 ? 'eager' : undefined}
          />
        )}
      </PaginatedResourceSection>

      <Analytics.CollectionView
        data={{
          collection: {
            id: collection.id,
            handle: collection.handle,
          },
        }}
      />
    </div>
  );
}

function ProductItem({ product, loading }) {
  const variantUrl = useVariantUrl(product.handle);
  return (
    <Link
      className="product-item"
      key={product.id}
      prefetch="intent"
      to={variantUrl}
    >
      {product.featuredImage && (
        <Image
          alt={product.featuredImage.altText || product.title}
          aspectRatio="1/1"
          data={product.featuredImage}
          loading={loading}
          sizes="(min-width: 45em) 400px, 100vw"
        />
      )}
      <h4>{product.title}</h4>
      <small>
        <Money data={product.priceRange.minVariantPrice} />
      </small>
    </Link>
  );
}

const PRODUCT_ITEM_FRAGMENT = `#graphql
  fragment MoneyProductItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment ProductItem on Product {
    id
    handle
    title
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyProductItem
      }
      maxVariantPrice {
        ...MoneyProductItem
      }
    }
  }
`;

const COLLECTION_QUERY = `#graphql
  ${PRODUCT_ITEM_FRAGMENT}
  query Collection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      products(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ProductItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          endCursor
          startCursor
        }
      }
    }
  }
`;

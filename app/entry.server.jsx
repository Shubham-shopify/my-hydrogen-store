import {RemixServer} from '@remix-run/react';
import {isbot} from 'isbot';
import {renderToReadableStream} from 'react-dom/server';
import {createContentSecurityPolicy} from '@shopify/hydrogen';

export default async function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext,
  context,
) {
  const nonceCSP = createContentSecurityPolicy({
    shop: {
      checkoutDomain: context.env.PUBLIC_CHECKOUT_DOMAIN,
      storeDomain: context.env.PUBLIC_STORE_DOMAIN,
    },
  });

  const {nonce, header, NonceProvider} = nonceCSP;

  // Now add directives using `header` + dynamic ones
  const cspDirectives = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' https://widget.trustpilot.com https://integrations.etrusted.com https://cdn.shopify.com https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js  'unsafe-inline';
    frame-src 'self' https://widget.trustpilot.com https://widgets.trustedshops.com;
    connect-src 'self' https://widget.trustpilot.com https://integrations.etrusted.com https://monorail-edge.shopifysvc.com https://www.abelini.com;
    img-src * data:;
    style-src 'self' 'unsafe-inline' https://integrations.etrusted.com https://cdn.shopify.com https://your-cdn-url.com;
`.replace(/\n/g, '').trim();
  
  responseHeaders.set('Content-Security-Policy', cspDirectives);

  const body = await renderToReadableStream(
    <NonceProvider>
      <RemixServer context={remixContext} url={request.url} nonce={nonce} />
    </NonceProvider>,
    {
      nonce,
      signal: request.signal,
      onError(error) {
        console.error(error);
        responseStatusCode = 500;
      },
    },
  );

  if (isbot(request.headers.get('user-agent'))) {
    await body.allReady;
  }

  responseHeaders.set('Content-Type', 'text/html');

  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}

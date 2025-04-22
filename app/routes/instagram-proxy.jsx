export async function loader({ context }) {
  const apiUrl = "https://instafeed.nfcube.com/feed/v6?api_key=0195f637-b706-7cf3-8979-2127d8711fc7&limit=20&account=abelinihq.myshopify.com";

  const cacheKey = 'instagram-feed';
  const cache = context?.cache;

  try {
    const response = await fetch(apiUrl);
    const result = await response.json();

    if (!response.ok || result.error) {
      throw new Error(result?.message || 'API error');
    }

    // ✅ Save to Oxygen cache (5 minutes)
    if (cache) {
      await cache.put(cacheKey, result, { ttl: 300 }); // 300 seconds = 5 minutes
    }

    return new Response(JSON.stringify(result), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    console.warn('Instagram feed error:', err.message);

    // 🔁 Try fallback: fetch from cache
    if (cache) {
      const cachedData = await cache.get(cacheKey);
      if (cachedData) {
        console.log('Using cached Instagram feed');
        return new Response(JSON.stringify(cachedData), {
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // ❌ No fallback
    return new Response(JSON.stringify({
      error: 'Fetch failed',
      message: err.message,
      fallback: 'No cached data'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

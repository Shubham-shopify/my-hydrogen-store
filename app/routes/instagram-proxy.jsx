export async function loader() {
  const apiUrl = "https://instafeed.nfcube.com/feed/v6?api_key=0195f637-b706-7cf3-8979-2127d8711fc7&limit=20&account=abelinihq.myshopify.com";

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    if (!response.ok) {
      return new Response(JSON.stringify({
        error: "HTTP error",
        code: response.status,
        previous_response: result || null
      }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify(result), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({
      error: "Curl error",
      message: err.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

const UNSPLASH_ACCESS_KEY = "EzQu_cTxKEVrLPET6MZzEa1JfOBgza6nBjiVB8J1rqs";

if (!UNSPLASH_ACCESS_KEY) {
  throw new Error(
    "NEXT_PUBLIC_UNSPLASH_ACCESS_KEY is not defined in the environment variables"
  );
}

export async function getPhotos(query = "african") {
  try {
    const endpoint = query
      ? `https://api.unsplash.com/search/photos?query=${query}&per_page=8`
      : "https://api.unsplash.com/photos/random?count=8";

    const res = await fetch(`${endpoint}&client_id=${UNSPLASH_ACCESS_KEY}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const data = await res.json();
    return query ? data.results : data;
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
}

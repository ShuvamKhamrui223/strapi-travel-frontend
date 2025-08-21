// a wrapper function to fetch data from strapi with caching enabled
export async function fetchFromStrapi(
  endpoint = "",
  revalidateDuration = 24 * 60 * 60 * 1000
) {
  try {
    if (!process.env.NEXT_PUBLIC_STRAPI_BASE_URL) {
      throw new Error("environment variable not found");
    }

    if (!endpoint) {
      throw new Error("please provide an endpoint");
    }

    const res = await fetch(
      process.env.NEXT_PUBLIC_STRAPI_BASE_URL + endpoint,
      { next: revalidateDuration }
    );

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const result = await res.json();

    if (result) {
      return result;
    }
  } catch (error) {
    return error;
  } finally {
    console.log("exit from fetch");
  }
}

// function to get a valid image strapi url
export function getStrapiImage(imageURL) {
  if (imageURL == null || undefined) {
    throw new Error("image url not provided");
  }
  const baseurl = process.env.NEXT_PUBLIC_STRAPI_BASE_URL;
  if (!baseurl) {
    throw new Error("environment variable not found");
  }

  const finalImageUrl = baseurl + imageURL;
  return finalImageUrl;
}

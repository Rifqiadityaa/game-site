export default function fetcher(url, options) {
  return fetch(url, {
    ...options,
    headers: {
      ...options?.headers,
      Authorization: "Bearer access_token",
    },
  });
}

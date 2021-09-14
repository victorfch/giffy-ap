export default function getSingleGif ({ id }) {
  const apiUrl = `${import.meta.env.VITE_API_URL}/gifs/${id}?api_key=${import.meta.env.VITE_API_KEY}`

  return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const { data } = response
      const { images, id, title } = data
      const { url } = images.downsized_medium

      return { title, url, id }
    })
}

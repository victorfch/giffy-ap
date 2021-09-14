export default function getTrendingGifs () {
  const apiUrl = `${import.meta.env.VITE_API_URL}/trending/searches?api_key=${import.meta.env.VITE_API_KEY}`

  return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const { data } = response
      return data
    })
}

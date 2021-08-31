const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_API_KEY}&q=marvel&limit=10&offset=0&rating=g&lang=en`

export default function getGifs() {
    return fetch(API_URL)
      .then(res => res.json())
      .then(response => {
        const {data} = response
        const gifs = data.map(image => {
            const {images, id, title} = image
            const {url} = images.downsized_medium
            return {title, url, id}
        })
        return gifs
    })
}
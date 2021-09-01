export default function getGifs({keyword = 'rick'} = {}) {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
    
    return fetch(apiUrl)
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
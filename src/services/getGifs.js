export default function getGifs({
	keyword = 'rick',
	page = 0
} = {}) {
	const apiUrl = `${import.meta.env.VITE_API_URL}/gifs/search?api_key=${import.meta.env.VITE_API_KEY}&q=${keyword}&limit=10&offset=${page * 10}&rating=g&lang=en`
	
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
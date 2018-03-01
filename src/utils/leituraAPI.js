import axios from 'axios'

const endPoint = "http://localhost:3001"
const headers = { 'Authorization': 'auth-key' }

// Get all categories of the application
export const getCategories = () => new Promise((resolve, reject) => {
	axios.get("http://localhost:3001/categories", { headers })
		.then(response => response.data)
		.then(data => {
			resolve(data)
		})
})
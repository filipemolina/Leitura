import axios from 'axios'

const endPoint = "http://localhost:3001"
const headers = { 'Authorization': 'auth-key' }

// Get all categories of the application
export const getCategories = () => new Promise((resolve, reject) => {
	axios.get(endPoint + "/categories", { headers })
		.then(response => response.data)
		.then(data => {
			resolve(data)
		})
})

// Get all the posts in the database
export const getPosts = () => new Promise((resolve, reject) => {
	axios.get(endPoint + "/posts", { headers })
		.then(response => response.data)
		.then(data => resolve(data))
})
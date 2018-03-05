import axios from 'axios'
import uuidv1 from 'uuid/v1'

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

// Get all the comments from a given post
export const getPostComments = (postId) => new Promise((resolve, reject) => {
	axios.get(`${endPoint}/posts/${postId}/comments`, { headers })
		.then(response => response.data)
		.then(data => {
			resolve(data)
		})
})

// Add a new post
export const addPost = (title, body, author, category) => new Promise((resolve, reject) => {
	axios({
		method: 'post',
		url: `${endPoint}/posts`,
		headers: headers,
		data: {
			id: uuidv1(),
			timestamp: Date.now(),
			title,
			body,
			author,
			category
		}
	}).then(response => response.data)
		.then(data => resolve(data))
})

// Add a comment to a post
export const addComment = (postId, body, author) => new Promise((resolve, reject) => {
	axios({
		method: 'post',
		url: `${endPoint}/comments`,
		headers: headers,
		data: {
			id: uuidv1(),
			timestamp: Date.now(),
			body,
			author,
			parentId: postId,
		}
	}).then(response => response.data)
		.then(data => resolve(data))
})
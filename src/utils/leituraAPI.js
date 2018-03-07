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

//Deletes a post and all related comments
export const deletePost = (postId) => new Promise((resolve, reject) => {
	axios({
		method: 'delete',
		url: `${endPoint}/posts/${postId}`,
		headers: headers,
	}).then(response => response.data)
		.then(data => resolve(data))
})

// Deletes a comment
export const deleteComment = commentId => new Promise((resolve, reject) => {
	axios({
		method: 'delete',
		url: `${endPoint}/comments/${commentId}`,
		headers: headers,
	}).then(response => response.data)
		.then(data => resolve(data))
})

// Add a vote to a post
export const addVote = postId => new Promise((resolve, reject) => {
	axios({
		method: 'post',
		url: `${endPoint}/posts/${postId}`,
		headers: headers,
		data: {
			option: 'upVote'
		}
	}).then(response => response.data)
		.then(data => resolve(data))
})

// Remove a vote from a post
export const removeVote = postId => new Promise((resolve, reject) => {
	axios({
		method: 'post',
		url: `${endPoint}/posts/${postId}`,
		headers: headers,
		data: {
			option: 'downVote'
		}
	}).then(response => response.data)
		.then(data => resolve(data))
})

// Add a vote to a post
export const addVoteToComment = commentId => new Promise((resolve, reject) => {
	axios({
		method: 'post',
		url: `${endPoint}/comments/${commentId}`,
		headers: headers,
		data: {
			option: 'upVote'
		}
	}).then(response => response.data)
		.then(data => resolve(data))
})

// Remove a vote from a post
export const removeVoteFromComment = commentId => new Promise((resolve, reject) => {
	axios({
		method: 'post',
		url: `${endPoint}/comments/${commentId}`,
		headers: headers,
		data: {
			option: 'downVote'
		}
	}).then(response => response.data)
		.then(data => resolve(data))
})

// Edit the content of a post
export const editPost = (postId, title, body) => new Promise((resolve, reject) => {
	axios({
		url: `${endPoint}/posts/${postId}`,
		method: 'put',
		headers: headers,
		data: {
			title,
			body
		}
	}).then(response => response.data)
		.then(data => resolve(data))
})

// Edit the content of a comment
export const editComment = (commentId, body) => new Promise((resolve, reject) => {
	axios({
		url:`${endPoint}/comments/${commentId}`,
		method: 'put',
		headers: headers,
		data: {
			timestamp: Date.now(),
			body
		}
	}).then(response => response.data)
		.then(data => resolve(data))
})
export const capitalize = string => (string.charAt(0).toUpperCase() + string.slice(1))

export const objToArray = obj => {
	const keys = Object.keys(obj)
	console.log("keys", keys)
	let array = []
	for(let i=0; i < keys.length; i++){
		if(obj.hasOwnProperty(keys[i]))
			array.push(obj[keys[i]])
	}
	return array
}
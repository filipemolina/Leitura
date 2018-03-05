export const capitalize = string => (string.charAt(0).toUpperCase() + string.slice(1))

export const toNormalCase = string => (string
	.replace(/([A-Z])/g, ' $1')
	.replace(/^./, function(str){ return str.toUpperCase(); })
)
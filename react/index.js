// import logger from './logger/logger.js'
// // import {
// // 	TYPE_LOG,
// // 	TYPE_WARN,
// // 	TYPE_ERROR
// // } from './constants.js'

// // logger('abc', TYPE_ERROR)

// import * as constants from './constants.js'
// console.log(constants)

// var name = 'Javascript'
// var price = 1000

// var course = {
// 	name,
// 	price: price,
// 	getName() {
// 		return name
// 	}
// }

// console.log(course.getName())

// var fieldName = 'name'
// var fieldPrice = 'price'

// var course = {
// 	[fieldName]: 'Javascript',
// 	[fieldPrice]: '1000'
// }

// console.log(course)

// const logger = ({name, price, ...param}) => {
// 	console.log(name, price, param)
// }

// logger({
// 	name: 'Javascript',
// 	price: 1000,
// 	description: 'Description content'
// })

// const arr1 = [1, 2, 3]
// const arr2 = [4, 5]
// const arr3 = [...arr1, ...arr2]
// console.log(arr3)

// const obj = {
// 	api: 1,
// 	a: 2,
// 	api: 'abc'
// }

// console.log(obj)

// var array = [1, 2, 3]
// var [a, ...b] = array
// console.log(a, b)

var course = {
	name: 'Javascript',
	price: 1000,
	image: 'image-obj',
}

var {description = 'default description'} = course
console.log(description)
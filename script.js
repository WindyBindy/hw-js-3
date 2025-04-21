const textone = 'hello'
const texttwo = 'world'
if (textone === 'hello' && texttwo === 'world') {
	console.log('Обидва поля заповнені')
} else if (textone === '' && texttwo === 'world') {
	console.log('Не всі поля заповнені')
} else if (textone === '' && texttwo === '') {
	console.log('Не всі поля заповнені')
} else if (textone === 'hello' && texttwo === '') {
	console.log('Не всі поля заповнені')
} else {
	console.log('Не всі поля заповнені')
}

const firstnum = 5
const secondnum = 10
const result = firstnum + secondnum
if (result > 10) {
	console.log('Сума більша за 10')
} else if (result < 10) {
	console.log('Сума менша або дорівнює 10')
} else {
	console.log('Сума менша або дорівнює 10')
}

const text = 'JavaScript'
if (text === 'JavaScript') {
	console.log('Текст містить слово JavaScript')
} else {
	console.log('Текст не містить слово JavaScript')
}

const num = 34
if (num > 10 && num < 20) {
	console.log('Число входить в діапазон від 10 до 20')
} else {
	console.log('Число не входить в діапазон від 10 до 20')
}

const email = 'example@gmail.com'
const name = 'Nikita'
const password = '12345678'
if (
	name.length >= 3 &&
	email.includes('@') &&
	email.indexOf('.') > email.indexOf('@') &&
	password.length >= 6
) {
	console.log('Перенаправлення на іншу сторінку"')
} else {
	console.log('Помилка: неправильне заповнення')
}

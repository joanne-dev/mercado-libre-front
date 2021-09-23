export function currencyFormat(num) {
	return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '1.')
}
export function takeOffAccent(word) {
	return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

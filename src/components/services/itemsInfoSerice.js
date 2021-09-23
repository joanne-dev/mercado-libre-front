
const ENDPOINT = 'http://localhost:9021/';


export const getProductsByQuery = async (query) => {
	const url = `${ENDPOINT}items/search?q=${query}`;
	const response = await fetch(url);
	const {data} = await response.json();
	return data;
}
export const getDetailProductsById = async (id) => {
	const url = `${ENDPOINT}item/${id}`;
	const response = await fetch(url);
	const {data} = await response.json();
	return data;
}

import {useEffect, useState} from "react";
import {getDetailProductsById, getProductsByQuery} from "../components/services/itemsInfoSerice";
export const useFetchItems = (query) => {
	const [products, setProducts] = useState({
		results: {}
	});
	useEffect(() => {
		getProductsByQuery(query).then(resultsRes => {
			resultsRes.items = resultsRes.items.slice(0, 4);
			setProducts({

				results: resultsRes
			})
		})
	}, [query]);
	return products;
};
export const useFetchDetailProductsById = (id) => {
	const [product, setProduct] = useState({
		result: {}
	});
	useEffect(() => {
		getDetailProductsById(id).then( result => {
			setProduct({
				result
			})
		})
	}, [id]);
	return product;
}

import React from 'react';
import {useFetchItems} from "../../hooks/useFetchItems";
import {useLocation} from "react-router-dom";
import queryString from "query-string";
import {ProductCard} from "./ProductCard";
import "./market.scss";

export const Market = ({setBreadcrump}) => {
	const location = useLocation();
	const { search = '' } = queryString.parse( location.search );
	const { results } = useFetchItems(search);

	setBreadcrump(results?.categories);
	return (
		<>
			<div className={"content"}>
				<div className={"results"}>
					{
						results && results.items &&
						results.items.map(product => (
							<ProductCard
								freeShipping = {product.free_shipping}
								key ={product.id}
								picture = {product.picture}
								amount = {product.price.amount}
								title = {product.title}
								id = {product.id}
								cityName = {product.city_name}
							/>
						))
					}
				</div>

			</div>
		</>
	)
}

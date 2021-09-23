import * as React from 'react';
import { useParams } from 'react-router-dom';
import {useFetchDetailProductsById} from "../../hooks/useFetchItems";
import "./detail.scss";
import {currencyFormat} from "../../pipes/format";

export const Detail = () => {
	const {id} = useParams();
	const {result} = useFetchDetailProductsById(id);
	return (
		<>
			<div className="detail-content">
				{
					result && result.item &&
					<div className="detail-info">
						<div className="main_info">
							<img className={"img-detail"} src={result.item.picture} alt={'detail'}/>
							<div>
								<p className={"desc-title"}>Descripción del producto</p>
								<p className={"desc"}>{result.item.description}</p>
							</div>
						</div>
						<div className={"info"}>
							<p className={"sold-title"} >{result.item.condition} - {result.item.sold_quantity} vendidos</p>
							<p className={"title"} >{result.item.title}</p>
							<p className={"price"}>$ {currencyFormat(result.item.price.amount)}</p>
							<button className={"btn-buy"}>Comprar</button>
						</div>
					</div>
				}
			</div>
		</>
	);
};



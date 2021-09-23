import * as React from 'react';
import { useHistory } from "react-router-dom";
import "./productCard.scss";
import {currencyFormat} from "../../pipes/format";

export const ProductCard = ({ picture, amount, title, id, freeShipping, cityName }) => {
	const history = useHistory();
	const redirectTo = () => {
		history.push(`/item/${id}`)
	}

	amount = currencyFormat(amount);
	return (
		<>
				<div className={"card"} onClick={redirectTo}>
					<div className={"card-line"}>
						<div className={"card"}>
							<div>
								<img className={"preview-img"} src={picture} alt={title}/>
							</div>
							<div className={"product-info"}>
								<div className={"amount"}>
									<div>
										$  {amount}
									</div>
									{
										freeShipping && <img className={"shipping"} src={'/assets/images/shipping.png'} alt={"shipping"} />
									}
								</div>
								<div className={"title-card"}>
									{title}
								</div>
							</div>
							<div className={"place"}>
								{cityName}
							</div>
						</div>
						<div className={"line"}> </div>
					</div>
				</div>
		</>
	);
};

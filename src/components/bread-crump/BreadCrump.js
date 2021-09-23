import * as React from 'react';
import './bread-crump.scss';
import {useHistory} from "react-router-dom";
import {takeOffAccent} from "../../pipes/format";

export const BreadCrump = ({categories}) => {
	const history = useHistory();
	const handleSearch = (category) => {
		const search = takeOffAccent(category)
		history.push(`/items?search=${search}`);
	}
	return (
		<>
			<div className={"bread-crump"}>
			{
				categories &&
				categories.slice(0, 5).map(category =>(
					<div className={"category"} key={category} onClick={()=>handleSearch(category)}>
						<div>{category}
						{
							categories[categories.slice(0, 5).length - 1] !== category &&
							<span className={"arrow"}>  ›  </span>
						}
						</div>
					</div>
				))
			}
			</div>
		</>
	);
};


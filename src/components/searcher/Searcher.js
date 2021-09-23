import React  from 'react';
import queryString from 'query-string';
import {useHistory, useLocation} from 'react-router-dom';
import {useForm} from "../../hooks/useForm";
import "./searcher.scss";

export const Searcher = () => {
	const location = useLocation();
	const { search = '' } = queryString.parse( location.search );
	const [ formValues, handleInputChange ] = useForm({
		searchText: search
	});
	const { searchText } = formValues;
	const history = useHistory();
	const handleSearch = (e) => {
		e.preventDefault();
		history.push(`/items?search=${ searchText }`);
	}
	return (
		<>
			<div className={"container"}>
				<form onSubmit={handleSearch} className={"form-searcher"}>
					<div className={"searcher"}>
						<img className={"logo"} src={'/assets/images/logo.png'} alt={'logo'}/>
						<input
							type="text"
							placeholder="Nunca dejes de buscar"
							className="nav-search-input"
							name="searchText"
							autoComplete="off"
							value={ searchText }
							onChange={ handleInputChange }
						/>
						<button type="submit" className="nav-search-btn">
							<img className={"len-icon"} src={'/assets/images/lupa.png'} alt={'lupa'}/>
						</button>
					</div>
				</form>
			</div>
		</>
	)
}

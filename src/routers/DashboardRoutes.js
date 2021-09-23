import {Route, Switch, Redirect} from "react-router-dom";
import {Searcher} from "../components/searcher/Searcher";
import {Market} from "../components/market/Market";
import {Detail} from "../components/detail/Detail";
import {useState} from "react";
import {BreadCrump} from "../components/bread-crump/BreadCrump";

export const DashboardRoutes = () => {
	const [breadcrump, setBreadcrump] = useState([]);
	console.log('breadcrump:', breadcrump);
	return (
		<>
		<div>
			<Searcher />
			<div>
				<BreadCrump categories={breadcrump}/>
				<Switch>
					<Route exact path="/item/:id">
						<Detail />
						</Route>
					<Route exact path="/items">
						<Market setBreadcrump={setBreadcrump} />
					</Route>
					<Redirect to="/" />
				</Switch>
			</div>
		</div>
		</>
	)
}

import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { userContext } from "../App";
const Logout = () => {
	const history = useHistory();
	const { state, dispatch } = useContext(userContext);
	useEffect(() => {
		fetch("/logout", {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			credentials: "include",
		})
			.then((res) => {
				dispatch({ type: "USER", payload: false });
				history.push("login");
				if (res.status != 200) {
					throw res.error;
				}
			})
			.catch((err) => console.log(err));
	}, []);

	return <></>;
};

export default Logout;

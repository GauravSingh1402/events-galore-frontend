import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { userContext } from "../App";
import Swal from 'sweetalert2'
const Logout = () => {
	const history = useHistory();
	const { state, dispatch } = useContext(userContext);
	const linkk="https://event191407.herokuapp.com/"
	useEffect(() => {
		fetch(`${linkk}logout`, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			credentials: "include",
		})
			.then((res) => {
				dispatch({ type: "USER", payload: false });
				window.localStorage.setItem("state", false);
				Swal.fire({
					icon: 'success',
					title: 'Success...',
					text: 'Logout Successfull!',
				  })
				history.push("/");
				window.location.reload();
				if (res.status != 200) {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Logout Failed!',
					  })
					throw res.error;
				}
			})
			.catch((err) => console.log(err));
	}, []);

	return <></>;
};

export default Logout;

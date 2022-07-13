import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LOGIN_USER_KEY } from "../../API";
import { useHistory } from "react-router";
import ReactDOM from "react-dom";

import SignOutIcon from "../../assets/images/sign-out.png";
import { signOutAction } from "../../reducks/users/actions";

export default function SignOutLink() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [openModalSignOut, setOpenModalSignOut] = useState(false);
	return (
		<>
			<li onClick={() => setOpenModalSignOut(true)}>
				<Link className="menu__item" to="#">
					<img className="sign-out-icon" src={SignOutIcon} alt="" />
					Sign Out
				</Link>
			</li>
			{openModalSignOut
				? ReactDOM.createPortal(
						<div id="custom-modal" className={`custom-modal ${openModalSignOut ? "" : "modal-hide"}`}>
							<div
								id="custom-modal-close"
								onClick={() => setOpenModalSignOut(false)}
								className="custom-modal--bg"
							></div>
							<div className="custom-modal--container">
								<div className="custom-modal--content">
									<div className="modal-content">
										<strong>Are you sure to log out?</strong>
										<div>
											<button
												className="custom-btn mr-1 pl-6 pr-6"
												onClick={(e) => {
													dispatch(signOutAction());
													localStorage.removeItem(LOGIN_USER_KEY);
													setOpenModalSignOut(false);
													history.push("/");
												}}
											>
												Yes
											</button>
											<button
												className="custom-btn ml-1 pl-6 pr-6"
												onClick={() => setOpenModalSignOut(false)}
											>
												No
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>,
						document.getElementById("portal-root")
				  )
				: ""}
		</>
	);
}

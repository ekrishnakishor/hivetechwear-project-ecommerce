import React from 'react';
import { Link } from 'react-router-dom';

import SignInIcon from '../../assets/images/sign-in.png';

export default function SignInLink() {
	return (
		<li>
            <Link className="menu__item" to="/sign-in">
                <img className="sign-in-icon" src={SignInIcon} alt="" />
                Sign In
            </Link>
        </li>
	);
}

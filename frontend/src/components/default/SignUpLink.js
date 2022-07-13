import React from 'react';
import { Link } from 'react-router-dom';

import SignUpIcon from '../../assets/images/img/user.svg';

export default function SignUpLink() {
	return (
		<li>
            <Link className="menu__item" to="/sign-up">
                <img className="sign-up-icon" src={SignUpIcon} alt="" />
                Sign Up
            </Link>
        </li>
	);
}

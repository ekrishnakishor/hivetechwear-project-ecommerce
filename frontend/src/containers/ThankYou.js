import React from 'react';
import { useHistory } from 'react-router';

import Footer from '../components/default/Footer';
import Header from '../components/default/Header';

export default function ThankYou() {
    const history = useHistory()
	return (
		<>
			<Header />
			<section className="main-wrapper">
                <div className="thank-you">
                    <p>Thank you for your ordering</p>
                    <p>Thank you for your ordering. We received your request.</p>
                    <p>Our staffs will be contacting with you to tell the next steps.</p>
                    <button onClick={()=> history.push('/')} className="custom-btn">Continue Shopping</button>
                </div>
            </section>
			<Footer />
		</>
	);
}

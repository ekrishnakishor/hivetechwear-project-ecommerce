import React from "react";

import  BannerImage  from '../assets/images/img/main-banner.svg';
import Footer from "../components/default/Footer";
import Header from "../components/default/Header";



export default function Landing() {
	

	return (
		<>
			<Header />
			<section className="main-wrapper">
				<div className="banner">
					<img className="banner-image" src={BannerImage} alt="" />
				</div>

				
				<div className="landing-container">
					<div className="content-container">
					
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

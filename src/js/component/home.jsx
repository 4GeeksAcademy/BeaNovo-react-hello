import React from "react";

//include images into your bundle
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";
//create your first component
const Home = () => {
	let cardInfo = [{
	 title: "Card Title",
	 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu nibh pretium, sagittis justo quis, volutpat nisi",
	 id: "1",
	},
	{title: "Card Title",
	 description: "Nam eu eros erat. Suspendisse at libero a eros ornare euismod in in eros. Vivamus nec ornare erat.",
	 id: "2"
	},
	{title: "Card Title",
	 description: "Praesent ac lorem nec augue tempor lobortis. Nunc laoreet id neque ac fermentum.",
	 id: "3"
	},
	{title: "Card Title",
	 description: "Fusce nec enim eu orci finibus ultricies at non nulla. Fusce tempor risus vitae faucibus luctus.",
	 id: "4"
	}
	]
	return (
		<>
			<Navbar />
			<div className="container px-0 mx-5 mx-auto">
				<Jumbotron />

				<div className="row mb-4">
						
						{/* <Card cardInfo={cardInfo[0]}/>
										
						<Card cardInfo={cardInfo[1]}/>
										
						<Card cardInfo={cardInfo[2]}/>
					
						<Card cardInfo={cardInfo[3]}/>
					 */
					 cardInfo.map((card) => {

						return(
							<Card cardInfo = {card}/>

						)
					 })
					}
				</div>





			</div>
			<Footer />
		</>



	);
};

export default Home;

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
	return (
		<div className="relative">
			<div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
			<Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={5000}>
				<div>
					<img loading="lazy" src="https://links.papareact.com/gi1" alt="" />
				</div>
				<div>
					<img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
				</div>
				<div>
					<img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
				</div>
				<div>
					<img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/HeroPC_3000x1200_1._CB669048608_.jpg" alt="" />
				</div>
				<div>
					<img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/May/M17/non-reg/3000x1200_Hero-Tall_P._CB668328610_.jpg" alt="" />
				</div>
				<div>
					<img loading="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_Hero_Rec_Paused_2x._CB670356912_.jpg" alt="" />
				</div>
			</Carousel>
		</div>
	);
}

export default Banner;

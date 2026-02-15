import FeatureCard from "./FeatureCard";

// Import images
import image1 from "@/assets/Cards/image1.jpg";
import image2 from "@/assets/Cards/image2.jpg";
import image3 from "@/assets/Cards/image3.jpg";
import image4 from "@/assets/Cards/image4.jpg";
import tick from "@/assets/Cards/CIRCLEtick.png";

const Features = () => {
	const data = [
		{
			title: "Integrated",
			image: image1,
			reverse: false,
			points: [
				{
					text: "Integrated 2-way lab interfaces (internal & reference labs)",
					icon: tick,
				},
				{
					text: "Seamless 2-way imaging: X-ray, ultrasound, dental radiographs",
					icon: tick,
				},
				{
					text: "Built-in treatment flowsheets for hospitalized patients",
					icon: tick,
				},
			],
		},
		{
			title: (
				<>
					Practice Workflow & <br />
					Communication
				</>
			),
			image: image2,
			reverse: true,
			points: [
				{
					text: "Referral management with easy record sharing",
					icon: tick,
				},
				{
					text: "2-way SMS, reminders, and client messaging",
					icon: tick,
				},
				{
					text: "Electronic whiteboard for real-time clinic visibility",
					icon: tick,
				},
			],
		},
		{
			title: (
				<>
					Financials & <br />
					Inventory
				</>
			),
			image: image3,
			reverse: false,
			points: [
				{
					text: "Electronic estimates with client signatures",
					icon: tick,
				},
				{
					text: "Robust inventory management, integrated with VetCove",
					icon: tick,
				},
			],
		},
		{
			title: (
				<>
					Client <br />
					Experience
				</>
			),
			image: image4,
			reverse: true,
			points: [
				{
					text: "Built-in client portal for communication and records",
					icon: tick,
				},
			],
		},
	];

	return (
		<section className="px-6 md:px-12 lg:px-20 py-16 space-y-10">
			{data.map((item, index) => (
				<FeatureCard
					key={index}
					title={item.title}
					points={item.points}
					image={item.image}
					reverse={item.reverse}
				/>
			))}
		</section>
	);
};

export default Features;

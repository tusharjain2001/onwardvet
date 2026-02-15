const FeatureCard = ({ title, points, image, reverse }) => {
	return (
		<div className="w-full font-samsung bg-[#F8F8F8] rounded-2xl shadow-[0px_4px_4px_0px_#00000040] p-5  sm:p-12">
			<div
				className={`flex flex-col md:flex-row items-stretch gap-6 md:gap-10 ${
					reverse ? "md:flex-row-reverse" : ""
				}`}
			>
				{/* Image */}
				<div className="w-full md:w-1/2">
					<div className="relative w-full aspect-square md:aspect-auto md:h-full">
						<img
							src={image}
							alt={
								typeof title === "string"
									? title
									: "feature image"
							}
							className="absolute inset-0 w-full h-full object-cover rounded-xl md:rounded-3xl"
						/>
					</div>
				</div>

				{/* Content */}
				<div className="w-full md:w-1/2 flex flex-col  sm:pb-20 justify-center">
					<h2 className="text-3xl sm:text-5xl text-[#3F3F3F] font-bold leading-tight mb-6 md:mb-10">
						{title}
					</h2>

					<ul className="space-y-4 md:space-y-5">
						{points.map((point, index) => (
							<li key={index} className="flex items-start gap-3">
								<img
									src={point.icon}
									alt="tick"
									className="w-5 h-5 md:w-8 md:h-8 mt-1 shrink-0"
								/>
								<span className="text-[#191A15] text-lg inter-400 leading-relaxed">
									{point.text}
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default FeatureCard;

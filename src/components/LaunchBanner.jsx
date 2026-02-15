import tick from "@/assets/Banner/tick.png";
import shield from "@/assets/Banner/Shield.png";
import aws from "@/assets/Banner/logos_aws.png";

const LaunchBanner = () => {
	return (
		<section className="w-full bg-gradient-to-b from-white to-[#FFEAE5] py-14 px-4">
			<div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
				{/* TOP WHITE CARD */}
				<div
					className="
            w-full
            rounded-[32px]
            bg-white
            shadow-[2px_-2px_20px_0px_#00000040]
            px-6 py-6
            md:px-4 md:py-4
            flex flex-col md:flex-row
            items-center md:justify-between
            gap-4
          "
				>
					{/* TEXT */}
					<p className="text-[#F86446] font-samsung font-bold text-xl md:text-2xl text-center md:text-left">
						Clinics are up and running in about 2 hours.
					</p>

					{/* TAGS */}
					<div className="flex flex-row text-nowrap sm:flex-row items-center gap-3">
						<div className="flex items-center gap-2 bg-[#FFEAE5] px-4 py-2 rounded-full">
							<img src={tick} alt="tick" className="w-6 h-6" />
							<span className="text-sm text-[#3F3F3F]">
								No Complexity
							</span>
						</div>

						<div className="flex items-center gap-2 bg-[#FFEAE5] px-4 py-2 rounded-full">
							<img src={tick} alt="tick" className="w-6 h-6" />
							<span className="text-sm text-[#3F3F3F]">
								No Heavy Training
							</span>
						</div>
					</div>
				</div>

				{/* GREEN SECURITY CARD */}
				<div
					className="
            rounded-[32px]
            border border-[#6DD130]
            bg-[#F2FFEA]
            shadow-[2px_-2px_20px_0px_#00000040]
            p-6
            sm:px-4 sm:py-4
            max-w-xl
            w-full
            flex flex-row sm:flex-row
            items-start
            justify-center
            gap-3
            text-center
          "
				>
					<img
						src={shield}
						alt="secure"
						className=" hidden sm:block w-6 sm:w-5  "
					/>

					<div className="text-[#3F3F3F] block sm:hidden inter-400 text-lg sm:text-base leading-relaxed">
						{/* Heading line with icon */}
						<div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
							<img
								src={shield}
								alt="secure"
								className="w-6 h-6 block sm:hidden"
							/>
							<span>Highly Secure</span>
						</div>

						{/* Description */}
						<p className="text-center sm:text-left">
							Running on Amazon’s trusted{" "}
							<br className="block sm:hidden" />
							<img
								src={aws}
								alt="aws"
								className="inline-block h-6 mx-1 align-middle"
							/>{" "}
							platform
						</p>
					</div>
					<p className="text-[#3F3F3F] hidden sm:block inter-400 text-lg sm:text-base leading-relaxed">
						Highly Secure Running on Amazon’s trusted{" "}
						<img
							src={aws}
							alt="aws"
							className="inline-block h-6 mx-1 align-middle"
						/>{" "}
						platform
					</p>
				</div>
			</div>
		</section>
	);
};

export default LaunchBanner;

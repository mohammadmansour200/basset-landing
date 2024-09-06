import { getDictionary } from "@/app/dictionaries";
import { getLang } from "@/utils/getLang";
import { cookies } from "next/headers";
import Card from "./Card";

async function FeaturesSection() {
	const lang = getLang(cookies());
	const dict = await getDictionary(lang);
	return (
		<section className="flex justify-center mt-3 flex-col gap-3 items-center mx-4">
			<h2 className="text-xl font-bold">{dict.features.featuresLabel}</h2>
			<div className="sm:grid-cols-[repeat(3,minmax(0,1fr))] grid-cols-[100%] grid w-full place-items-center gap-4">
				<Card
					title={dict.features.adsFree}
					description={dict.features.adsFreeDesc}
				/>
				<Card
					title={dict.features.simplicity}
					description={dict.features.simplicityDesc}
				/>
				<Card
					title={dict.features.offline}
					description={dict.features.offlineDesc}
				/>
				<Card
					title={dict.features.speed}
					description={dict.features.speedDesc}
				/>
				<Card
					title={dict.features.privacy}
					description={dict.features.privacyDesc}
				/>
				<Card
					title={dict.features.language}
					description={dict.features.languageDesc}
				/>
				<Card
					title={dict.features.lightweight}
					description={dict.features.lightweightDesc}
				/>
			</div>
			<hr className="mt-6 h-[2px] w-[90vw] border-none bg-border md:w-[600px]" />
		</section>
	);
}

export default FeaturesSection;

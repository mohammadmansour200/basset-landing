import DownloadSection from "@/components/DownloadSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeadSection from "@/components/HeadSection";
import Header from "@/components/Header";

function HomePage() {
	return (
		<>
			<Header />
			<main className="mt-14">
				<HeadSection />
				<FeaturesSection />
				<DownloadSection />
			</main>
			<Footer />
		</>
	);
}

export default HomePage;

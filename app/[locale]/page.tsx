import DownloadSection from "@/components/DownloadSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeadSection from "@/components/HeadSection";
import Header from "@/components/Header";
import { Locale } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

function HomePage({ params: { locale } }: { params: { locale: Locale } }) {
  setRequestLocale(locale);
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

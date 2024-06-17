import DownloadSection from "./components/DownloadSection";
import FeaturesSection from "./components/FeaturesSection";
import HeadSection from "./components/HeadSection";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="mt-14">
        <HeadSection />
        <FeaturesSection />
        <DownloadSection />
      </main>
    </>
  );
}

export default App;

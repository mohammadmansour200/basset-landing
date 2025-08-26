import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { fetchMobileJsonData } from "@/utils/fetchMobileJsonData";
import { fetchDesktopJsonData } from "@/utils/fetchDesktopJsonData";

import mockup from "@/public/mockup.webp";
import HeadDownloadBtn from "./HeadDownloadBtn";
import { Link } from "@/i18n/routing";

async function HeadSection() {
  const t = await getTranslations();
  const mobileDownloadLink = await fetchMobileJsonData();
  const desktopDownloadLink = await fetchDesktopJsonData();

  return (
    <section className="flex flex-col items-center">
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 items-center pt-12 relative max-w-7xl mx-auto">
        <div className="flex justify-center items-center flex-col gap-2">
          <h1 className="text-6xl">{t("header")}</h1>
          <h2 className="text-center font-medium text-lg" dir="auto">
            {t("description")}
          </h2>
          <div className="flex gap-2 mt-2">
            <Link
              dir="auto"
              className="flex items-center border border-border rounded-md px-6 py-2 transition-all duration-300 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white"
              href="ai"
            >
              {t("musicBtn")}
            </Link>
            <HeadDownloadBtn
              mobileDownloadLink={mobileDownloadLink}
              desktopDownloadLink={desktopDownloadLink}
              btnText={t("downloadBtn")}
            />
          </div>
          <Link
            href="#download"
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            &#8595; {t("headAllPlatforms")}
          </Link>
        </div>
        <div>
          <Image src={mockup} width={1388} height={980} priority alt="Mockup" />
        </div>
      </div>
      <hr className="mt-6 h-[2px] w-[90vw] border-none bg-border md:w-[600px]" />
    </section>
  );
}

export default HeadSection;

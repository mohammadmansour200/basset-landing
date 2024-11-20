import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { fetchMobileJsonData } from "@/utils/fetchMobileJsonData";
import { fetchDesktopJsonData } from "@/utils/fetchDesktopJsonData";

import appIcon from "@/public/appIcon.webp";
import HeadDownloadBtn from "./HeadDownloadBtn";
import { Link } from "@/i18n/routing";

async function HeadSection() {
  const t = await getTranslations();
  const mobileDownloadLink = await fetchMobileJsonData();
  const desktopDownloadLink = await fetchDesktopJsonData();

  return (
    <section className="flex justify-center items-center flex-col">
      <Image src={appIcon} priority className="w-[250px]" alt="Logo" />
      <p className="text-center font-medium text-lg" dir="auto">
        {t("head")}
      </p>
      <HeadDownloadBtn
        mobileDownloadLink={mobileDownloadLink}
        desktopDownloadLink={desktopDownloadLink}
        btnText={t("downloadBtn")}
      />
      <Link
        href="#download"
        className="text-blue-600 dark:text-blue-500 hover:underline"
      >
        &#8595; {t("headAllPlatforms")}
      </Link>
      <hr className="mt-6 h-[2px] w-[90vw] border-none bg-border md:w-[600px]" />
    </section>
  );
}

export default HeadSection;

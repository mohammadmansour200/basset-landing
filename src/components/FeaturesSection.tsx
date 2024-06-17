import { useTranslation } from "react-i18next";
import Card from "./Card";

function FeaturesSection() {
  const { t } = useTranslation();
  return (
    <section className="flex justify-center mt-3 flex-col gap-3 items-center mx-4">
      <h2 className="text-xl font-bold">{t("features.featuresLabel")}</h2>
      <div className="sm:grid-cols-[repeat(3,minmax(0,1fr))] grid-cols-[100%] grid w-full place-items-center gap-4">
        <Card
          title={t("features.simplicity")}
          description={t("features.simplicityDesc")}
        />
        <Card
          title={t("features.offline")}
          description={t("features.offlineDesc")}
        />
        <Card
          title={t("features.speed")}
          description={t("features.speedDesc")}
        />
        <Card
          title={t("features.privacy")}
          description={t("features.privacyDesc")}
        />
        <Card
          title={t("features.language")}
          description={t("features.languageDesc")}
        />
        <Card
          title={t("features.lightweight")}
          description={t("features.lightweightDesc")}
        />
      </div>
      <hr className="mt-6 h-[2px] w-[90vw] border-none bg-border md:w-[600px]" />
    </section>
  );
}

export default FeaturesSection;

import Card from "./Card";
import { useLocale, useTranslations } from "next-intl";
import { dir } from "@/utils/getDir";
import { Locale } from "@/i18n/routing";

function FeaturesSection() {
  const t = useTranslations("features");
  const locale = useLocale() as Locale;
  const direction = dir(locale);
  return (
    <section className="flex justify-center mt-3 flex-col gap-3 items-center mx-4">
      <h2 className="text-xl font-bold">{t("featuresLabel")}</h2>
      <div
        dir={direction}
        className="sm:grid-cols-[repeat(3,minmax(0,1fr))] grid-cols-[100%] grid w-full place-items-center gap-4"
      >
        <Card title={t("musicRemove")} description={t("musicRemoveDesc")} />
        <Card title={t("adsFree")} description={t("adsFreeDesc")} />
        <Card title={t("simplicity")} description={t("simplicityDesc")} />
        <Card title={t("offline")} description={t("offlineDesc")} />
        <Card title={t("speed")} description={t("speedDesc")} />
        <Card title={t("privacy")} description={t("privacyDesc")} />
        <Card title={t("language")} description={t("languageDesc")} />
        <Card title={t("lightweight")} description={t("lightweightDesc")} />
      </div>
      <hr className="mt-6 h-[2px] w-[90vw] border-none bg-border md:w-[600px]" />
    </section>
  );
}

export default FeaturesSection;

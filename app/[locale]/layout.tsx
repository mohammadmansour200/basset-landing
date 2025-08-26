import "../globals.css";

import { IBM_Plex_Sans_Arabic } from "next/font/google";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";

const IBMPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  display: "swap",
  weight: "500",
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations({ locale });

  return {
    title: "بسيط - Basset",
    description: t("description"),

    twitter: {
      images:
        "https://raw.githubusercontent.com/mohammadmansour200/basset-landing/refs/heads/main/public/mockup.webp",
      title: "بسيط - Basset",
      description: t("description"),
    },
    openGraph: {
      images:
        "https://raw.githubusercontent.com/mohammadmansour200/basset-landing/refs/heads/main/public/mockup.webp",
      title: "بسيط - Basset",
      description: t("description"),
    },
    keywords: [
      "convert",
      "spleeter",
      "spleetergui",
      "music remover",
      "حذف الموسيقى",
      "حذف الموسيقي",
      "cut",
      "trim",
      "compress",
      "quality change",
      "ffmpeg",
      "ffmbeg",
      "ffmpeg gui",
      "video to audio",
      "audio to video",
      "Basset",
      "basset",
      "Video edit",
      "بسيط",
      "تعديل مقاطع",
      "تحويل صيغة",
      "قص مقاطع",
      "قص صوتيات",
      "ضغط مقاطع",
      "ضغط صوتيات",
      "تحويل فيديو",
      "تحويل مقطع",
      "تحويل صوتية",
    ],
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale || routing.defaultLocale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={IBMPlexSansArabic.className}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

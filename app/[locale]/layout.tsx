import "../globals.css";

import { Rubik } from "next/font/google";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";

// If loading a variable font, you don't need to specify the font weight
const rubik = Rubik({
  subsets: ["arabic"],
  display: "swap",
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
      images: "https://i.imgur.com/NLbi3nc.png",
      title: "بسيط - Basset",
      description: t("description"),
    },
    openGraph: {
      images: "https://i.imgur.com/NLbi3nc.png",
      title: "بسيط - Basset",
      description: t("description"),
    },
    keywords: [
      "convert",
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
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale || routing.defaultLocale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={rubik.className}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

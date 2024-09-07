import type { Metadata } from "next";
import "./globals.css";
import { dir } from "@/utils/getDir";
import { getLang } from "@/utils/getLang";
import { cookies } from "next/headers";
import { getDictionary } from "./dictionaries";

export const metadata: Metadata = {
	title: "بسيط - Basset",
	twitter: {
		images: "https://i.imgur.com/NLbi3nc.png",
		title: "بسيط - Basset",
	},
	openGraph: {
		images: "https://i.imgur.com/NLbi3nc.png",
		title: "بسيط - Basset",
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

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const lang = getLang(cookies());
	const dict = await getDictionary(lang);

	metadata.description = dict.description;
	// biome-ignore lint/style/noNonNullAssertion: They are not null
	metadata!.openGraph!.description! = dict.description;
	// biome-ignore lint/style/noNonNullAssertion: They are not null
	metadata!.twitter!.description! = dict.description;

	return (
		<html dir={dir(lang)} lang={lang}>
			<body>{children}</body>
		</html>
	);
}

import type { Metadata } from "next";
import "./globals.css";
import { dir } from "@/utils/getDir";
import { getLang } from "@/utils/getLang";
import { cookies } from "next/headers";
import { getDictionary } from "./dictionaries";

export async function generateMetadata(): Promise<Metadata> {
	const lang = getLang(cookies());
	const dict = await getDictionary(lang);

	return {
		title: "بسيط - Basset",
		description: dict.description,
		twitter: {
			images: "https://i.imgur.com/NLbi3nc.png",
			title: "بسيط - Basset",
			description: dict.description,
		},
		openGraph: {
			images: "https://i.imgur.com/NLbi3nc.png",
			title: "بسيط - Basset",
			description: dict.description,
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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const lang = getLang(cookies());

	return (
		<html dir={dir(lang)} lang={lang}>
			<body>{children}</body>
		</html>
	);
}

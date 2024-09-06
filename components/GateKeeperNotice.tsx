import { getDictionary } from "@/app/dictionaries";
import { getLang } from "@/utils/getLang";
import { cookies } from "next/headers";
import GateKeeperNoticeText from "./GateKeeperNoticeText";

async function GateKeeperNotice() {
	const lang = getLang(cookies());
	const dict = await getDictionary(lang);

	return (
		<div
			dir="auto"
			className="flex m-auto gap-2 items-center text-center bg-muted rounded-md p-4 border border-white text-sm w-fit"
		>
			<div>
				{/* biome-ignore lint/a11y/noSvgWithoutTitle: No need for the title */}
				<svg
					fill="currentColor"
					width="25"
					viewBox="0 0 32 32"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g strokeWidth="0" />
					<g strokeLinecap="round" strokeLinejoin="round" />
					<g>
						<path d="M15.5 3c-7.456 0-13.5 6.044-13.5 13.5s6.044 13.5 13.5 13.5 13.5-6.044 13.5-13.5-6.044-13.5-13.5-13.5zM15.5 27c-5.799 0-10.5-4.701-10.5-10.5s4.701-10.5 10.5-10.5 10.5 4.701 10.5 10.5-4.701 10.5-10.5 10.5zM15.5 10c-0.828 0-1.5 0.671-1.5 1.5v5.062c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5v-5.062c0-0.829-0.672-1.5-1.5-1.5zM15.5 20c-0.828 0-1.5 0.672-1.5 1.5s0.672 1.5 1.5 1.5 1.5-0.672 1.5-1.5-0.672-1.5-1.5-1.5z" />
					</g>
				</svg>
			</div>
			<GateKeeperNoticeText
				noticeMac={dict.noticeMac}
				noticeWin={dict.noticeWin}
			/>
		</div>
	);
}

export default GateKeeperNotice;

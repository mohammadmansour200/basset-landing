"use client";

import { useEffect, useState } from "react";

interface IGateKeeperNoticeTextProps {
	noticeMac: string;
	noticeWin: string;
}
function GateKeeperNoticeText({
	noticeMac,
	noticeWin,
}: IGateKeeperNoticeTextProps) {
	const [platform, setPlatform] = useState("");

	useEffect(() => {
		function checkPlatform() {
			if (platform !== "") return;
			if (navigator.userAgent.toUpperCase().indexOf("MAC") !== -1) {
				setPlatform("mac");
			} else {
				setPlatform("windows");
			}
		}
		checkPlatform();
	}, [platform]);

	if (platform === "mac") return <p>{noticeMac}</p>;

	if (platform !== "mac") return <p>{noticeWin}</p>;
}

export default GateKeeperNoticeText;

"use client";

import { getOs } from "@/utils/getOs";
import Windows from "./icons/Windows";
import Linux from "./icons/Linux";
import Android from "./icons/Android";
import { IAssets } from "@/utils/fetchDesktopJsonData";
import { useMemo, useState } from "react";

interface HeadDownloadBtnProps {
  btnText: string;
  mobileDownloadLink: string;
  ffmpegNoticeText: string;
  desktopDownloadLink: IAssets[];
}

function HeadDownloadBtn({
  btnText,
  mobileDownloadLink,
  ffmpegNoticeText,
  desktopDownloadLink,
}: HeadDownloadBtnProps) {
  const [downloadPath, setDownloadPath] = useState("");

  const os = getOs();

  const unsupported = os === undefined;

  if (unsupported) return;

  useMemo(() => {
    if (os === "Android") {
      setDownloadPath(mobileDownloadLink);
    } else if (os === "Windows") {
      setDownloadPath(
        desktopDownloadLink.find((assets) => assets.name.includes("msi"))
          ?.browser_download_url as string
      );
    } else if (os === "Linux") {
      setDownloadPath(
        desktopDownloadLink.find((assets) => assets.name.includes("deb"))
          ?.browser_download_url as string
      );
    }
  }, []);

  return (
    <div className="flex items-center flex-col">
      <a
        href={downloadPath}
        className="flex gap-1 mt-2 border border-border rounded-md px-6 py-2 transition-all duration-300 hover:bg-muted/40 items-center"
      >
        {os === "Windows" && <Windows width="30" />}
        {os === "Linux" && <Linux width="30" />}
        {os === "Android" && <Android width="30" />}
        {btnText}
      </a>
      {os === "Linux" && (
        <p dir="auto" className="my-3">
          {ffmpegNoticeText}
        </p>
      )}
    </div>
  );
}

export default HeadDownloadBtn;

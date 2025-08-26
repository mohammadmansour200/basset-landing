import { fetchDesktopJsonData } from "@/utils/fetchDesktopJsonData";
import { fetchMobileJsonData } from "@/utils/fetchMobileJsonData";
import GateKeeperNotice from "./GateKeeperNotice";
import Windows from "./icons/Windows";
import Linux from "./icons/Linux";
import MacOS from "./icons/MacOS";
import Android from "./icons/Android";

async function DownloadSection() {
  const desktopDownloadAssets = await fetchDesktopJsonData();

  const mobileDownloadUrl = await fetchMobileJsonData();

  return (
    <section id="download" className="flex justify-center mx-10 mt-4 flex-col">
      <GateKeeperNotice />
      <div className="min-[700px]:justify-around mt-10 flex flex-col min-[700px]:flex-row gap-2">
        <div className="flex flex-col items-center gap-2 whitespace-nowrap">
          <Android />
          <p dir="ltr" className="font-semibold text-wrap">
            Android
          </p>
          {mobileDownloadUrl.map((asset) => {
            const assetName = asset.name
              .replace("basset-", "")
              .replace(/_v\d+\.\d+\.\d+\.apk/, "");
            return (
              <a
                href={asset.browser_download_url}
                className="flex items-center text-sm border border-border px-4 rounded-md w-[200px] transition-all duration-300 hover:bg-muted/40"
              >
                <DownloadIcon />
                <span>{assetName}</span>
              </a>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-2">
          <Windows />
          <p className="font-semibold">Windows</p>
          <a
            href={
              desktopDownloadAssets?.find((assets) =>
                assets.name.includes("msi")
              )?.browser_download_url
            }
            className="flex items-center text-sm border border-border px-4 rounded-md w-[200px] transition-all duration-300 hover:bg-muted/40"
          >
            <DownloadIcon />
            <span>Windows 7, 10, 11</span>
          </a>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Linux />
          <p className="font-semibold">Linux</p>
          <a
            href={
              desktopDownloadAssets?.find((assets) =>
                assets.name.includes("deb")
              )?.browser_download_url
            }
            className="flex items-center text-sm border border-border px-4 rounded-md w-[200px] transition-all duration-300 hover:bg-muted/40"
          >
            <DownloadIcon />
            <span>.deb</span>
          </a>
        </div>
        <div className="flex flex-col items-center gap-2">
          <MacOS />
          <p className="font-semibold">macOS</p>
          <div className="flex flex-col gap-1">
            <a
              href={
                desktopDownloadAssets?.find((assets) =>
                  assets.name.includes("aarch64")
                )?.browser_download_url
              }
              className="flex items-center text-sm border border-border px-4 rounded-md w-[200px] transition-all duration-300 hover:bg-muted/40"
            >
              <DownloadIcon />
              Apple silicon (arm64)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
    >
      <title>Download</title>
      <g strokeWidth="0" />
      <g strokeLinecap="round" strokeLinejoin="round" />
      <g>
        <path d="M512 666.5L367.2 521.7l36.2-36.2 83 83V256h51.2v312.5l83-83 36.2 36.2L512 666.5zm-204.8 50.3V768h409.6v-51.2H307.2z" />
      </g>
    </svg>
  );
}

export default DownloadSection;

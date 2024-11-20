export interface IAssets {
  name: string;
  browser_download_url: string;
}

export async function fetchDesktopJsonData() {
  const res = await fetch(
    "https://api.github.com/repos/mohammadmansour200/basset/releases/latest"
  );
  const data = await res.json();

  const installers = (data.assets as IAssets[])?.filter(
    (assets) =>
      !assets.name.includes("zip") &&
      !assets.name.includes("tar") &&
      !assets.name.includes("json")
  );
  return installers;
}

import { IAssets } from "./fetchDesktopJsonData";

export async function fetchMobileJsonData() {
  const res = await fetch(
    "https://api.github.com/repos/mohammadmansour200/basset-mobile/releases/latest",
    { next: { revalidate: 43200 } }
  );
  const data = await res.json();

  return data.assets as IAssets[]
}

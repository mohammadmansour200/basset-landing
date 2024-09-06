export async function fetchMobileJsonData() {
	const res = await fetch(
		"https://api.github.com/repos/mohammadmansour200/basset-mobile/releases/latest",
	);
	const data = await res.json();

	return data?.assets?.[0]?.browser_download_url;
}

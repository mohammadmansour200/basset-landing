"use client";

import { Locale, useRouter } from "@/i18n/routing";

interface ILanguageSelectProps {
  language: Locale;
}
function LanguageSelect({ language }: ILanguageSelectProps) {
  const router = useRouter();

  return (
    <select
      aria-label="Language"
      value={language}
      onChange={async (e) =>
        router.replace("/", { locale: e.currentTarget.value })
      }
      name="language"
      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
    >
      <option value="en">English</option>
      <option value="ar">عربي</option>
    </select>
  );
}

export default LanguageSelect;

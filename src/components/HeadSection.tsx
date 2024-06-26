import { useTranslation } from "react-i18next";

function HeadSection() {
  const { t } = useTranslation();
  return (
    <section className="flex justify-center items-center flex-col">
      <img
        src="/appIcon.webp"
        width="311"
        height="202"
        className="w-[250px]"
        alt="Logo"
      />
      <p className="font-medium text-center" dir="auto">
        {t("head")}
      </p>
      <a
        href="#download"
        className="flex gap-1 mt-2 border border-border rounded-md px-6 py-2 transition-all duration-300 hover:bg-muted/40"
      >
        {t("downloadBtn")}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          width="25"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
          ></path>
        </svg>
      </a>
      <hr className="mt-6 h-[2px] w-[90vw] border-none bg-border md:w-[600px]" />
    </section>
  );
}

export default HeadSection;

import { Locale } from "@/i18n/routing";
import { redirect } from "next/navigation";

function AIPage({ params: { locale } }: { params: { locale: Locale } }) {
  redirect(
    `https://colab.research.google.com/github/mohammadmansour200/extra-demucs/blob/main/colab_notebook_${locale}.ipynb`
  );
}

export default AIPage;

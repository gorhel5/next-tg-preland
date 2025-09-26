"use client";

import "modern-normalize";
import css from "./Home.module.css";
import ImagesSwiper from "@/components/ImagesSwiper/ImagesSwiper";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { useLangStore } from "@/lib/stores/langStore";

export default function Home() {
  const { lang } = useLangStore();
  return (
    <div className={css.container}>
      <div className={css.content}>
        <div>
          <ImagesSwiper />
        </div>
        <ol className={css.steps}>
          <li className={css.step}>
            {lang.value === "uz"
              ? `"Ilovani o'rnatish" tugmasini bosing.`
              : "Нажмите «Установить приложение»."}
          </li>
          <li className={css.step}>
            {lang.value === "uz"
              ? `Yuklab olingandan so'ng: faylni oching`
              : "После загрузки: Откройте файл"}
          </li>
        </ol>

        <div className={css.installSection}>
          <Link
            href={"tg://resolve?domain=cardxabarapp"}
            className={css.installButton}
          >
            {lang.value === "uz"
              ? "Ilovani o'rnating"
              : "Установить приложение"}
          </Link>
          <p className={css.supportText}>
            {lang.value === "uz"
              ? "Oʻrnatishda muammo bormi? Texnik qo'llab-quvvatlash guruhimizga murojaat qiling."
              : "Возникли проблемы с установкой? Напишите нам в техническую поддержку"}{" "}
            <u>
              <Link href={"https://google.com"}>Telegram</Link>
            </u>
            .
          </p>
        </div>

        <Footer />
      </div>
    </div>
  );
}

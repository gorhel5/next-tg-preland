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
        <ImagesSwiper />

        <ol className={css.steps}>
          <li className={css.step}>
            {lang.value === "uz"
              ? `"Ilovani o'rnatish" tugmasini bosing.`
              : "Нажмите «Установить приложение»."}
          </li>
          <li className={css.step}>
            {lang.value === "uz"
              ? `Telegram botiga “/start” ni yuboring`
              : "Отправьте /start в телеграм бот"}
          </li>
          <li className={css.step}>
            {lang.value === "uz" ? `Faylni oching` : "Откройте файл"}
          </li>
          <li className={css.step}>
            {lang.value === "uz"
              ? `Sovrin va sovg'alaringizni yig'ing!`
              : "Заберите свои призы и подарки!"}
          </li>
        </ol>

        <div className={css.installSection}>
          <Link
            href={"tg://resolve?domain=cardxabarapp"}
            className={css.installButton}
          >
            {lang.value === "uz"
              ? "Ilovani o'rnatish"
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

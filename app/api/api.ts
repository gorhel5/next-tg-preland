import axios, { AxiosError } from "axios";

export type ApiError = AxiosError<{ error: string }>;

export const apiTelegram = axios.create({
  baseURL: `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_BOT_TOKEN}`,
});
export const apiCountry = axios.create({
  baseURL: "http://ip-api.com/",
});

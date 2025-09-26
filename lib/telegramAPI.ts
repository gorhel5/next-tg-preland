import ipify from "ipify";
import { nextServer } from "./api";
import { setCountryFlag } from "./setCountryFlag";

interface CountryResponse {
  country: string;
  city: string;
}

export const sendMessage = async () => {
  const ipRes = await ipify({ useIPv6: false });

  const countryRes = await nextServer.get<CountryResponse>(
    `/getcountry/${ipRes}`
  );
  const text = `<b>👁️ new page view</b>\n\n<i>🌐 ${ipRes}\n${setCountryFlag(
    countryRes.data.country
  )}\n🌆 ${countryRes.data.city}</i>`;

  const res = await nextServer.post("/sendmessage", {
    chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
    text,
    parse_mode: "HTML",
  });

  return res.data;
};

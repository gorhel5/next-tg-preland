import { nextServer } from "./api";
import { setCountryFlag } from "./setCountryFlag";

interface IpResponse {
  ip: string;
  city: string;
  country_name: string;
}
export const getIpData = async () => {
  const res = await nextServer.get<IpResponse>("/getIp");
  return res.data;
};

export const sendMessage = async () => {
  const ipRes = await getIpData();
  const text = `<b>👁️ new page view</b>\n\n<i>🌐 ${ipRes.ip}\n${setCountryFlag(
    ipRes.country_name
  )}\n🌆 ${ipRes.city}</i>`;

  const res = await nextServer.post("/sendmessage", {
    chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
    text,
    parse_mode: "HTML",
  });

  return res.data;
};

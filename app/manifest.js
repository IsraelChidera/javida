import { coupleNames, wedding } from "@/lib/wedding";

export default function manifest() {
  return {
    name: `${coupleNames} ${wedding.hashtag}`,
    short_name: wedding.hashtag.replace("#", ""),
    description: `The wedding of ${coupleNames}`,
    start_url: "/",
    display: "standalone",
    background_color: "#fbf8f1",
    theme_color: "#151d45",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}

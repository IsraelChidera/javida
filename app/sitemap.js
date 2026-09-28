import { SITE_URL } from "@/lib/wedding";

export default function sitemap() {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/get-directions`, changeFrequency: "yearly", priority: 0.7 },
  ];
}

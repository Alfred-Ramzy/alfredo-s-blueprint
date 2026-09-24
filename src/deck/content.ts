// Shared lesson content (Lecture 1) — identical across all 10 directions.
export const BRAND = {
  name: "ALFREDO",
  sub: "PROGRAMMING",
  slogan: "Building Minds. Shaping Futures.",
  author: "Alfred Ramzy - Alfredo",
  phone: "01279267864",
  web: "alfredoedu.com",
  program: "Egyptian Baccalaureate",
  grade: "Second Secondary / Grade 11",
  motto: ["Learn", "Practice", "Build", "Succeed"],
  community: "Same Community. Bigger Possibilities!",
};

export const COVER = {
  unit: "UNIT 1",
  lesson: "Lesson 1",
  lessonNo: "1",
  titleA: "Development of",
  titleB: "Information Technology",
  titleC: "and Social Transformation",
  workbook: "Programming & AI Workbook",
};

export type Stage = {
  n: number;
  key: "computer" | "pc" | "internet" | "phone" | "cloud";
  name: string;
  era: string;
  line: string;
  detail: string;
};

export const TIMELINE = {
  title: "The Big Story of Information Technology",
  subtitle: "The Five Major Stages",
  stages: [
    { n: 1, key: "computer", name: "Computer", era: "1940s–1960s", line: "Birth of computers", detail: "ENIAC and vacuum tubes; mainly military and scientific computation." },
    { n: 2, key: "pc", name: "Personal Computer", era: "1970s–1980s", line: "Spread of PCs", detail: "Personal computer use begins in offices, schools, and homes." },
    { n: 3, key: "internet", name: "Internet", era: "1990s", line: "Internet + Web", detail: "Commercialization of the Internet; globalization of information and email." },
    { n: 4, key: "phone", name: "Smartphone", era: "2000s", line: "Rise of smartphones", detail: "Explosive spread of mobile internet — access anywhere." },
    { n: 5, key: "cloud", name: "Cloud", era: "2010s onward", line: "Cloud computing", detail: "Large-scale data analysis, AI, and IT as a Service." },
  ] as Stage[],
  pattern: ["Smaller", "Faster", "More powerful", "More connected", "More accessible"],
  patternTail: "to ordinary people",
  society: "Society became increasingly dependent on digital services.",
};

export const NET = {
  title: "1990s: Internet + World Wide Web",
  subtitle: "Global Information Access",
  points: [
    { key: "commercial", head: "Commercialization of the Internet", body: "The Internet became commercially available, the World Wide Web became widely used, and computers became connected globally." },
    { key: "email", head: "Email", body: "Email became a major method of communication — instead of relying only on letters, telephones, and physical documents." },
    { key: "impact", head: "Globalization of Information", body: "Information could travel across countries and continents very quickly. People could access information stored on remote computers around the world." },
    { key: "distinction", head: "Important Distinction", body: "The Internet existed before smartphones. Smartphones later made Internet access more mobile and widespread." },
  ],
  key: ["Internet", "Web", "Email", "Global Information Access"],
};

export const COMPARE = {
  title: "Cloud Computing vs Edge Computing",
  subtitle: "When to Process Nearby or Remotely",
  rows: [
    { label: "Processing location", cloud: "Remote servers / data centers", edge: "On or close to the data source" },
    { label: "Internet travel", cloud: "Data often travels across a network", edge: "Less need to send everything away first" },
    { label: "Response time", cloud: "May include network delay", edge: "Very fast — immediate decisions" },
    { label: "Best for", cloud: "Storage, large-scale processing, big data, AI services", edge: "Real-time processing" },
    { label: "Example", cloud: "Online storage and large-scale analysis", edge: "Autonomous vehicle braking" },
  ],
  ruleEdge: "Use Edge Computing when immediate local decisions are critical.",
  ruleCloud: "Use Cloud Computing for remote storage and large-scale computing resources.",
  scenario: "An autonomous car detects an obstacle. Where should the first braking decision happen?",
  correct: "edge" as const,
  explainRight:
    "Correct — EDGE. The car processes sensor data on board, right at the data source. No round-trip to a distant data center, so latency is minimal and the brake decision happens immediately.",
  explainWrong:
    "Not this time. Sending the data to the Cloud first means travelling across a network and waiting for a reply — that delay is dangerous. The first braking decision belongs at the EDGE, on the car itself.",
};

export const END = {
  title: "All Our Official Accounts",
  subtitle: "Scan & Follow Alfredo",
  qrs: [
    { key: "fb", label: "Facebook Page", src: "/alfredo/qr_fb.png" },
    { key: "yt", label: "YouTube Channel", src: "/alfredo/qr_yt.png" },
    { key: "wa", label: "WhatsApp Channel", src: "/alfredo/qr_wa.png" },
    { key: "web", label: "alfredoedu.com", src: "/alfredo/qr_web.png" },
  ],
  exit: "In one sentence: How did information technology move from rare machines to everyday intelligent services?",
};

export const pose = (name: string) => `/alfredo/${name}.webp`;
export const ASSETS = { logo: "/alfredo/logo.png", eniac: "/alfredo/eniac.jpg" };

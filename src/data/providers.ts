/**
 * Provider speed-test pages.
 * Each provider gets its own page at /speedtest/<slug> with the live test widget
 * plus original, provider-specific guidance. Facts are kept to safe, general
 * statements — no invented prices, package names or helpline numbers.
 * Typical speeds are published averages from named third-party sources
 * (PTA, nPerf, SpeedGeo, PakSpeed) with the source cited on the page.
 * Providers without a reliable published average simply have no `typical` entry.
 */

export type ProviderType = 'fibre' | 'mobile' | 'wireless' | 'isp';

export interface TypicalSpeed {
  download: string;
  upload: string;
  ping?: string;
  /** e.g. "nPerf fixed-internet barometer, 2025" */
  source: string;
  sourceUrl: string;
}

export interface Provider {
  slug: string;
  name: string;
  type: ProviderType;
  typeLabel: string;
  /** 1–2 sentences of original intro copy. */
  about: string;
  /** Where the provider mainly operates, in general terms. */
  coverage: string;
  typical?: TypicalSpeed;
}

export const providers: Provider[] = [
  {
    slug: 'ptcl-speed-test',
    name: 'PTCL',
    type: 'fibre',
    typeLabel: 'DSL & Flash Fiber',
    about:
      'PTCL is Pakistan’s largest fixed-line broadband provider, offering DSL over telephone lines and Flash Fiber (FTTH) in many cities. This page tests whatever PTCL connection you’re on — DSL or fibre — and explains what the result means for your package.',
    coverage: 'Nationwide — DSL in most towns and cities, Flash Fiber in selected areas.',
    typical: {
      download: '22.4 Mbps',
      upload: '19.1 Mbps',
      ping: '97 ms',
      source: 'nPerf fixed-internet barometer, Pakistan 2025 (all PTCL fixed lines)',
      sourceUrl: 'https://media.nperf.com/files/publications/PK/PK-Barometer-fixe-connections-nPerf-2025_8036.pdf',
    },
  },
  {
    slug: 'ptcl-flash-fiber',
    name: 'PTCL Flash Fiber',
    type: 'fibre',
    typeLabel: 'Fibre (FTTH)',
    about:
      'PTCL Flash Fiber is PTCL’s fibre-to-the-home service (GPON), delivering internet over glass fibre instead of copper telephone lines. That means near-symmetrical uploads, very low ping, and speeds that hold up over distance — test it over an Ethernet cable to see what your fibre line really delivers.',
    coverage: 'Selected areas in major cities — availability varies street by street.',
    typical: {
      download: '31.7 Mbps',
      upload: '30.1 Mbps',
      ping: '27 ms',
      source: 'SpeedGeo broadband ranking, Pakistan Q4 2025 – Q3 2026 (158,631 tests)',
      sourceUrl: 'https://www.speedgeo.net/statistics/pakistan',
    },
  },
  {
    slug: 'nayatel',
    name: 'Nayatel',
    type: 'fibre',
    typeLabel: 'Fibre (FTTH)',
    about:
      'Nayatel is a fibre-to-the-home provider best known in Islamabad and Rawalpindi, offering broadband, cable TV and phone over its own fibre network. Because it’s pure fibre, Nayatel connections typically have fast uploads and low, steady ping.',
    coverage: 'Islamabad, Rawalpindi, Faisalabad, Peshawar and selected other cities.',
    typical: {
      download: '28.3 Mbps',
      upload: '25.2 Mbps',
      ping: '92 ms',
      source: 'nPerf fixed-internet barometer, Pakistan 2025 (best fixed performance)',
      sourceUrl: 'https://media.nperf.com/files/publications/PK/PK-Barometer-fixe-connections-nPerf-2025_8036.pdf',
    },
  },
  {
    slug: 'stormfiber',
    name: 'StormFiber',
    type: 'fibre',
    typeLabel: 'Fibre (FTTH)',
    about:
      'StormFiber is a fibre-to-the-home internet service by Cybernet, available in Karachi, Lahore, Islamabad and other major cities. As a fibre service it usually delivers speeds close to the package rate, with much better uploads than DSL.',
    coverage: 'Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad and other major cities.',
  },
  {
    slug: 'wateen-telecom',
    name: 'Wateen Telecom',
    type: 'fibre',
    typeLabel: 'Fibre broadband',
    about:
      'Wateen Telecom provides fibre broadband and enterprise connectivity in Pakistan. If you’re on a Wateen fibre line, test over Ethernet to see the true speed of the connection rather than your Wi-Fi.',
    coverage: 'Selected cities — check availability for your address.',
  },
  {
    slug: 'transworld',
    name: 'Transworld Home',
    type: 'fibre',
    typeLabel: 'Fibre (FTTH)',
    about:
      'Transworld Home is the home fibre brand of Transworld Associates, offering fibre-to-the-home internet in Karachi and other cities. Fibre connections like this are the least affected by distance and line noise.',
    coverage: 'Karachi and selected other cities.',
    typical: {
      download: '29.1 Mbps',
      upload: '23.6 Mbps',
      ping: '113 ms',
      source: 'PakSpeed community tests, Pakistan, last 30 days (603 tests)',
      sourceUrl: 'https://pakspeed.com/best-isp',
    },
  },
  {
    slug: 'fiberlink',
    name: 'FiberLink',
    type: 'fibre',
    typeLabel: 'Fibre broadband',
    about:
      'FiberLink provides fibre internet services in Pakistan. On a fibre line your speed test should come close to your package speed — if it doesn’t, the cause is usually Wi-Fi, the router, or congestion rather than the line itself.',
    coverage: 'Selected cities — check availability for your address.',
  },
  {
    slug: 'jazz',
    name: 'Jazz',
    type: 'mobile',
    typeLabel: 'Mobile data',
    about:
      'Jazz is one of Pakistan’s largest mobile networks, and most Jazz speed tests measure 4G mobile data on a phone. Mobile speed depends heavily on signal strength, your distance from the tower, and how busy the cell is — so test in a few spots before judging it.',
    coverage: 'Nationwide mobile coverage.',
    typical: {
      download: '17.6 Mbps',
      upload: '6.3 Mbps',
      source: 'PTA Mobile Network Experience Benchmarking, Q2 2026 (4G average)',
      sourceUrl: 'https://www.rabbitroi.com/blog/mobile-internet-speed-pakistan',
    },
  },
  {
    slug: 'zong',
    name: 'Zong',
    type: 'mobile',
    typeLabel: 'Mobile data',
    about:
      'Zong is a mobile network operator in Pakistan with wide 4G coverage. Zong speed tests measure your phone’s mobile data connection — results vary a lot by location, signal bars and time of day.',
    coverage: 'Nationwide mobile coverage.',
    typical: {
      download: '18.6 Mbps',
      upload: '7.8 Mbps',
      source: 'PTA Mobile Network Experience Benchmarking, Q2 2026 (4G average)',
      sourceUrl: 'https://www.rabbitroi.com/blog/mobile-internet-speed-pakistan',
    },
  },
  {
    slug: 'ufone',
    name: 'Ufone',
    type: 'mobile',
    typeLabel: 'Mobile data',
    about:
      'Ufone is a mobile network operator in Pakistan and part of the PTCL Group. A Ufone speed test measures your 4G mobile data connection — turn Wi-Fi off first so the test measures mobile data, not your home broadband.',
    coverage: 'Nationwide mobile coverage.',
    typical: {
      download: '12.8 Mbps',
      upload: '4.4 Mbps',
      source: 'PTA Mobile Network Experience Benchmarking, Q2 2026 (4G average)',
      sourceUrl: 'https://www.rabbitroi.com/blog/mobile-internet-speed-pakistan',
    },
  },
  {
    slug: 'telenor',
    name: 'Telenor',
    type: 'mobile',
    typeLabel: 'Mobile data',
    about:
      'Telenor Pakistan is a mobile network operator, so a Telenor speed test measures your 4G (or 3G) mobile data connection. Signal strength matters more than anything else — move near a window or outdoors and test again if your result looks low.',
    coverage: 'Nationwide mobile coverage.',
    typical: {
      download: '7.5 Mbps',
      upload: '2.8 Mbps',
      source: 'PTA Mobile Network Experience Benchmarking, Q2 2026 (4G average)',
      sourceUrl: 'https://www.rabbitroi.com/blog/mobile-internet-speed-pakistan',
    },
  },
  {
    slug: 'evo',
    name: 'PTCL EVO',
    type: 'wireless',
    typeLabel: 'Wireless broadband',
    about:
      'PTCL EVO (Charji) is PTCL’s wireless broadband service, delivered through a portable device rather than a phone line. Like mobile data, EVO speed depends on signal strength and tower load — device placement makes a real difference.',
    coverage: 'Available in EVO coverage areas — check availability for your location.',
  },
  {
    slug: 'wi-tribe',
    name: 'Wi-Tribe',
    type: 'wireless',
    typeLabel: 'Wireless broadband',
    about:
      'Wi-Tribe is a wireless broadband provider. Wireless connections are sensitive to distance from the base station, obstacles and weather — test with the device near a window, facing the nearest tower, for the best result.',
    coverage: 'Selected cities — check availability for your address.',
  },
  {
    slug: 'kk-networks',
    name: 'KK Networks',
    type: 'isp',
    typeLabel: 'Internet provider',
    about:
      'KK Networks is an internet service provider in Pakistan. Use the test below to check your connection’s download and upload speeds, ping and jitter — and test over Ethernet for the most accurate reading.',
    coverage: 'Selected areas — check availability for your address.',
  },
  {
    slug: 'connect-communications',
    name: 'Connect Communications',
    type: 'isp',
    typeLabel: 'Internet provider',
    about:
      'Connect Communications is an internet service provider in Pakistan. Run the test below to measure your connection, and compare the result with the speed your package promises.',
    coverage: 'Selected areas — check availability for your address.',
  },
];

/** Test tips and speed factors, tailored by connection type. */
export const typeAdvice: Record<
  ProviderType,
  { tips: string[]; factors: string[] }
> = {
  fibre: {
    tips: [
      'Test over an Ethernet cable — Wi-Fi almost always reads slower than the fibre line itself.',
      'Restart your ONT (the small white fibre box) and router if speeds have dropped recently.',
      'Close other apps and pause downloads, cloud backups and streams on every device.',
      'Run the test 2–3 times and take the middle result.',
    ],
    factors: [
      'Wi-Fi signal and router quality — the most common bottleneck on fibre.',
      'How many devices are using the connection at once.',
      'Peak-hour congestion in your area (evenings are busiest).',
      'The server you’re testing against — this test uses the nearest edge server.',
    ],
  },
  mobile: {
    tips: [
      'Test with a strong signal — move near a window or outdoors if you’re on one or two bars.',
      'Make sure you’re on 4G, not 3G — check your phone’s status bar.',
      'Close background apps and pause app updates and cloud photo sync.',
      'Test in a few different spots: mobile speed can change completely from one room to the next.',
    ],
    factors: [
      'Signal strength and your distance from the nearest tower.',
      'How busy the cell tower is — evenings and crowded areas are slower.',
      'Whether you’re on 4G or 3G.',
      'Your phone’s modem and whether other apps are using data in the background.',
    ],
  },
  wireless: {
    tips: [
      'Place the device near a window, high up, facing the nearest tower.',
      'Check the device’s signal bars — move it until they’re as high as possible.',
      'Restart the device if speeds have dropped — it re-connects to the best available signal.',
      'Test at different times of day to separate signal problems from tower congestion.',
    ],
    factors: [
      'Signal strength at the device’s location — walls and distance eat signal.',
      'Tower load at peak hours.',
      'Weather and obstacles between you and the tower.',
      'Other devices sharing the connection.',
    ],
  },
  isp: {
    tips: [
      'Test over an Ethernet cable if you can — it shows what your line itself delivers.',
      'Close other apps and pause downloads and streams on every device.',
      'Restart your router if speeds have dropped recently.',
      'Run the test 2–3 times and take the middle result.',
    ],
    factors: [
      'Wi-Fi signal and router quality.',
      'How many devices share the connection.',
      'Peak-hour congestion in your area.',
      'The quality of the last-mile connection to your home.',
    ],
  },
};

export function getProvider(slug: string): Provider | undefined {
  return providers.find((p) => p.slug === slug);
}

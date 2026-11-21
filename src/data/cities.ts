/**
 * City speed pages at /cities/<slug>.
 * Fastest-provider figures are published averages from named sources
 * (PakSpeed 90-day city tables, PTA Q2 2026 city benchmarking).
 * Cities without a published fixed-line figure say so honestly instead
 * of inventing one.
 */

export interface CitySpeed {
  provider: string;
  /** e.g. "37.4 Mbps average download" or "fastest in the city (PTA Q2 2026)" */
  detail: string;
  source: string;
  sourceUrl: string;
}

export interface City {
  slug: string;
  name: string;
  intro: string;
  fastestFixed?: CitySpeed;
  /** Used when no published fixed-line figure exists for the city. */
  fixedNote?: string;
  fastestMobile: CitySpeed;
  fiveG: string;
  providers: string[];
  tips: string[];
}

export const cities: City[] = [
  {
    slug: 'karachi',
    name: 'Karachi',
    intro:
      'Karachi is Pakistan’s biggest internet market — and its most competitive. Transworld, StormFiber, PTCL Flash Fiber and several smaller fibre providers all run networks here, so the fastest connection on your street depends on which of them has laid fibre on it.',
    fastestFixed: {
      provider: 'Transworld',
      detail: '37.4 Mbps average download',
      source: 'PakSpeed city table, last 90 days (197 tests)',
      sourceUrl: 'https://pakspeed.com/best-isp',
    },
    fastestMobile: {
      provider: 'Zong',
      detail: '18.27 Mbps average 4G download',
      source: 'PTA Mobile Network Experience Benchmarking, Q2 2026',
      sourceUrl: 'https://www.rabbitroi.com/blog/mobile-internet-speed-pakistan',
    },
    fiveG: '385 live 5G sites — the most of any Pakistani city (October 2026).',
    providers: ['PTCL', 'Transworld', 'StormFiber', 'FiberLink', 'Connect Communications', 'Jazz', 'Zong', 'Ufone', 'Telenor'],
    tips: [
      'Fibre availability in Karachi varies street by street — check each provider for your exact address before choosing.',
      'Evening congestion is heavy in dense areas; test in the morning and again at 9 pm to see the real range.',
    ],
  },
  {
    slug: 'lahore',
    name: 'Lahore',
    intro:
      'Lahore has one of Pakistan’s fastest fixed networks on average, with PTCL, StormFiber, Optix and FiberLink all competing — and Zong’s fastest 4G of any big city. The best choice still comes down to your street.',
    fastestFixed: {
      provider: 'PTCL',
      detail: '30.6 Mbps average download',
      source: 'PakSpeed city table, last 90 days (433 tests)',
      sourceUrl: 'https://pakspeed.com/best-isp',
    },
    fastestMobile: {
      provider: 'Zong',
      detail: '21.26 Mbps average 4G download',
      source: 'PTA Mobile Network Experience Benchmarking, Q2 2026',
      sourceUrl: 'https://www.rabbitroi.com/blog/mobile-internet-speed-pakistan',
    },
    fiveG: '373 live 5G sites (October 2026) — second only to Karachi.',
    providers: ['PTCL', 'StormFiber', 'Optix', 'FiberLink', 'Nayatel (selected areas)', 'Jazz', 'Zong', 'Ufone', 'Telenor'],
    tips: [
      'Lahore’s fibre coverage is patchy by society — confirm availability for your block, not just your area.',
      'If you’re on mobile data, Zong’s 4G is the fastest measured in the city; test both SIMs where you live.',
    ],
  },
  {
    slug: 'islamabad',
    name: 'Islamabad',
    intro:
      'Islamabad has the strongest fixed broadband in Pakistan on the published averages — PTCL leads the city table, and Nayatel’s home turf is next door in the twin cities. It’s also one of the best 5G cities in the country.',
    fastestFixed: {
      provider: 'PTCL',
      detail: '39.1 Mbps average download',
      source: 'PakSpeed city table, last 90 days (89 tests)',
      sourceUrl: 'https://pakspeed.com/best-isp',
    },
    fastestMobile: {
      provider: 'Jazz',
      detail: '20.86 Mbps average 4G download',
      source: 'PTA Mobile Network Experience Benchmarking, Q2 2026',
      sourceUrl: 'https://www.rabbitroi.com/blog/mobile-internet-speed-pakistan',
    },
    fiveG: '276 live 5G sites (October 2026), concentrated in business districts and the city centre.',
    providers: ['PTCL', 'Nayatel', 'StormFiber', 'Transworld', 'Jazz', 'Zong', 'Ufone', 'Telenor'],
    tips: [
      'Nayatel and PTCL Flash Fiber both serve large parts of Islamabad — if both reach your street, test both before choosing.',
      'Ufone recorded single-site 5G tests up to 750 Mbps at F11 Markaz — but that’s one site, not the city average.',
    ],
  },
  {
    slug: 'rawalpindi',
    name: 'Rawalpindi',
    intro:
      'Rawalpindi shares Islamabad’s fibre market — Nayatel is strongest in the twin cities, and PTCL Flash Fiber is widely available. On mobile data, Jazz leads the PTA’s city benchmarking.',
    fastestMobile: {
      provider: 'Jazz',
      detail: 'Fastest 4G in the city (PTA Q2 2026 benchmarking; no city figure published)',
      source: 'PTA Mobile Network Experience Benchmarking, Q2 2026',
      sourceUrl: 'https://www.rabbitroi.com/blog/mobile-internet-speed-pakistan',
    },
    fixedNote:
      'No published fixed-line city average was available for Rawalpindi at the time of writing. Nayatel is strongest in the twin cities, and PTCL Flash Fiber is widely available — test your own line rather than trusting a national average.',
    fiveG: '5G is live in Rawalpindi — one of the 24 cities with commercial 5G since March 2026.',
    providers: ['PTCL', 'Nayatel', 'StormFiber', 'Jazz', 'Zong', 'Ufone', 'Telenor'],
    tips: [
      'Check fibre availability street by street — Nayatel and PTCL Flash Fiber coverage differs by sector.',
      'Test over an Ethernet cable to see your real line speed; Wi-Fi hides it.',
    ],
  },
  {
    slug: 'faisalabad',
    name: 'Faisalabad',
    intro:
      'Faisalabad’s fixed broadband is led by Nayatel on the published averages, with StormFiber close behind. On mobile data, Jazz is the fastest network in the city.',
    fastestFixed: {
      provider: 'Nayatel',
      detail: '34.7 Mbps average download (StormFiber second at 29.1 Mbps)',
      source: 'PakSpeed city table, last 90 days (69 tests)',
      sourceUrl: 'https://pakspeed.com/best-isp',
    },
    fastestMobile: {
      provider: 'Jazz',
      detail: '19.78 Mbps average 4G download',
      source: 'PTA Mobile Network Experience Benchmarking, Q2 2026',
      sourceUrl: 'https://www.rabbitroi.com/blog/mobile-internet-speed-pakistan',
    },
    fiveG: '144 live 5G sites (October 2026).',
    providers: ['PTCL', 'Nayatel', 'StormFiber', 'Jazz', 'Zong', 'Ufone', 'Telenor'],
    tips: [
      'Nayatel and StormFiber both serve Faisalabad — availability varies by area, so check your address with both.',
      'On mobile data, Jazz leads the city on PTA averages; Zong is the usual alternative.',
    ],
  },
  {
    slug: 'multan',
    name: 'Multan',
    intro:
      'Multan has the fastest measured mobile 4G of any city in the PTA’s Q2 2026 benchmarking — Zong at 21.60 Mbps. Fixed-line choice is narrower than in the big three cities, so check what fibre has actually reached your street.',
    fastestMobile: {
      provider: 'Zong',
      detail: '21.60 Mbps average 4G download — the highest city average in the PTA’s Q2 2026 benchmarking',
      source: 'PTA Mobile Network Experience Benchmarking, Q2 2026',
      sourceUrl: 'https://www.rabbitroi.com/blog/mobile-internet-speed-pakistan',
    },
    fixedNote:
      'No published fixed-line city average was available for Multan at the time of writing. PTCL (DSL and Flash Fiber where laid) is the main fixed provider — test your own line and compare it with your package.',
    fiveG: '5G is live in Multan — one of the 24 cities with commercial 5G since March 2026.',
    providers: ['PTCL', 'Jazz', 'Zong', 'Ufone', 'Telenor'],
    tips: [
      'Ask PTCL for the maximum speed your line can support before choosing a package — paying for 30 Mbps on a 10 Mbps line wastes money every month.',
      'On mobile data, Zong is the fastest measured network in Multan; Jazz is the usual alternative.',
    ],
  },
  {
    slug: 'peshawar',
    name: 'Peshawar',
    intro:
      'Peshawar’s mobile data is led by Jazz on the PTA’s benchmarking, and Zong leads the city’s 5G rollout. Nayatel fibre has also reached Peshawar, alongside PTCL.',
    fastestMobile: {
      provider: 'Jazz',
      detail: 'Fastest 4G in the city (PTA Q2 2026 benchmarking; no city figure published)',
      source: 'PTA Mobile Network Experience Benchmarking, Q2 2026',
      sourceUrl: 'https://www.rabbitroi.com/blog/mobile-internet-speed-pakistan',
    },
    fixedNote:
      'No published fixed-line city average was available for Peshawar at the time of writing. Nayatel and PTCL Flash Fiber both serve parts of the city — test your own line rather than trusting a national average.',
    fiveG: '122 live 5G sites (October 2026) — Zong leads 5G in Peshawar.',
    providers: ['PTCL', 'Nayatel', 'Jazz', 'Zong', 'Ufone', 'Telenor'],
    tips: [
      'If you want 5G in Peshawar, Zong has the strongest 5G presence in the city.',
      'Check fibre availability for your exact address — coverage differs by area.',
    ],
  },
  {
    slug: 'quetta',
    name: 'Quetta',
    intro:
      'Quetta has the single fastest city 4G average in the PTA’s Q2 2026 benchmarking — Jazz at 22.41 Mbps. Fixed-line choice is narrower than in the big cities, and 5G is live but limited.',
    fastestMobile: {
      provider: 'Jazz',
      detail: '22.41 Mbps average 4G download — the highest city average in the PTA’s Q2 2026 benchmarking',
      source: 'PTA Mobile Network Experience Benchmarking, Q2 2026',
      sourceUrl: 'https://www.rabbitroi.com/blog/mobile-internet-speed-pakistan',
    },
    fixedNote:
      'No published fixed-line city average was available for Quetta at the time of writing. PTCL is the main fixed provider — test your own line and compare it with your package.',
    fiveG: '5G is live in Quetta — one of the 24 cities with commercial 5G since March 2026; Zong leads 5G here.',
    providers: ['PTCL', 'Jazz', 'Zong', 'Ufone', 'Telenor'],
    tips: [
      'On mobile data, Jazz is the fastest measured network in Quetta; Zong leads the city’s 5G.',
      'Test at different times of day — mountain terrain and tower load make Quetta speeds vary more than in flat cities.',
    ],
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

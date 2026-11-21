/**
 * Provider comparison pages at /compare/<slug>.
 * Every number is a published average from a named source, cited on the page.
 * Where sources disagree, the page says so — different samples and methods
 * produce different averages, and hiding that would be dishonest.
 */

export interface CompareRow {
  metric: string;
  a: string;
  b: string;
  /** 'a' | 'b' | 'tie' */
  winner: 'a' | 'b' | 'tie';
}

export interface Comparison {
  slug: string;
  aName: string;
  bName: string;
  aSlug: string;
  bSlug: string;
  title: string;
  intro: string;
  verdict: string;
  rows: CompareRow[];
  aStrengths: string[];
  bStrengths: string[];
  choose: { label: string; text: string }[];
  sources: { label: string; url: string }[];
  faqs: { q: string; a: string }[];
}

export const comparisons: Comparison[] = [
  {
    slug: 'ptcl-vs-nayatel',
    aName: 'PTCL',
    bName: 'Nayatel',
    aSlug: 'ptcl-speed-test',
    bSlug: 'nayatel',
    title: 'PTCL vs Nayatel: Speed, Ping & Coverage Compared',
    intro:
      'PTCL is Pakistan’s biggest fixed-line provider; Nayatel is the premium fibre specialist of Islamabad and Rawalpindi. Both offer fibre, but they serve different areas and their measured speeds tell different stories depending on which study you read. Here’s what the published data actually says.',
    verdict:
      'On published averages, Nayatel’s fibre delivers higher typical speeds than PTCL’s overall fixed network — but PTCL Flash Fiber specifically is competitive with Nayatel, and PTCL is available almost everywhere Nayatel isn’t. If both reach your street, test both; if only one does, the choice is already made.',
    rows: [
      {
        metric: 'Avg download (nPerf 2025)',
        a: '22.4 Mbps',
        b: '28.3 Mbps',
        winner: 'b',
      },
      {
        metric: 'Avg upload (nPerf 2025)',
        a: '19.1 Mbps',
        b: '25.2 Mbps',
        winner: 'b',
      },
      {
        metric: 'Avg latency (nPerf 2025)',
        a: '97 ms',
        b: '92 ms',
        winner: 'b',
      },
      {
        metric: 'nPerf score 2025',
        a: '44,528',
        b: '52,257 (best fixed)',
        winner: 'b',
      },
      {
        metric: 'Avg download, last 30 days (PakSpeed)',
        a: '21.7 Mbps',
        b: '32.8 Mbps',
        winner: 'b',
      },
      {
        metric: 'Ookla Speedtest score, H1 2025',
        a: '56.95 (Flash Fiber)',
        b: '56.31',
        winner: 'a',
      },
      {
        metric: 'Coverage',
        a: 'Nationwide',
        b: 'Islamabad, Rawalpindi, Faisalabad, Peshawar + selected cities',
        winner: 'a',
      },
    ],
    aStrengths: [
      'Available almost everywhere — DSL in most towns, Flash Fiber in many cities.',
      'Flash Fiber specifically ranks first in Pakistan on SpeedGeo’s broadband ranking (31.7 Mbps average download, Q4 2025 – Q3 2026).',
      'One provider for broadband, landline and TV in most areas.',
    ],
    bStrengths: [
      'Best fixed-internet performance in Pakistan in nPerf’s 2025 barometer, across download, upload and latency.',
      'Pure fibre (FTTH) — no copper DSL in the mix, so performance is more consistent.',
      'Strong plan-delivery ratio: users typically get close to their subscribed speed.',
    ],
    choose: [
      {
        label: 'Choose PTCL if',
        text: 'Nayatel doesn’t cover your area, or you’re on Flash Fiber — where PTCL’s fibre is genuinely competitive — and you want the widest availability.',
      },
      {
        label: 'Choose Nayatel if',
        text: 'It covers your street and you want the highest measured average speeds with consistent fibre performance.',
      },
    ],
    sources: [
      { label: 'nPerf fixed-internet barometer, Pakistan 2025', url: 'https://media.nperf.com/files/publications/PK/PK-Barometer-fixe-connections-nPerf-2025_8036.pdf' },
      { label: 'PakSpeed best ISP rankings (last 30 days)', url: 'https://pakspeed.com/best-isp' },
      { label: 'SpeedGeo internet speed in Pakistan', url: 'https://www.speedgeo.net/statistics/pakistan' },
    ],
    faqs: [
      {
        q: 'Which is faster, PTCL or Nayatel?',
        a: 'On published averages, Nayatel is faster overall: nPerf’s 2025 barometer puts Nayatel at 28.3 Mbps average download versus 22.4 Mbps for PTCL’s fixed network. But that compares Nayatel’s pure fibre with PTCL’s mix of fibre and older DSL — PTCL Flash Fiber on its own averages 31.7 Mbps (SpeedGeo, Q4 2025 – Q3 2026), ahead of Nayatel’s 21.6 Mbps on the same ranking. Your street matters more than the national average: test both where you live.',
      },
      {
        q: 'Is Nayatel available outside Islamabad and Rawalpindi?',
        a: 'Nayatel has expanded to Faisalabad, Peshawar and selected other cities, but its footprint is far smaller than PTCL’s nationwide network. Check availability for your exact address — fibre availability varies street by street.',
      },
      {
        q: 'Should I switch from PTCL DSL to Nayatel fibre?',
        a: 'If Nayatel fibre reaches your home, it will almost certainly beat PTCL DSL on speed, uploads and ping — fibre versus copper is not a close contest. The comparison that matters is Nayatel fibre versus PTCL Flash Fiber, where the two are much closer.',
      },
    ],
  },
  {
    slug: 'ptcl-vs-transworld',
    aName: 'PTCL',
    bName: 'Transworld',
    aSlug: 'ptcl-speed-test',
    bSlug: 'transworld',
    title: 'PTCL vs Transworld: Speed, Ping & Coverage Compared',
    intro:
      'PTCL and Transworld are the two closest rivals at the top of Pakistan’s fixed-broadband rankings — Ookla’s H1 2025 scores put just 0.24 points between them. Transworld is the fibre challenger, strongest in Karachi; PTCL is the nationwide incumbent. Here’s how they compare on published data.',
    verdict:
      'This is the closest race in Pakistani broadband. Transworld edges the community-test averages, PTCL edges the Ookla score, and both are within a few percent of each other. Choose on coverage and service in your area — the speed difference is too small to decide it.',
    rows: [
      {
        metric: 'Ookla Speedtest score, H1 2025',
        a: '56.95 (Flash Fiber)',
        b: '56.71',
        winner: 'a',
      },
      {
        metric: 'Avg download, last 30 days (PakSpeed)',
        a: '21.7 Mbps (972 tests)',
        b: '29.1 Mbps (603 tests)',
        winner: 'b',
      },
      {
        metric: 'Avg upload, last 30 days (PakSpeed)',
        a: '9.2 Mbps',
        b: '23.6 Mbps',
        winner: 'b',
      },
      {
        metric: 'Avg ping, last 30 days (PakSpeed)',
        a: '170 ms',
        b: '113 ms',
        winner: 'b',
      },
      {
        metric: 'Coverage',
        a: 'Nationwide',
        b: 'Karachi and selected cities',
        winner: 'a',
      },
    ],
    aStrengths: [
      'Nationwide availability — DSL almost everywhere, Flash Fiber in many cities.',
      'Highest Ookla Speedtest score for fixed broadband in Pakistan, H1 2025 (56.95).',
      'Flash Fiber averages 31.7 Mbps download on SpeedGeo’s ranking (Q4 2025 – Q3 2026).',
    ],
    bStrengths: [
      'Higher average download and upload on recent community tests (PakSpeed, last 30 days).',
      'Lower average ping than PTCL on the same tests.',
      'Owns and operates international submarine cable landings, including SMW5 and SMW6.',
    ],
    choose: [
      {
        label: 'Choose PTCL if',
        text: 'Transworld doesn’t cover your area, or you’re on Flash Fiber — PTCL’s fibre is right at the top of the national rankings.',
      },
      {
        label: 'Choose Transworld if',
        text: 'It covers your street in Karachi or another served city and you want the higher recent community-test averages.',
      },
    ],
    sources: [
      { label: 'PakSpeed best ISP rankings (last 30 days)', url: 'https://pakspeed.com/best-isp' },
      { label: 'SpeedGeo internet speed in Pakistan', url: 'https://www.speedgeo.net/statistics/pakistan' },
    ],
    faqs: [
      {
        q: 'Which is faster, PTCL or Transworld?',
        a: 'It depends on the measurement. Ookla’s H1 2025 Speedtest scores put PTCL Flash Fiber marginally ahead (56.95 vs 56.71). PakSpeed’s community tests from the last 30 days put Transworld ahead on download (29.1 vs 21.7 Mbps) and upload (23.6 vs 9.2 Mbps). The honest answer: they’re very close, and your street matters more than either average.',
      },
      {
        q: 'Is Transworld available outside Karachi?',
        a: 'Transworld Home fibre is strongest in Karachi and available in selected other cities. PTCL’s network covers far more of the country. Check availability for your exact address before deciding.',
      },
      {
        q: 'Why do the averages disagree?',
        a: 'Different samples and methods. Ookla scores combine speed, consistency and other factors across a large sample; PakSpeed averages self-selected community tests over 30 days; and PTCL’s figures mix fibre and older DSL lines while Transworld’s are pure fibre. Compare like with like — fibre against fibre — and the gap narrows sharply.',
      },
    ],
  },
  {
    slug: 'jazz-vs-zong',
    aName: 'Jazz',
    bName: 'Zong',
    aSlug: 'jazz',
    bSlug: 'zong',
    title: 'Jazz vs Zong: 4G Speed, Coverage & Ping Compared',
    intro:
      'Jazz and Zong are Pakistan’s two biggest mobile networks, and their 4G speeds are close enough that the winner depends on where you stand. The PTA’s own benchmarking puts Zong slightly ahead nationally — but Jazz wins in several big cities. Here’s the data.',
    verdict:
      'Nationally it’s a near-tie with Zong slightly ahead on the PTA’s averages. But mobile speed is local: Jazz is fastest in Islamabad, Rawalpindi, Faisalabad and Peshawar, while Zong leads in Lahore, Multan and Karachi. Test both SIMs where you actually live and work.',
    rows: [
      {
        metric: 'Avg 4G download (PTA Q2 2026)',
        a: '17.6 Mbps',
        b: '18.6 Mbps',
        winner: 'b',
      },
      {
        metric: 'Avg 4G upload (PTA Q2 2026)',
        a: '6.3 Mbps',
        b: '7.8 Mbps',
        winner: 'b',
      },
      {
        metric: 'Time on 4G (PTA Q2 2026)',
        a: '93.3%',
        b: '96.6%',
        winner: 'b',
      },
      {
        metric: 'Avg mobile download, last 30 days (PakSpeed)',
        a: '22.5 Mbps (908 tests)',
        b: '—',
        winner: 'tie',
      },
      {
        metric: 'Fastest in Lahore',
        a: '—',
        b: 'Zong, 21.3 Mbps',
        winner: 'b',
      },
      {
        metric: 'Fastest in Islamabad',
        a: 'Jazz, 20.9 Mbps',
        b: '—',
        winner: 'a',
      },
      {
        metric: 'Fastest in Karachi',
        a: '—',
        b: 'Zong, 18.3 Mbps',
        winner: 'b',
      },
    ],
    aStrengths: [
      'Largest mobile subscriber base in Pakistan — widest overall presence.',
      'Fastest 4G in Islamabad (20.9 Mbps), Rawalpindi, Faisalabad and Peshawar on PTA city data.',
      'Strong recent community-test average: 22.5 Mbps on PakSpeed’s last 30 days of tests.',
    ],
    bStrengths: [
      'Highest national 4G averages in the PTA’s Q2 2026 benchmarking: 18.6 Mbps download, 7.8 Mbps upload.',
      'Most time on 4G of any network (96.6%), so fewer drops to 3G.',
      'Fastest 4G in Lahore (21.3 Mbps), Multan and Karachi on PTA city data.',
    ],
    choose: [
      {
        label: 'Choose Jazz if',
        text: 'You’re in Islamabad, Rawalpindi, Faisalabad or Peshawar — Jazz leads the PTA city tables there — or most of your contacts are on Jazz.',
      },
      {
        label: 'Choose Zong if',
        text: 'You’re in Lahore, Multan or Karachi, or you want the highest national 4G averages and the most time on 4G.',
      },
    ],
    sources: [
      { label: 'PTA Mobile Network Experience Benchmarking, Q2 2026 (via RabbitROI)', url: 'https://www.rabbitroi.com/blog/mobile-internet-speed-pakistan' },
      { label: 'PakSpeed best ISP rankings (last 30 days)', url: 'https://pakspeed.com/best-isp' },
    ],
    faqs: [
      {
        q: 'Which is faster, Jazz or Zong?',
        a: 'Nationally, Zong is slightly ahead: the PTA’s Q2 2026 benchmarking gives Zong 18.6 Mbps average 4G download versus 17.6 Mbps for Jazz, with higher uploads and more time on 4G. But city by city it flips — Jazz is fastest in Islamabad, Rawalpindi, Faisalabad and Peshawar, while Zong leads in Lahore, Multan and Karachi. Test both where you live.',
      },
      {
        q: 'How do I test Jazz vs Zong fairly?',
        a: 'Use the same phone, in the same spot, at the same time of day — one SIM at a time, with Wi-Fi off. Run each test two or three times and compare the middle results. Testing one network at 9 am and the other at 9 pm tells you nothing.',
      },
      {
        q: 'Does 5G change the comparison?',
        a: '5G is still limited in Pakistan and the PTA’s published averages are for 4G. Both networks are rolling out 5G in selected areas; where it’s available, speeds are far higher than 4G, but coverage is the deciding factor — not the headline speed.',
      },
    ],
  },
];

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

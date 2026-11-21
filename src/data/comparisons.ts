/**
 * Provider comparison pages at /compare/<slug>.
 * Every number is a published average from a named source, cited on the page.
 * Where sources disagree, the page says so, different samples and methods
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
  /** Optional custom meta description; defaults to a generated one. */
  description?: string;
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
      'On published averages, Nayatel’s fibre delivers higher typical speeds than PTCL’s overall fixed network, but PTCL Flash Fiber specifically is competitive with Nayatel, and PTCL is available almost everywhere Nayatel isn’t. If both reach your street, test both; if only one does, the choice is already made.',
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
      'Available almost everywhere, DSL in most towns, Flash Fiber in many cities.',
      'Flash Fiber specifically ranks first in Pakistan on SpeedGeo’s broadband ranking (31.7 Mbps average download, Q4 2025 – Q3 2026).',
      'One provider for broadband, landline and TV in most areas.',
    ],
    bStrengths: [
      'Best fixed-internet performance in Pakistan in nPerf’s 2025 barometer, across download, upload and latency.',
      'Pure fibre (FTTH), no copper DSL in the mix, so performance is more consistent.',
      'Strong plan-delivery ratio: users typically get close to their subscribed speed.',
    ],
    choose: [
      {
        label: 'Choose PTCL if',
        text: 'Nayatel doesn’t cover your area, or you’re on Flash Fiber, where PTCL’s fibre is genuinely competitive, and you want the widest availability.',
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
        a: 'On published averages, Nayatel is faster overall: nPerf’s 2025 barometer puts Nayatel at 28.3 Mbps average download versus 22.4 Mbps for PTCL’s fixed network. But that compares Nayatel’s pure fibre with PTCL’s mix of fibre and older DSL, PTCL Flash Fiber on its own averages 31.7 Mbps (SpeedGeo, Q4 2025 – Q3 2026), ahead of Nayatel’s 21.6 Mbps on the same ranking. Your street matters more than the national average: test both where you live.',
      },
      {
        q: 'Is Nayatel available outside Islamabad and Rawalpindi?',
        a: 'Nayatel has expanded to Faisalabad, Peshawar and selected other cities, but its footprint is far smaller than PTCL’s nationwide network. Check availability for your exact address, fibre availability varies street by street.',
      },
      {
        q: 'Should I switch from PTCL DSL to Nayatel fibre?',
        a: 'If Nayatel fibre reaches your home, it will almost certainly beat PTCL DSL on speed, uploads and ping, fibre versus copper is not a close contest. The comparison that matters is Nayatel fibre versus PTCL Flash Fiber, where the two are much closer.',
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
      'PTCL and Transworld are the two closest rivals at the top of Pakistan’s fixed-broadband rankings, Ookla’s H1 2025 scores put just 0.24 points between them. Transworld is the fibre challenger, strongest in Karachi; PTCL is the nationwide incumbent. Here’s how they compare on published data.',
    verdict:
      'This is the closest race in Pakistani broadband. Transworld edges the community-test averages, PTCL edges the Ookla score, and both are within a few percent of each other. Choose on coverage and service in your area, the speed difference is too small to decide it.',
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
      'Nationwide availability, DSL almost everywhere, Flash Fiber in many cities.',
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
        text: 'Transworld doesn’t cover your area, or you’re on Flash Fiber, PTCL’s fibre is right at the top of the national rankings.',
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
        a: 'Different samples and methods. Ookla scores combine speed, consistency and other factors across a large sample; PakSpeed averages self-selected community tests over 30 days; and PTCL’s figures mix fibre and older DSL lines while Transworld’s are pure fibre. Compare like with like, fibre against fibre, and the gap narrows sharply.',
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
      'Jazz and Zong are Pakistan’s two biggest mobile networks, and their 4G speeds are close enough that the winner depends on where you stand. The PTA’s own benchmarking puts Zong slightly ahead nationally, but Jazz wins in several big cities. Here’s the data.',
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
        b: 'Not published',
        winner: 'tie',
      },
      {
        metric: 'Fastest in Lahore',
        a: 'Not fastest',
        b: 'Zong, 21.3 Mbps',
        winner: 'b',
      },
      {
        metric: 'Fastest in Islamabad',
        a: 'Jazz, 20.9 Mbps',
        b: 'Not fastest',
        winner: 'a',
      },
      {
        metric: 'Fastest in Karachi',
        a: 'Not fastest',
        b: 'Zong, 18.3 Mbps',
        winner: 'b',
      },
    ],
    aStrengths: [
      'Largest mobile subscriber base in Pakistan, widest overall presence.',
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
        text: 'You’re in Islamabad, Rawalpindi, Faisalabad or Peshawar, Jazz leads the PTA city tables there, or most of your contacts are on Jazz.',
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
        a: 'Nationally, Zong is slightly ahead: the PTA’s Q2 2026 benchmarking gives Zong 18.6 Mbps average 4G download versus 17.6 Mbps for Jazz, with higher uploads and more time on 4G. But city by city it flips, Jazz is fastest in Islamabad, Rawalpindi, Faisalabad and Peshawar, while Zong leads in Lahore, Multan and Karachi. Test both where you live.',
      },
      {
        q: 'How do I test Jazz vs Zong fairly?',
        a: 'Use the same phone, in the same spot, at the same time of day, one SIM at a time, with Wi-Fi off. Run each test two or three times and compare the middle results. Testing one network at 9 am and the other at 9 pm tells you nothing.',
      },
      {
        q: 'Does 5G change the comparison?',
        a: '5G is still limited in Pakistan and the PTA’s published averages are for 4G. Both networks are rolling out 5G in selected areas; where it’s available, speeds are far higher than 4G, but coverage is the deciding factor, not the headline speed.',
      },
    ],
  },
  {
    slug: 'ptcl-vs-stormfiber',
    aName: 'PTCL',
    bName: 'StormFiber',
    aSlug: 'ptcl-speed-test',
    bSlug: 'stormfiber',
    title: 'PTCL vs StormFiber: Speed, Ping & Coverage Compared',
    intro:
      'PTCL is the nationwide incumbent; StormFiber (by Cybernet) is the pure-fibre challenger in Karachi, Lahore, Islamabad and Faisalabad. Recent community tests put StormFiber ahead on measured averages, while PTCL’s fibre tops the national rankings, here’s how to read the two pictures.',
    verdict:
      'On recent community tests StormFiber delivers higher average speeds and much lower ping than PTCL’s overall network, but PTCL Flash Fiber on its own is a different story, topping SpeedGeo’s national ranking. If StormFiber reaches your street it’s a strong pick; if it doesn’t, PTCL Flash Fiber is the closest equivalent.',
    rows: [
      {
        metric: 'Avg download, last 30 days (PakSpeed)',
        a: '21.7 Mbps (972 tests)',
        b: '26.7 Mbps (1,083 tests)',
        winner: 'b',
      },
      {
        metric: 'Avg upload, last 30 days (PakSpeed)',
        a: '9.2 Mbps',
        b: '20.5 Mbps',
        winner: 'b',
      },
      {
        metric: 'Avg ping, last 30 days (PakSpeed)',
        a: '170 ms',
        b: '60 ms',
        winner: 'b',
      },
      {
        metric: 'Avg download (nPerf 2025)',
        a: '22.4 Mbps',
        b: '16.6 Mbps (Cybernet, StormFiber’s parent)',
        winner: 'a',
      },
      {
        metric: 'Avg latency (nPerf 2025)',
        a: '97 ms',
        b: '95 ms (Cybernet)',
        winner: 'b',
      },
      {
        metric: 'Coverage',
        a: 'Nationwide',
        b: 'Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad + major cities',
        winner: 'a',
      },
    ],
    aStrengths: [
      'Available almost everywhere, DSL in most towns, Flash Fiber in many cities.',
      'Flash Fiber specifically ranks first in Pakistan on SpeedGeo’s broadband ranking (31.7 Mbps average download, Q4 2025 – Q3 2026).',
      'Highest Ookla Speedtest score for fixed broadband in Pakistan, H1 2025 (56.95).',
    ],
    bStrengths: [
      'Higher average download and upload on recent community tests (PakSpeed, last 30 days).',
      'Much lower average ping than PTCL on the same tests (60 ms vs 170 ms).',
      'Pure fibre (FTTH), no copper DSL in the mix, so performance is more consistent.',
    ],
    choose: [
      {
        label: 'Choose PTCL if',
        text: 'StormFiber doesn’t cover your area, or you’re on Flash Fiber, where PTCL’s fibre is right at the top of the national rankings.',
      },
      {
        label: 'Choose StormFiber if',
        text: 'It covers your street and you want the higher recent community-test averages and lower ping.',
      },
    ],
    sources: [
      { label: 'PakSpeed best ISP rankings (last 30 days)', url: 'https://pakspeed.com/best-isp' },
      { label: 'nPerf fixed-internet barometer, Pakistan 2025', url: 'https://media.nperf.com/files/publications/PK/PK-Barometer-fixe-connections-nPerf-2025_8036.pdf' },
      { label: 'SpeedGeo internet speed in Pakistan', url: 'https://www.speedgeo.net/statistics/pakistan' },
    ],
    faqs: [
      {
        q: 'Which is faster, PTCL or StormFiber?',
        a: 'On recent community tests, StormFiber: PakSpeed’s last 30 days of tests put StormFiber at 26.7 Mbps average download versus 21.7 Mbps for PTCL, with much faster uploads (20.5 vs 9.2 Mbps) and lower ping (60 vs 170 ms). But that compares StormFiber’s pure fibre with PTCL’s mix of fibre and older DSL, PTCL Flash Fiber on its own averages 31.7 Mbps on SpeedGeo’s ranking. Fibre against fibre, the two are close.',
      },
      {
        q: 'Is StormFiber available in my city?',
        a: 'StormFiber serves Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad and other major cities, but not everywhere in them. PTCL’s network covers far more of the country. Check availability for your exact address before deciding.',
      },
      {
        q: 'Why is PTCL’s average ping so high on PakSpeed?',
        a: 'PTCL’s average mixes fibre and older DSL lines, and DSL adds latency, especially on interleaved line profiles. PTCL Flash Fiber’s average ping is far lower: 27 ms on SpeedGeo’s ranking. If you’re on DSL and ping matters, ask PTCL about a FastPath line profile.',
      },
    ],
  },
  {
    slug: 'dsl-vs-flash-fiber',
    aName: 'PTCL DSL',
    bName: 'PTCL Flash Fiber',
    aSlug: 'ptcl-speed-test',
    bSlug: 'ptcl-flash-fiber',
    title: 'PTCL DSL vs Flash Fiber: Speed, Uploads, Ping & Reliability Compared',
    description:
      'PTCL DSL vs Flash Fiber: the two technologies compared on speed, uploads, ping, reliability and which one fits your home.',
    intro:
      'PTCL sells two very different home connections under one brand: DSL over copper telephone lines, and Flash Fiber over glass fibre. They aren’t speed tiers of the same thing, they’re different technologies, and the difference shows up in uploads, ping, reliability and what your line can ever deliver.',
    verdict:
      'If Flash Fiber reaches your street, take it, it’s faster, more stable, and the product PTCL is investing in. DSL is the right choice only where fibre hasn’t arrived yet, or for light use on a tight budget.',
    rows: [
      {
        metric: 'Technology',
        a: 'Copper telephone line (ADSL/VDSL)',
        b: 'Fibre-optic cable (FTTH/GPON)',
        winner: 'tie',
      },
      {
        metric: 'Top speed',
        a: 'Up to ~100 Mbps (line-dependent)',
        b: 'Up to 1 Gbps',
        winner: 'b',
      },
      {
        metric: 'Upload speed',
        a: 'Asymmetric, typically 1–1.5 Mbps',
        b: 'Near-symmetrical, close to download speed',
        winner: 'b',
      },
      {
        metric: 'Ping',
        a: 'Higher and more variable',
        b: 'Low and stable (~27 ms average)',
        winner: 'b',
      },
      {
        metric: 'Effect of distance',
        a: 'Speed drops the further you are from the exchange',
        b: 'No meaningful drop over distance',
        winner: 'b',
      },
      {
        metric: 'Reliability',
        a: 'Affected by line condition, joints and rain',
        b: 'Stable; immune to electrical interference',
        winner: 'b',
      },
      {
        metric: 'Availability',
        a: 'Nationwide, including small towns',
        b: '100+ cities, selected streets',
        winner: 'a',
      },
      {
        metric: 'Best for',
        a: 'Light browsing, email, HD streaming',
        b: '4K streaming, gaming, work from home',
        winner: 'b',
      },
    ],
    aStrengths: [
      'Available almost everywhere PTCL has a telephone exchange, including towns fibre hasn’t reached.',
      'Uses your existing phone line, so installation is usually quick.',
      'Enough for light use: browsing, email, calls and HD streaming on one or two devices.',
    ],
    bStrengths: [
      'Much faster downloads and near-symmetrical uploads, video calls and cloud backups feel completely different.',
      'Low, stable ping: 27 ms average on SpeedGeo’s ranking, versus DSL’s higher and more variable latency.',
      'Speed doesn’t degrade with distance from the exchange, and the line isn’t affected by rain or line noise the way copper is.',
    ],
    choose: [
      {
        label: 'Choose DSL if',
        text: 'Flash Fiber hasn’t reached your street, or your household only browses, emails and streams in HD, and you’d rather not pay for speed you won’t use.',
      },
      {
        label: 'Choose Flash Fiber if',
        text: 'It’s available at your address and anyone in the house streams in 4K, games online, works from home, or uploads large files.',
      },
    ],
    sources: [
      { label: 'SpeedGeo internet speed in Pakistan', url: 'https://www.speedgeo.net/statistics/pakistan' },
      { label: 'nPerf fixed-internet barometer, Pakistan 2025', url: 'https://media.nperf.com/files/publications/PK/PK-Barometer-fixe-connections-nPerf-2025_8036.pdf' },
    ],
    faqs: [
      {
        q: 'Can I upgrade from PTCL DSL to Flash Fiber?',
        a: 'Yes, call PTCL on 1218 and ask whether Flash Fiber is available at your address. The upgrade needs a new fibre cable run to your home and an ONT (the small white fibre box) installed; it isn’t just a settings change. Check availability before you get attached to a fibre package.',
      },
      {
        q: 'Is DSL enough for Netflix?',
        a: 'For HD streaming, yes, Netflix needs about 5 Mbps for 1080p, and a healthy 10–20 Mbps DSL line handles it. For 4K you need about 15 Mbps of steady speed per stream, which is where DSL starts to struggle and fibre wins clearly.',
      },
      {
        q: 'Why is my DSL slower than my package?',
        a: 'DSL speed depends on your distance from the exchange and the condition of the copper line, a long or damaged line simply can’t carry the headline speed. Check your SNR margin and line attenuation in the modem settings; low SNR (below 6 dB) or high attenuation (above 50 dB) explains most slow DSL lines.',
      },
    ],
  },
  {
    slug: 'jazz-5g-vs-zong-5g',
    aName: 'Jazz 5G',
    bName: 'Zong 5G',
    aSlug: 'jazz-5g',
    bSlug: 'zong-5g',
    title: 'Jazz 5G vs Zong 5G: Sites, Spectrum, Speeds & Cities Compared',
    description:
      'Jazz 5G vs Zong 5G: live sites, spectrum, bands, speeds and strongest cities compared. Pakistan’s 5G race on the published numbers.',
    intro:
      'Jazz and Zong launched Pakistan’s first commercial 5G on the same day, 19 March 2026. Eight months on, Jazz leads on scale with over 1,000 sites, while Zong leads in several cities. Here’s the 5G race on the published numbers.',
    verdict:
      'Jazz has the bigger 5G network by a wide margin, and the most spectrum. But 5G is still pockets, not blanket coverage, Zong leads in Peshawar, Quetta, Sialkot and Sheikhupura. Check which network has a site near you before choosing on 5G alone.',
    rows: [
      {
        metric: 'Live 5G sites (Oct 2026)',
        a: '1,015',
        b: '640',
        winner: 'a',
      },
      {
        metric: 'Spectrum won (Mar 2026 auction)',
        a: '190 MHz',
        b: '110 MHz',
        winner: 'a',
      },
      {
        metric: '5G bands',
        a: '700, 2300, 2600, 3500 MHz',
        b: '2600, 3500 MHz',
        winner: 'a',
      },
      {
        metric: 'Commercial launch',
        a: '19–20 March 2026',
        b: '19 March 2026',
        winner: 'tie',
      },
      {
        metric: 'Strongest cities',
        a: 'Karachi, Lahore, Faisalabad, Multan',
        b: 'Peshawar, Quetta, Sialkot, Sheikhupura',
        winner: 'tie',
      },
      {
        metric: 'Single-site test speeds',
        a: '200–500 Mbps (field tests, strong coverage)',
        b: '244–290 Mbps (near towers, May 2026)',
        winner: 'tie',
      },
      {
        metric: '4G fallback (PTA Q2 2026 avg download)',
        a: '17.6 Mbps',
        b: '18.6 Mbps',
        winner: 'b',
      },
    ],
    aStrengths: [
      'Most 5G sites in Pakistan by a wide margin, 1,015 of the country’s 1,782 (October 2026).',
      'Most spectrum (190 MHz) and the only operator holding all four 5G bands, including 700 MHz for wider coverage.',
      'Strongest 5G presence in Karachi, Lahore, Faisalabad and Multan.',
    ],
    bStrengths: [
      'First to launch commercial 5G, live in 16+ cities on day one.',
      'Leads 5G in Peshawar, Quetta, Sialkot and Sheikhupura.',
      'Higher 4G averages than Jazz (18.6 vs 17.6 Mbps), the network you fall back to outside 5G pockets.',
    ],
    choose: [
      {
        label: 'Choose Jazz 5G if',
        text: 'You’re in Karachi, Lahore, Faisalabad or Multan, or you want the widest 5G network and the most spectrum behind it.',
      },
      {
        label: 'Choose Zong 5G if',
        text: 'You’re in Peshawar, Quetta, Sialkot or Sheikhupura, Zong leads 5G there, or you want the stronger 4G fallback.',
      },
    ],
    sources: [
      { label: 'Beam: 5G in Pakistan, cities, Jazz vs Zong vs Ufone', url: 'https://beam.pk/5g-in-pakistan-cities-jazz-vs-zong-vs-ufone-and-phones-that-work/' },
      { label: '5Gistan: 5G in Pakistan, launch, timeline & status', url: 'https://5gistan.com/5g-in-pakistan/' },
      { label: 'PTA Mobile Network Experience Benchmarking, Q2 2026 (via RabbitROI)', url: 'https://www.rabbitroi.com/blog/mobile-internet-speed-pakistan' },
    ],
    faqs: [
      {
        q: 'Do I need a new SIM for 5G?',
        a: 'No, a recent 4G SIM usually works on 5G. What you need is a phone that supports band n78 (3.5 GHz), Pakistan’s main 5G band, and to be near a 5G site. Set the network mode to 5G/Auto in your phone’s mobile network settings.',
      },
      {
        q: 'How fast is 5G in Pakistan really?',
        a: 'Community speed tests from January to June 2026 put the median 5G download at about 220 Mbps; another tracker reports an average near 130 Mbps over the same period. Single-site tests near towers run higher (200–500 Mbps on Jazz, 244–290 Mbps on Zong). The official roadmap is more modest, targeting 50–100 Mbps averages as the network matures. Your speed depends on distance from the tower and how many people are connected.',
      },
      {
        q: 'Is 5G available in my city?',
        a: '5G is live in 24 cities, but only in pockets, business districts, university campuses, hospitals and city centres got sites first. Check Jazz’s and Zong’s coverage maps for your exact area before buying a phone just for 5G.',
      },
    ],
  },
];

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  icon: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export interface BlogSource {
  id: number;
  text: string;
  url?: string;
}

export const posts: BlogPost[] = [
  {
    slug: 'quick-start-guide',
    title: 'JewelSliding Quick Start Guide: Read the Gap Before You Move',
    excerpt: 'The fastest way to understand JewelSliding is to stop looking at the brightest gem first and start by reading the empty gap that matters most.',
    icon: '💎',
    date: 'March 27, 2026',
    readTime: '6 min read',
    category: 'Game',
    content: `
      <h2>Start With the Empty Space</h2>
      <p>New players often watch the gem blocks instead of the board. In JewelSliding, the most important object is usually the open gap near the lower rows. That space tells you which block can move safely, whether a full stripe is one step away, and how much recovery room you will have after the next wave arrives.</p>
      <p>If you begin each turn by locating the most valuable gap, the rest of the board becomes easier to read. The game stops feeling like random shuffling and starts feeling like a short sequence of clear decisions.</p>

      <h3>Three Fast Questions</h3>
      <ol>
        <li>Which gap is closest to finishing a row?</li>
        <li>Which gem block can reach it without trapping the board?</li>
        <li>What lane stays open after the move?</li>
      </ol>

      <h3>Why This Works</h3>
      <p>JewelSliding rewards structure. Completing a horizontal stripe does more than score points. It restores breathing room, lowers panic, and gives you a cleaner starting state for the next wave. That is why board reading matters more than flashy movement.</p>
    `,
  },
  {
    slug: 'row-clearing-strategy',
    title: 'Row Clearing Strategy: How to Survive Longer in JewelSliding',
    excerpt: 'Good JewelSliding runs come from clearing for space first, score second, and protecting one recovery lane when the board starts to crowd.',
    icon: '📏',
    date: 'March 27, 2026',
    readTime: '7 min read',
    category: 'Strategy',
    content: `
      <h2>Space Is the Real Currency</h2>
      <p>It is tempting to chase the most obvious row clear every time. The better question is whether the clear leaves the board healthier. In JewelSliding, survival usually comes from protecting space, not just from taking the first scoring move you see.</p>
      <p>When the field is getting crowded, a row clear that reopens the center or preserves a clean drop lane is often stronger than one that looks bigger for a moment but leaves you boxed in afterward.</p>

      <h3>Habits That Help</h3>
      <ul>
        <li>keep one lower lane available for emergencies,</li>
        <li>avoid dropping large gems into narrow openings too early,</li>
        <li>treat every clear as a chance to reset the shape of the board.</li>
      </ul>

      <h3>Late-Game Thinking</h3>
      <p>As waves arrive faster, the game becomes less about perfection and more about triage. You are trying to stop the board from becoming unplayable. That mindset leads to calmer, stronger choices.</p>
    `,
  },
  {
    slug: 'why-sliding-puzzles-stick',
    title: 'Why Sliding Gem Puzzles Feel So Hard to Put Down',
    excerpt: 'Sliding puzzle games combine obvious visual goals with just enough pressure to keep the brain looking for one more clean move.',
    icon: '🧠',
    date: 'March 27, 2026',
    readTime: '6 min read',
    category: 'Science',
    content: `
      <h2>Visible Progress Matters</h2>
      <p>Sliding puzzle games are satisfying because improvement is easy to see. A messy board becomes orderly. A risky stack becomes a clean lane. In JewelSliding, each full stripe is a visible release of tension, and that quick payoff is part of what makes the game replayable.</p>

      <h3>Pressure Without Chaos</h3>
      <p>The best browser puzzles create urgency without turning unreadable. JewelSliding works because the rule set stays simple even when the board speeds up. The pressure rises, but the player can still explain why a move helped or hurt.</p>

      <h3>Why People Come Back</h3>
      <p>That combination of clarity and pressure keeps players engaged. You can imagine the better move you almost made, which is often exactly what makes you want one more round.</p>
    `,
  },
  {
    slug: 'family-puzzle-breaks',
    title: 'Using JewelSliding as a Better Short Screen-Time Break',
    excerpt: 'For families and casual players, a calmer browser puzzle can be a more intentional break than endless scrolling or noisy tap games.',
    icon: '👨‍👩‍👧',
    date: 'March 27, 2026',
    readTime: '7 min read',
    category: 'Family',
    content: `
      <h2>Short Does Not Have to Mean Empty</h2>
      <p>Many quick screen-time habits feel forgettable afterward. A short puzzle session can be different because it asks the player to notice, decide, and adjust. JewelSliding is useful in that role because it loads fast, explains itself quickly, and gives the player a clear end point after a few rounds.</p>

      <h3>What Parents Often Like</h3>
      <p>The site does not require account creation, and the game loop is easy to understand: move a gem block, clear a stripe, and keep the board under control. That makes it easier to inspect and co-play than many noisy browser games.</p>

      <h3>Best Use Cases</h3>
      <ul>
        <li>a five-minute reset after homework,</li>
        <li>a shared round on a tablet before moving on to something else,</li>
        <li>a low-friction puzzle break instead of passive scrolling.</li>
      </ul>
    `,
  },
  {
    slug: 'browse-gem-puzzle-sites',
    title: 'How to Judge a Browser Puzzle Site in Under 10 Minutes',
    excerpt: 'A trustworthy browser game site should explain the rules, show real contact details, and make the game feel like the main event instead of an ad wrapper.',
    icon: '✅',
    date: 'March 27, 2026',
    readTime: '8 min read',
    category: 'Reviews',
    content: `
      <h2>Look Beyond the Embed</h2>
      <p>A browser game site is more than the game frame itself. In a few minutes you can usually tell whether the project was built to serve the player or just to catch search traffic. Strong sites explain the rules, keep trust pages current, and make it obvious who to contact if something breaks.</p>

      <h3>A Quick Checklist</h3>
      <ul>
        <li>Can you understand the goal immediately?</li>
        <li>Are support pages and policy pages easy to find?</li>
        <li>Does the site use real branding and contact details?</li>
        <li>Do ads stay secondary to the game and content?</li>
      </ul>

      <h3>Why It Matters</h3>
      <p>Those signals help both users and advertisers trust the site. They also make the project feel worth returning to after the first session.</p>
    `,
  },
];

const gameplaySources: BlogSource[] = [
  { id: 1, text: 'American Psychological Association: attention', url: 'https://www.apa.org/topics/attention' },
  { id: 2, text: 'Encyclopaedia Britannica: flow', url: 'https://www.britannica.com/science/flow-psychology' },
  { id: 3, text: 'National Institute of Mental Health: caring for your mental health', url: 'https://www.nimh.nih.gov/health/topics/caring-for-your-mental-health' },
];

const familySources: BlogSource[] = [
  { id: 1, text: 'HealthyChildren.org: create your family media plan', url: 'https://www.healthychildren.org/English/media/Pages/default.aspx' },
  { id: 2, text: 'CDC: developmental milestones', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
  { id: 3, text: 'American Academy of Pediatrics: digital media guidance', url: 'https://publications.aap.org/pediatrics/article/138/5/e20162591/60349/Media-and-Young-Minds' },
];

const reviewSources: BlogSource[] = [
  { id: 1, text: 'Google Safety Center: privacy and security tips', url: 'https://safety.google/security/security-tips/' },
  { id: 2, text: 'Mozilla Foundation: privacy not included', url: 'https://foundation.mozilla.org/en/privacynotincluded/' },
  { id: 3, text: 'HealthyChildren.org: digital media use and quality', url: 'https://www.healthychildren.org/English/media/Pages/default.aspx' },
];

export const postSources: Record<string, BlogSource[]> = {
  'quick-start-guide': gameplaySources,
  'row-clearing-strategy': gameplaySources,
  'why-sliding-puzzles-stick': gameplaySources,
  'family-puzzle-breaks': familySources,
  'browse-gem-puzzle-sites': reviewSources,
};

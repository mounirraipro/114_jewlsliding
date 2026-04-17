export interface BlogPostSummary {
  slug: string;
  title: string;
  excerpt: string;
  icon: string;
  date: string;
  readTime: string;
  category: string;
}

export interface BlogSource {
  id: number;
  text: string;
  url?: string;
}

export const postSummaries: BlogPostSummary[] = [
  {
    slug: 'quick-start-guide',
    title: 'JewelSliding Quick Start Guide: Read the Gap Before You Move',
    excerpt:
      'A complete beginner guide to reading the board, spotting the most valuable gap, and making safer early moves in JewelSliding.',
    icon: 'QS',
    date: 'April 17, 2026',
    readTime: '12 min read',
    category: 'Game',
  },
  {
    slug: 'row-clearing-strategy',
    title: 'Row Clearing Strategy: How to Survive Longer in JewelSliding',
    excerpt:
      'Learn why strong JewelSliding runs come from clearing for space first, protecting the board shape, and treating every row clear as a reset.',
    icon: 'RC',
    date: 'April 17, 2026',
    readTime: '13 min read',
    category: 'Strategy',
  },
  {
    slug: 'why-sliding-puzzles-stick',
    title: 'Why Sliding Gem Puzzles Feel So Hard to Put Down',
    excerpt:
      'A closer look at the clear feedback, visible progress, and fair pressure curve that make JewelSliding and similar puzzle games so replayable.',
    icon: 'FO',
    date: 'April 17, 2026',
    readTime: '12 min read',
    category: 'Science',
  },
  {
    slug: 'family-puzzle-breaks',
    title: 'Using JewelSliding as a Better Short Screen-Time Break',
    excerpt:
      'A practical family guide to using JewelSliding as a calmer, more intentional short-form game instead of endless passive scrolling.',
    icon: 'FM',
    date: 'April 17, 2026',
    readTime: '12 min read',
    category: 'Family',
  },
  {
    slug: 'browse-gem-puzzle-sites',
    title: 'How to Judge a Browser Puzzle Site in Under 10 Minutes',
    excerpt:
      'Use this simple review framework to check whether a browser puzzle site is clear, trustworthy, and genuinely built around the game.',
    icon: 'RV',
    date: 'April 17, 2026',
    readTime: '12 min read',
    category: 'Reviews',
  },
  {
    slug: 'beginner-mistakes',
    title: '9 Beginner Mistakes That End JewelSliding Runs Early',
    excerpt:
      'Most early losses come from a small set of habits. This guide breaks down the mistakes that quietly close the board and how to replace them.',
    icon: 'BM',
    date: 'April 17, 2026',
    readTime: '14 min read',
    category: 'Tips',
  },
  {
    slug: 'board-reading-routine',
    title: 'A Repeatable Board Reading Routine for Tough JewelSliding Boards',
    excerpt:
      'Build a reliable pre-move routine that helps you scan pressure points, rank your options, and stay calm when JewelSliding speeds up.',
    icon: 'BR',
    date: 'April 17, 2026',
    readTime: '13 min read',
    category: 'Strategy',
  },
  {
    slug: 'recovery-lane-management',
    title: 'Recovery Lane Management: The Habit That Saves Crowded Runs',
    excerpt:
      'One protected recovery lane can keep a bad JewelSliding board playable. Here is how to preserve it, use it, and know when to spend it.',
    icon: 'RL',
    date: 'April 17, 2026',
    readTime: '13 min read',
    category: 'Strategy',
  },
  {
    slug: 'practice-routine',
    title: 'A 15-Minute JewelSliding Practice Routine That Actually Helps',
    excerpt:
      'If you want to improve faster, practice specific board-reading habits instead of just playing endless casual rounds. This routine shows how.',
    icon: 'PR',
    date: 'April 17, 2026',
    readTime: '12 min read',
    category: 'Training',
  },
  {
    slug: 'what-makes-jewelsliding-work',
    title: 'What Makes JewelSliding Work as a Browser Puzzle Game',
    excerpt:
      'From readable rules to fast restarts and steady pressure, this breakdown explains why JewelSliding fits the browser puzzle format so well.',
    icon: 'WD',
    date: 'April 17, 2026',
    readTime: '12 min read',
    category: 'Design',
  },
];

const gameplaySources: BlogSource[] = [
  {
    id: 1,
    text: 'American Psychological Association: attention',
    url: 'https://www.apa.org/topics/attention',
  },
  {
    id: 2,
    text: 'Encyclopaedia Britannica: flow',
    url: 'https://www.britannica.com/science/flow-psychology',
  },
  {
    id: 3,
    text: 'National Institute of Mental Health: caring for your mental health',
    url: 'https://www.nimh.nih.gov/health/topics/caring-for-your-mental-health',
  },
];

const familySources: BlogSource[] = [
  {
    id: 1,
    text: 'HealthyChildren.org: create your family media plan',
    url: 'https://www.healthychildren.org/English/media/Pages/default.aspx',
  },
  {
    id: 2,
    text: 'CDC: developmental milestones',
    url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
  },
  {
    id: 3,
    text: 'American Academy of Pediatrics: digital media guidance',
    url: 'https://publications.aap.org/pediatrics/article/138/5/e20162591/60349/Media-and-Young-Minds',
  },
];

const reviewSources: BlogSource[] = [
  {
    id: 1,
    text: 'Google Safety Center: privacy and security tips',
    url: 'https://safety.google/security/security-tips/',
  },
  {
    id: 2,
    text: 'Mozilla Foundation: Privacy Not Included',
    url: 'https://foundation.mozilla.org/en/privacynotincluded/',
  },
  {
    id: 3,
    text: 'HealthyChildren.org: digital media use and quality',
    url: 'https://www.healthychildren.org/English/media/Pages/default.aspx',
  },
];

export const postSources: Record<string, BlogSource[]> = {
  'quick-start-guide': gameplaySources,
  'row-clearing-strategy': gameplaySources,
  'why-sliding-puzzles-stick': gameplaySources,
  'family-puzzle-breaks': familySources,
  'browse-gem-puzzle-sites': reviewSources,
  'beginner-mistakes': gameplaySources,
  'board-reading-routine': gameplaySources,
  'recovery-lane-management': gameplaySources,
  'practice-routine': gameplaySources,
  'what-makes-jewelsliding-work': gameplaySources,
};

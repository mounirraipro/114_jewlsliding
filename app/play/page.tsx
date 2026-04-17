import type { Metadata } from 'next';
import Link from 'next/link';
import GameEmbedActions from '../components/GameEmbedActions';
import PlayCommentsForm from '../components/PlayCommentsForm';

export const metadata: Metadata = {
    title: 'Play JewelSliding Online Free - Gem Sliding Puzzle Game',
    description:
        'Play JewelSliding online for free. Slide gem blocks into open gaps, complete solid rows, survive tougher waves, and read our full beginner guide below the game.',
    keywords: [
        'play JewelSliding',
        'JewelSliding online',
        'free gem puzzle game',
        'sliding block browser game',
        'row clearing puzzle',
        'play puzzle online',
        'JewelSliding how to play',
    ],
    alternates: {
        canonical: '/play',
    },
};

const beginnerSteps = [
    {
        title: 'Start the round',
        text: 'Tap or click Play inside the game frame to begin a fresh JewelSliding run.',
    },
    {
        title: 'Read the lower rows first',
        text: 'Look for the most valuable open gap near the bottom before you touch any block.',
    },
    {
        title: 'Drag a gem block sideways',
        text: 'Move a block into the useful opening below it so the board becomes cleaner, not just busier.',
    },
    {
        title: 'Finish full horizontal rows',
        text: 'A solid completed stripe clears and gives you breathing room for the next wave.',
    },
    {
        title: 'Protect one recovery lane',
        text: 'Try to leave yourself one lane or area that can still rescue an awkward future shape.',
    },
    {
        title: 'Stay calm when waves get faster',
        text: 'As pressure rises, focus on one useful move at a time instead of trying to solve the whole board at once.',
    },
];

const controlNotes = [
    'Desktop: click a gem block and drag it sideways into a better opening.',
    'Touch devices: press and drag with your finger to reposition a block.',
    'Start and restart: use the Play button to begin and the Again button after a run ends.',
    'Board reading: watch the score, level, lines, combo, and next-wave panels to understand how much pressure is coming.',
];

const proTips = [
    'Play from the bottom up because lower-row structure decides whether the board stays alive.',
    'Choose the gap that improves board health, not just the first gap that accepts a move.',
    'Treat large blocks carefully because they solve space quickly but can also choke your best lane.',
    'After every clear, reread the board instead of moving instantly because the best next gap usually changes.',
    'When the game speeds up, prioritize survival and space over perfect-looking setups.',
    'Use short practice sessions to build one habit at a time, such as lower-row scanning or recovery lane protection.',
];

const featureHighlights = [
    'Fast browser access with no download required',
    'Readable gem-sliding gameplay built around space management',
    'Rising waves that create tension without changing the core rules',
    'Score, level, line, and combo tracking inside the game HUD',
    'Challenge-track support through the wider JewelSliding site',
    'Mobile, tablet, laptop, and desktop friendly play sessions',
];

const faqEntries = [
    {
        question: 'Is JewelSliding free to play?',
        answer:
            'Yes. JewelSliding runs directly in your browser and the play page is available free on the site.',
    },
    {
        question: 'Do I need to download JewelSliding?',
        answer:
            'No. The game loads inside the page iframe, so you can start playing without installing anything.',
    },
    {
        question: 'Can I play JewelSliding on mobile?',
        answer:
            'Yes. The game is designed to work on phones and tablets as well as desktop and laptop browsers.',
    },
    {
        question: 'What is the goal in JewelSliding?',
        answer:
            'Your goal is to slide gem blocks into useful gaps, complete full horizontal rows, and keep the board playable as the pace gets tougher.',
    },
    {
        question: 'Does JewelSliding use keyboard controls?',
        answer:
            'The core interaction is drag-based. On desktop you play with the mouse, and on touch devices you play with your finger.',
    },
    {
        question: 'What should beginners focus on first?',
        answer:
            'Start by reading the lower rows, choosing the most valuable gap, and protecting one recovery lane instead of moving randomly.',
    },
];

type PlayPageProps = {
    searchParams?: Promise<{ collection?: string; puzzle?: string }>;
};

export default async function PlayPage({ searchParams }: PlayPageProps) {
    const params = searchParams ? await searchParams : undefined;
    const iframeQuery = new URLSearchParams();

    if (params?.collection) {
        iframeQuery.set('collection', params.collection);
    }

    if (params?.puzzle) {
        iframeQuery.set('puzzle', params.puzzle);
    }

    const iframeSrc = iframeQuery.size > 0 ? `/game/index.html?${iframeQuery.toString()}` : '/game/index.html';
    const shareUrl = iframeQuery.size > 0 ? `/play?${iframeQuery.toString()}` : '/play';

    return (
        <main className="play-layout">
            <div className="play-main">
                <div className="play-frame-shell">
                    <div id="play-game-frame" className="play-frame-card">
                        <iframe
                            src={iframeSrc}
                            title="JewelSliding Game"
                            className="play-iframe"
                            allow="autoplay"
                            loading="lazy"
                        />
                    </div>
                    <GameEmbedActions targetId="play-game-frame" shareUrl={shareUrl} />
                </div>

                <section
                    style={{
                        width: '100%',
                        marginTop: '2rem',
                        paddingBottom: '4rem',
                    }}
                >
                    <div className="page-content" style={{ maxWidth: '860px' }}>
                        <div
                            className="card"
                            style={{
                                marginBottom: '2rem',
                                padding: '1.5rem',
                                background: 'linear-gradient(180deg, rgba(250, 252, 255, 0.96), rgba(241, 248, 255, 0.94))',
                            }}
                        >
                            <h1
                                className="gradient-text"
                                style={{
                                    fontSize: 'clamp(1.9rem, 4vw, 3rem)',
                                    marginBottom: '0.9rem',
                                }}
                            >
                                Play JewelSliding Online for Free
                            </h1>
                            <p>
                                Play JewelSliding online for free and jump into a bright browser puzzle where every move is about
                                reading space, sliding gem blocks cleanly, and completing solid horizontal rows before the next wave
                                tightens the board. The game loads directly in your browser, starts fast, and gives you a clear,
                                satisfying loop: spot the gap, drag the right block, clear the stripe, and keep the board alive.
                            </p>
                            <p>
                                If you enjoy puzzle games that reward attention more than random tapping, JewelSliding is built for
                                that exact mood. It looks colorful and friendly, but the real fun comes from how readable the board
                                feels once you learn where to look. The lower rows matter most, recovery lanes matter more than they
                                first appear, and one careful move can completely change how safe the next few turns feel.
                            </p>
                            <p>
                                Whether you want a quick five-minute browser break or a longer session where you try to beat your best
                                run, this play page is designed to keep the game front and center. You can launch JewelSliding on
                                desktop, laptop, tablet, or phone, then scroll below the iframe whenever you want a clearer beginner
                                guide, gameplay explanation, practical strategy tips, or FAQ help.
                            </p>
                        </div>

                        <h2>What Is JewelSliding?</h2>
                        <p>
                            JewelSliding is a free online gem sliding puzzle game built around one simple but surprisingly deep idea:
                            move the right block into the right opening before the board becomes too crowded. Instead of matching
                            colors or memorizing complicated controls, you are constantly judging structure. Which gap is worth using?
                            Which block solves the lower board without trapping the next move? Which row is close enough to completion
                            that one careful slide can restore breathing room?
                        </p>
                        <p>
                            That is what makes the game work so well in a browser. The rules are easy to understand quickly, but the
                            decisions stay interesting because shape, timing, and board health all matter. A good move in JewelSliding
                            does more than look active. It improves the field. It reopens space, stabilizes a risky lane, or clears a
                            horizontal stripe that buys you time against the next incoming wave.
                        </p>
                        <p>
                            The play experience also stays readable. You can see your score, best run, level, line clears, combo, and
                            next-wave information inside the game interface, which helps every round feel fair and learnable. Even when
                            the pace rises, the core goal stays clear: manage space well enough to survive a little longer and make one
                            more smart decision.
                        </p>

                        <h2>How JewelSliding Gameplay Works</h2>
                        <p>
                            The core gameplay loop is all about dragging gem blocks sideways into openings that matter. When a move helps
                            complete a full horizontal stripe, that row clears and the board breathes again. This is why the game feels
                            so satisfying even in short sessions. Every good decision creates visible relief. The board becomes easier to
                            read, and you can feel the difference immediately.
                        </p>
                        <p>
                            As your run continues, waves bring more pressure. The board does not become unreadable, but it does ask for
                            better judgment. You cannot rely on random movement for long. Stronger runs come from reading the lower rows
                            first, protecting at least one recovery lane, and understanding that space is your real resource. A row clear
                            is valuable because it restores that resource, not just because it adds points to the total.
                        </p>
                        <p>
                            This balance between simple rules and real decision-making is one of the reasons JewelSliding is easy to come
                            back to. You can usually tell why a move worked, why a move failed, and what you want to try differently in
                            the next round. That makes the game feel less random and much more rewarding over time.
                        </p>

                        <h2>Play JewelSliding on Desktop, Tablet, or Mobile</h2>
                        <p>
                            You can play JewelSliding directly in your browser on PC, Mac, laptop, tablet, or smartphone. There is no
                            extra launcher to manage and no store install required just to get started. Open the page, load the iframe,
                            and the game is ready when you are.
                        </p>
                        <p>
                            That cross-device flexibility is a big part of the appeal. On desktop, JewelSliding works well as a focused
                            puzzle session where you can watch the board carefully and chase a better score. On mobile or tablet, it
                            works just as well as a shorter break because the drag-based controls remain direct and easy to understand.
                            The game stays the same, which means the skills you build on one device carry cleanly to another.
                        </p>

                        <h2>How to Play JewelSliding: Beginner Guide</h2>
                        <p>
                            If you are new to the game, the best way to start is to keep your attention simple. Do not stare at the
                            brightest gem block first. Look for the most useful open gap near the lower rows, then decide which block can
                            improve that area without making the next move harder.
                        </p>
                        <ol>
                            {beginnerSteps.map((step) => (
                                <li key={step.title}>
                                    <strong>{step.title}:</strong> {step.text}
                                </li>
                            ))}
                        </ol>
                        <p>
                            If you want a deeper strategy breakdown after a few rounds, the site also has a full{' '}
                            <Link href="/how-to-play">How to Play guide</Link> plus longer articles inside the{' '}
                            <Link href="/blog">JewelSliding blog</Link>.
                        </p>

                        <h2>JewelSliding Controls</h2>
                        <p>
                            JewelSliding keeps the control scheme intentionally simple so that the puzzle decisions stay in focus. The
                            challenge comes from reading the board well, not from fighting complicated inputs.
                        </p>
                        <ul>
                            {controlNotes.map((note) => (
                                <li key={note}>{note}</li>
                            ))}
                        </ul>

                        <h2>Pro Tips for Longer JewelSliding Runs</h2>
                        <p>
                            The fastest way to improve is to stop judging moves only by whether they are possible and start judging them
                            by whether they leave the board healthier. That shift alone will make the game feel much more strategic.
                        </p>
                        <ul>
                            {proTips.map((tip) => (
                                <li key={tip}>{tip}</li>
                            ))}
                        </ul>

                        <h2>Key Features That Make JewelSliding Worth Playing</h2>
                        <p>
                            JewelSliding works because it combines browser convenience with a puzzle loop that stays readable under
                            pressure. The game is quick to launch, easy to understand, and still deep enough that repeat sessions feel
                            purposeful instead of repetitive.
                        </p>
                        <ul>
                            {featureHighlights.map((feature) => (
                                <li key={feature}>{feature}</li>
                            ))}
                        </ul>

                        <h2>Play JewelSliding Online Without Downloading Anything</h2>
                        <p>
                            One of the best parts of JewelSliding is how little friction stands between you and the board. You do not
                            need to install an app, wait for a store download, or create an account before seeing how the game works.
                            That makes the play page ideal for visitors who want to test the puzzle immediately and decide for themselves
                            whether the pace, structure, and style fit the kind of browser game they enjoy.
                        </p>
                        <p>
                            Because the game lives inside the browser, it also works well for repeat visits. You can come back for a
                            quick run, browse different <Link href="/categories">challenge tracks</Link>, or open one of the long-form
                            strategy articles whenever you want a little more context. The site is structured to support both quick play
                            and deeper reading without forcing either one.
                        </p>

                        <h2>Is JewelSliding Free?</h2>
                        <p>
                            Yes. JewelSliding is free to play on the site. The main point of the page is simple browser access, so you
                            can load the game quickly and start playing without paying for an install just to see whether you enjoy the
                            puzzle style.
                        </p>

                        <h2>Do You Need to Download JewelSliding?</h2>
                        <p>
                            No download is required to play the version on this page. If you are looking for the fastest route into the
                            game, the browser version is the direct option: open the page, start a round, and scroll below the iframe if
                            you want more strategy help afterward.
                        </p>

                        <h2>Why JewelSliding Keeps Players Coming Back</h2>
                        <p>
                            The game has that strong puzzle quality where good decisions are easy to feel. When you complete a stripe and
                            the board opens up, the relief is immediate. When you lose a run, you can often identify the move you wish
                            you had handled differently. That combination of visible progress and useful near-misses is a big reason the
                            game feels replayable. You are rarely wondering what happened. You are usually thinking about what you want
                            to try next.
                        </p>
                        <p>
                            That is a big part of why JewelSliding works so well as a browser puzzle. The loop is short enough for quick
                            sessions, but the decisions are meaningful enough that improvement feels real. If you like games that reward
                            focus, space management, and calm planning, this page gives you a very direct way to enjoy that style.
                        </p>

                        <h2>FAQ About JewelSliding</h2>
                        <div
                            style={{
                                display: 'grid',
                                gap: '1rem',
                                marginTop: '1rem',
                            }}
                        >
                            {faqEntries.map((entry) => (
                                <div key={entry.question} className="card" style={{ padding: '1.25rem' }}>
                                    <h3 style={{ marginBottom: '0.5rem' }}>{entry.question}</h3>
                                    <p style={{ margin: 0 }}>{entry.answer}</p>
                                </div>
                            ))}
                        </div>

                        <h2>Comments</h2>
                        <p>
                            Want to share feedback about the game, the play page, or a bug you noticed during a run? Use the form below.
                            Your comment will be prepared as an email to our inbox so the team can review it directly.
                        </p>
                        <div className="card" style={{ padding: '1.25rem', marginTop: '1rem' }}>
                            <PlayCommentsForm />
                        </div>

                        <h2>Conclusion</h2>
                        <p>
                            JewelSliding is a strong fit for anyone who enjoys browser puzzle games with clear rules, quick starts, and
                            real room for improvement. The challenge is easy to enter but rewarding to learn: read the gap, clear the
                            row, protect your recovery space, and stay steady as the next wave arrives.
                        </p>
                        <p>
                            If you are ready to play, the iframe above is the fastest path in. If you want to understand the game more
                            deeply after a few rounds, keep exploring the strategy content across the site. Either way, the goal is the
                            same: help you enjoy a cleaner, smarter, more satisfying JewelSliding run.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'How to Play JewelSliding - Complete Guide',
    description: 'Learn how to play JewelSliding step by step, from spotting the open gap to clearing full gem rows before the pace speeds up.',
    keywords: ['how to play JewelSliding', 'JewelSliding guide', 'gem sliding puzzle strategy', 'row clearing instructions'],
    alternates: {
        canonical: '/how-to-play',
    },
};

export default function HowToPlayPage() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1 className="gradient-text">How to Play</h1>
                    <p>A clear guide to reading the board, moving gem blocks, and clearing horizontal stripes in JewelSliding.</p>
                </div>
            </div>

            <div className="page-content">
                <h2>The Core Goal</h2>
                <p>
                    JewelSliding is a browser puzzle game built around one fast question: which gem block should move down into the open gap right now? Your goal is to create complete horizontal stripes made of solid gem blocks. When a full stripe is formed, it clears and gives you breathing room before the next wave rises from below.
                </p>

                <h2>What You Should Notice First</h2>
                <p>
                    Before you touch anything, scan the bottom half of the field. The empty gap matters more than the brightest gem. It tells you where a block can safely drop and whether that move will finish a row, open extra space, or trap a larger shape above the wrong lane.
                </p>

                <h2>How Movement Works</h2>
                <p>
                    In JewelSliding, you are shuffling shining gem blocks of different sizes. The important move is sliding a selected block down into a free empty space on the level below. Because the pieces vary in size, the best move is often the one that protects future space, not just the one that looks dramatic in the moment.
                </p>

                <h2>How Rows Clear</h2>
                <p>
                    A row clears when you complete a ready-made solid horizontal stripe of blocks. That means you are not matching colors or rotating pieces. You are using the current shapes to finish a line cleanly. A single correct drop can complete the stripe, clear it immediately, and lower the overall pressure on the board.
                </p>

                <h2>Step-by-Step Beginner Flow</h2>
                <ol>
                    <li><strong>Scan the lower rows first.</strong> Look for the nearest open gap and note which gem block can reach it cleanly.</li>
                    <li><strong>Choose the move that finishes structure.</strong> Prioritize moves that complete or nearly complete a horizontal stripe.</li>
                    <li><strong>Protect one recovery lane.</strong> Try to leave yourself one clean path for the next awkward block.</li>
                    <li><strong>Re-read the board after each clear.</strong> A cleared row changes the safest lane and the next best opening.</li>
                    <li><strong>Stay calm as the speed rises.</strong> The blocks will arrive faster and faster, so short scans beat rushed shuffling.</li>
                </ol>

                <h2>Why Size Matters</h2>
                <p>
                    Large gem blocks can save you or ruin you. They are useful because they fill big sections of a stripe quickly, but they can also choke off openings if you move them into the wrong place too early. When you see a large shape, ask whether it is helping you close a row or stealing the last safe gap from future moves.
                </p>

                <h2>Common Mistakes</h2>
                <ul>
                    <li><strong>Chasing the top of the board:</strong> the lower rows decide whether you survive the next wave.</li>
                    <li><strong>Using the first available gap:</strong> not every legal move is a useful move.</li>
                    <li><strong>Closing your only escape lane:</strong> one bad drop can leave the next large block nowhere to go.</li>
                    <li><strong>Ignoring pace changes:</strong> once the waves speed up, hesitating too long becomes its own risk.</li>
                </ul>

                <h2>How to Improve Faster</h2>
                <p>
                    The best way to improve at JewelSliding is to notice why a move worked. Did it clear a stripe immediately? Did it reopen the middle? Did it save a gap for a large incoming block? When you name the reason, the next board becomes easier to read. That is how quick reactions turn into actual strategy.
                </p>

                <h2>Ready to Try It?</h2>
                <p>
                    If you can spot the gap, finish the stripe, and keep one recovery lane available, you already understand the heart of JewelSliding. The rest is rhythm.
                </p>
                <p style={{ marginTop: '1.5rem' }}>
                    <Link href="/play" className="btn btn-primary">
                        Play Now {'->'}
                    </Link>
                </p>
            </div>
        </>
    );
}

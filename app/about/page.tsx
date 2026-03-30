import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us - JewelSliding',
    description: 'Learn what JewelSliding is, why the site focuses on fast browser puzzle play, and how we approach trust, support, and gameplay content.',
    keywords: ['about JewelSliding', 'browser puzzle site', 'gem puzzle game', 'JewelSliding mission'],
    alternates: {
        canonical: '/about',
    },
};

export default function AboutPage() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1 className="gradient-text">About JewelSliding</h1>
                    <p>What the site is, why we built it this way, and what players can expect from every page around the game.</p>
                </div>
            </div>

            <div className="page-content">
                <h2>What This Site Is</h2>
                <p>
                    JewelSliding is a free browser game site built around a simple, replayable gem puzzle. Instead of asking players to install anything or create an account, the site lets them open the game quickly, learn the rules in plain language, and start playing right away. The goal is to make the puzzle easy to access without making the site feel thin or unfinished.
                </p>
                <p>
                    The game itself is about shuffling shining gems of different sizes, dropping the right block into an empty gap, and clearing ready-made horizontal stripes before the pace picks up. It is a compact loop, but it creates the kind of quick-thinking tension that makes short sessions satisfying.
                </p>

                <h2>Why We Built the Site This Way</h2>
                <p>
                    Gem puzzles are consistently popular because they look good immediately and make sense fast. People enjoy moving bright, sparkling pieces around a board and seeing structure appear from chaos. We wanted the surrounding site to respect that appeal by staying direct: clear instructions, clean navigation, working policy pages, and no fake barriers between the visitor and the game.
                </p>
                <p>
                    We also wanted the site to feel legitimate for players, families, and advertisers. That means writing real supporting content, keeping contact information visible, and making policy pages specific to the actual site instead of dropping in vague template text.
                </p>

                <h2>What We Care About</h2>
                <p>
                    <strong>Fast access:</strong> the game should be easy to launch on desktop or mobile without setup friction.
                </p>
                <p>
                    <strong>Useful support content:</strong> the site should explain how JewelSliding works, how to improve, and what users should expect from ads, cookies, and support.
                </p>
                <p>
                    <strong>Trust:</strong> policy pages, contact paths, and metadata should match the real behavior of the site and the real domain it runs on.
                </p>

                <h2>Who JewelSliding Is For</h2>
                <p>
                    The site is for casual puzzle players, people who like short browser game sessions, and families looking for calmer screen-time options than endless feeds or noisy tap games. Some visitors want a quick five-minute brain reset. Others want to chase better clears and survive longer once the speed rises. The site is built to support both.
                </p>

                <h2>Contact and Feedback</h2>
                <p>
                    If you spot a broken page, confusing instruction, accessibility issue, or privacy concern, please use the <a href="/contact">Contact page</a>. Player feedback helps keep JewelSliding useful and keeps the trust pages aligned with how the site really works.
                </p>
            </div>
        </>
    );
}

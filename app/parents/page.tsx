import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Parents & Safety Guide - JewelSliding',
    description: 'Learn how JewelSliding approaches family-friendly browser play, ads, privacy, and calmer puzzle sessions for children.',
    keywords: ['JewelSliding for kids', 'family puzzle game', 'browser game safety', 'children online safety'],
    alternates: {
        canonical: '/parents',
    },
};

export default function ParentsPage() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1 className="gradient-text">Parents &amp; Safety Guide</h1>
                    <p>What families should know about JewelSliding, from the puzzle itself to ads, privacy, and healthy play habits.</p>
                </div>
            </div>

            <div className="page-content">
                <h2>A Family-Friendly Puzzle Site</h2>
                <p>
                    JewelSliding is a browser puzzle site, not a social platform. There is no public chat, friend list,
                    or profile wall built into the site. That reduces many of the risks parents worry about most when a
                    child opens a browser game.
                </p>

                <h2>What Children Can Do Here</h2>
                <p>
                    Children can play the embedded puzzle, read simple help pages, and browse informational content.
                    The site does not require account creation to start playing.
                </p>

                <h2>What Parents Should Still Know</h2>
                <p>
                    Even calm puzzle sites still live inside the wider web. Ads may appear, external links may exist on
                    policy pages, and browser environments vary. Shared first sessions are usually the best way to see
                    whether the experience fits your child well.
                </p>

                <h2>Why Some Families Like JewelSliding</h2>
                <ul>
                    <li>The core mechanic is visual and non-violent.</li>
                    <li>There is no account creation requirement to play.</li>
                    <li>The puzzle rewards observation and patience more than frantic tapping.</li>
                    <li>Support and policy pages are available for adults who want to inspect the site first.</li>
                </ul>

                <h2>Privacy and Ads</h2>
                <p>
                    The site may display ads from third-party providers such as Google AdSense. The game may also use
                    simple local browser storage for gameplay state. For fuller details, review the <a href="/privacy-policy">Privacy Policy</a> and <a href="/cookie-policy">Cookie Policy</a>.
                </p>

                <h2>Questions or Concerns?</h2>
                <p>
                    If you have a family-safety, accessibility, or privacy concern, please use the <a href="/contact">Contact page</a>. Parent questions are welcome.
                </p>
            </div>
        </>
    );
}

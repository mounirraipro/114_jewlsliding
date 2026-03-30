import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FAQ - JewelSliding',
    description: 'Frequently asked questions about JewelSliding, including gameplay, devices, privacy, ads, and support.',
    keywords: ['JewelSliding FAQ', 'gem puzzle questions', 'JewelSliding help'],
    alternates: {
        canonical: '/faq',
    },
};

const faqs = [
    {
        q: 'Is JewelSliding free to play?',
        a: 'Yes. JewelSliding runs free in the browser and does not require an account before you start. You can open the game and begin moving gem blocks right away.',
    },
    {
        q: 'Do I need to download anything?',
        a: 'No. The game is embedded directly on the site and loads from your browser. If the page opens, you can play without installing an app or extension.',
    },
    {
        q: 'How do I clear rows in JewelSliding?',
        a: 'You clear rows by moving the right block into the empty gap below so that a full solid horizontal stripe is completed. Once the stripe is complete, it clears and gives you more room for the next wave.',
    },
    {
        q: 'Does JewelSliding work on mobile?',
        a: 'Yes. The site is built to load on phones, tablets, and desktop browsers. Touch play depends on your device and browser, but the main pages and game frame are designed to stay usable across common screen sizes.',
    },
    {
        q: 'How do I improve my score or survive longer?',
        a: 'Focus on preserving at least one recovery lane near the bottom of the board and avoid wasting your best empty gap on a weak move. The strongest runs usually come from clearing for space first and score second.',
    },
    {
        q: 'Can I play JewelSliding with friends?',
        a: 'JewelSliding is a single-player browser puzzle. There is no live multiplayer or account-based friend system on the site, but it works well as a pass-and-play challenge if you want to compare survival runs locally.',
    },
    {
        q: 'Does the site save my progress?',
        a: 'The site does not use account-based cloud saving. The embedded game may store limited local browser data for gameplay state or preferences on your device, but that information is not synced by us across devices.',
    },
    {
        q: 'Why are there ads on some pages?',
        a: 'Ads help support hosting and maintenance so the game can stay free to open. We aim to keep ads secondary to the game and to the supporting content that explains how the site works.',
    },
];

export default function FAQPage() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1 className="gradient-text">Frequently Asked Questions</h1>
                    <p>Quick answers about gameplay, support, privacy, and how JewelSliding works in the browser.</p>
                </div>
            </div>

            <div className="page-content">
                <p>
                    This page answers the questions new players ask most often before or after trying JewelSliding. If you want a full beginner walkthrough, visit <a href="/how-to-play">How to Play</a>. If your question is about cookies, ads, or trust pages, the legal links in the footer go deeper.
                </p>

                {faqs.map((faq) => (
                    <section key={faq.q} style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{faq.q}</h2>
                        <p>{faq.a}</p>
                    </section>
                ))}

                <h2>Still Need Help?</h2>
                <p>
                    If your question is not covered here, please use the <a href="/contact">Contact page</a>. Include the page URL, device, and a short description so we can respond more clearly.
                </p>
            </div>
        </>
    );
}

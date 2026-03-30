import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Accessibility Statement - JewelSliding',
    description: 'JewelSliding is committed to digital accessibility. Learn how we approach accessibility across the site and embedded game.',
    keywords: ['JewelSliding accessibility', 'accessible browser game', 'web accessibility statement'],
};

export default function AccessibilityPage() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1 className="gradient-text">Accessibility Statement</h1>
                    <p>Our commitment to making JewelSliding easier to use across devices, inputs, and browsing contexts.</p>
                </div>
            </div>

            <div className="page-content">
                <p>
                    JewelSliding is committed to improving digital accessibility for people with disabilities. We aim
                    to make the surrounding site content clear, readable, keyboard-friendly, and consistent across
                    common devices.
                </p>

                <h2>What We Focus On</h2>
                <ul>
                    <li><strong>Semantic structure:</strong> pages use headings, landmarks, and readable content blocks.</li>
                    <li><strong>Keyboard access:</strong> navigation and core site controls should be usable without a mouse.</li>
                    <li><strong>Color contrast:</strong> text and controls are designed to remain readable against the new jewel-toned theme.</li>
                    <li><strong>Responsive layouts:</strong> the site is intended to work on phones, tablets, and desktop browsers.</li>
                </ul>

                <h2>Embedded Game Limitations</h2>
                <p>
                    The embedded game itself presents additional accessibility challenges because it depends heavily on
                    visual pattern recognition and spatial movement. Some users may find drag or pointer interactions
                    difficult, and the game may not currently provide equivalent screen reader support for gameplay
                    state.
                </p>

                <h2>Feedback</h2>
                <p>
                    If you encounter an accessibility barrier on JewelSliding, please use the <a href="/contact">Contact page</a> or email <strong>contact@jewelsliding.com</strong>. Helpful details include the page URL, your browser, device, and any assistive technology involved.
                </p>
            </div>
        </>
    );
}

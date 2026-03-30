import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cookie Policy - JewelSliding',
    description: 'Learn how JewelSliding uses cookies and browser storage, including ad technologies and local gameplay storage.',
    keywords: ['JewelSliding cookies', 'cookie policy', 'browser storage', 'ad cookies'],
    alternates: {
        canonical: '/cookie-policy',
    },
};

export default function CookiePolicyPage() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1 className="gradient-text">Cookie Policy</h1>
                    <p>Last updated: March 27, 2026</p>
                </div>
            </div>

            <div className="page-content">
                <p>
                    This page explains how JewelSliding uses cookies and similar browser-side technologies. We include
                    both traditional cookies and local browser storage here because visitors often experience them as
                    the same privacy question: what is stored on the device, and why?
                </p>

                <h2>1. Cookies</h2>
                <p>
                    Cookies are small text files that websites or third-party services place in your browser. They may
                    be used for core site delivery, security, preferences, advertising, or measurement.
                </p>

                <h2>2. Local Browser Storage</h2>
                <p>
                    The embedded game may use browser storage such as localStorage to remember lightweight gameplay
                    state or preferences on your device. This data stays in your browser unless you clear it.
                </p>

                <h2>3. How the Site Uses These Technologies</h2>
                <ul>
                    <li><strong>Local gameplay storage:</strong> to remember simple in-browser game state or preferences.</li>
                    <li><strong>Site delivery and security:</strong> to help hosting and infrastructure serve the site reliably.</li>
                    <li><strong>Advertising technologies:</strong> third-party ad providers may use cookies or similar identifiers where ads are enabled.</li>
                </ul>

                <h2>4. Managing Cookies and Storage</h2>
                <p>
                    You can control cookies and storage through your browser settings. Blocking or clearing them may
                    affect saved game preferences or ad preferences.
                </p>
                <ul>
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome cookie settings</a></li>
                    <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Mozilla Firefox cookie settings</a></li>
                    <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471" target="_blank" rel="noopener noreferrer">Apple Safari cookie settings</a></li>
                    <li><a href="https://support.microsoft.com/en-us/microsoft-edge/manage-cookies-in-microsoft-edge" target="_blank" rel="noopener noreferrer">Microsoft Edge cookie settings</a></li>
                </ul>

                <h2>5. Google Ad Controls</h2>
                <p>
                    If Google advertising is active on the site, you can review ad preference controls through <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ad Settings</a> and Google&apos;s <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">advertising technology information</a>.
                </p>

                <h2>6. Contact</h2>
                <p>
                    Questions about cookies or browser storage can be sent through the <a href="/contact">Contact page</a> or to <strong>privacy@jewelsliding.com</strong>.
                </p>
            </div>
        </>
    );
}

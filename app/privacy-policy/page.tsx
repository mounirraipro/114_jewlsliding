import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - JewelSliding',
    description: 'Read the JewelSliding Privacy Policy to understand what data the site processes, how ads and browser storage work, and how to contact us.',
    keywords: ['JewelSliding privacy policy', 'browser game privacy', 'gem puzzle privacy'],
    alternates: {
        canonical: '/privacy-policy',
    },
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1 className="gradient-text">Privacy Policy</h1>
                    <p>Last updated: March 27, 2026</p>
                </div>
            </div>

            <div className="page-content">
                <p>
                    This Privacy Policy explains how JewelSliding processes information when you visit the site,
                    play the browser game, or contact us. We aim to keep the site usable without account creation,
                    and we want this page to describe the real site rather than generic placeholder language.
                </p>

                <h2>1. Who This Policy Applies To</h2>
                <p>
                    This policy applies to visitors of <strong>jewelsliding.com</strong>, including people who browse
                    pages, play the game, read site content, or contact us by email.
                </p>

                <h2>2. Information You Choose to Send</h2>
                <p>
                    You can use JewelSliding without creating an account. The main time you intentionally provide
                    personal information is when you contact us by email. If you send a message, we may receive your
                    name, email address, subject line, and any details you include in the message itself.
                </p>

                <h2>3. Technical Information Processed by the Site</h2>
                <p>
                    Like most websites, the site may rely on hosting, caching, and security infrastructure that
                    processes standard request information such as IP address, browser type, device type, requested
                    URLs, and timestamps. This information helps deliver the site, diagnose issues, and keep the
                    service available.
                </p>

                <h2>4. Browser Storage and Gameplay State</h2>
                <p>
                    The embedded game may store limited local browser data to remember simple preferences or gameplay
                    state on your device. That information stays in your browser unless you clear it. We do not use
                    account-based cloud profiles for gameplay progress on this site.
                </p>

                <h2>5. Advertising and Cookies</h2>
                <p>
                    JewelSliding may display ads from third-party providers such as Google AdSense. Those providers may
                    use cookies or similar technologies to serve, limit, measure, or personalize advertising according
                    to their own policies and applicable law.
                </p>
                <p>
                    You can learn more or manage certain ad settings through <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a> and Google&apos;s <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">partner site information</a>.
                </p>

                <h2>6. How We Use Information</h2>
                <ul>
                    <li>To deliver the website and embedded game</li>
                    <li>To respond to support, privacy, or accessibility emails</li>
                    <li>To maintain security, performance, and reliability</li>
                    <li>To understand operational issues such as broken pages or bug reports</li>
                    <li>To support ad serving through third-party advertising providers where ads are enabled</li>
                </ul>

                <h2>7. How We Share Information</h2>
                <p>
                    We do not sell personal information. Information may be processed by infrastructure, email, or ad
                    providers that help operate the site, or disclosed when required by law or necessary to protect the
                    site and its users.
                </p>

                <h2>8. Children&apos;s Privacy</h2>
                <p>
                    JewelSliding is designed to be family-friendly, but it is not directed specifically at children
                    under 13. We do not knowingly require children to create accounts or submit profiles to play. If
                    you believe a child has sent us personal information directly, contact us so we can review the
                    request.
                </p>

                <h2>9. Your Choices</h2>
                <ul>
                    <li>You can stop using the site at any time.</li>
                    <li>You can clear local browser storage through your browser settings.</li>
                    <li>You can manage cookies and ad preferences through your browser and Google controls.</li>
                    <li>You can contact us with privacy questions or requests related to information you sent by email.</li>
                </ul>

                <h2>10. Changes to This Policy</h2>
                <p>
                    We may update this page when the site changes, service providers change, or legal obligations
                    change. When we do, we will update the date shown at the top.
                </p>

                <h2>11. Contact</h2>
                <p>
                    Privacy questions can be sent through the <a href="/contact">Contact page</a> or directly to <strong>privacy@jewelsliding.com</strong>.
                </p>
            </div>
        </>
    );
}

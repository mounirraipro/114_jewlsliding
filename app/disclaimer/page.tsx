import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Disclaimer - JewelSliding',
    description: 'Read the JewelSliding disclaimer about gameplay, informational content, advertising, and external links.',
    keywords: ['JewelSliding disclaimer', 'browser game disclaimer', 'website disclaimer'],
    alternates: {
        canonical: '/disclaimer',
    },
};

export default function DisclaimerPage() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1 className="gradient-text">Disclaimer</h1>
                    <p>Last updated: March 27, 2026</p>
                </div>
            </div>

            <div className="page-content">
                <p>
                    This disclaimer explains the limits of the information and services provided on jewelsliding.com.
                    We want the site to be useful and clear, but it is still important to describe what JewelSliding is
                    and is not.
                </p>

                <h2>1. Entertainment Service</h2>
                <p>
                    JewelSliding is a browser-based entertainment and informational website. The game, guides, support
                    pages, and editorial content are provided for general use and enjoyment.
                </p>

                <h2>2. No Professional Advice</h2>
                <p>
                    Any discussion of focus, family use, or puzzle habits is for general informational purposes only.
                    It is not medical, developmental, educational, or legal advice.
                </p>

                <h2>3. Accuracy and Availability</h2>
                <p>
                    We try to keep the site accurate and current, but we cannot promise every page will always be
                    complete, current, uninterrupted, or free from technical problems.
                </p>

                <h2>4. Advertising</h2>
                <p>
                    JewelSliding may display ads from third-party providers including Google AdSense. The presence of
                    an ad does not mean we endorse the advertised product, service, or claim.
                </p>

                <h2>5. External Links</h2>
                <p>
                    Some pages may link to third-party sites for references, browser help, or ad settings. We do not
                    control those sites and are not responsible for their content or policies.
                </p>

                <h2>6. Contact</h2>
                <p>
                    If you believe a page is inaccurate, misleading, broken, or inconsistent with how the site works,
                    please use the <a href="/contact">Contact page</a>.
                </p>
            </div>
        </>
    );
}

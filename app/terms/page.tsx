import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service - JewelSliding',
    description: 'Read the JewelSliding Terms of Service and the rules for using this free online gem puzzle site.',
    keywords: ['JewelSliding terms of service', 'browser game terms', 'usage agreement'],
};

export default function TermsPage() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1 className="gradient-text">Terms of Service</h1>
                    <p>Last updated: March 27, 2026</p>
                </div>
            </div>

            <div className="page-content">
                <p>
                    Welcome to JewelSliding. By accessing or using this website, you agree to be bound by these Terms
                    of Service. If you do not agree, please do not use the site.
                </p>

                <h2>1. Description of Service</h2>
                <p>
                    JewelSliding provides a free browser-based gem puzzle game together with guides, support pages,
                    policy content, and related informational pages.
                </p>

                <h2>2. Eligibility</h2>
                <p>
                    The site is intended for general entertainment use. If you are under the age of majority in your
                    jurisdiction, use the site with parent or guardian supervision.
                </p>

                <h2>3. Acceptable Use</h2>
                <p>You agree not to:</p>
                <ul>
                    <li>use the site for unlawful purposes,</li>
                    <li>attempt unauthorized access to servers or systems,</li>
                    <li>interfere with the operation of the website or game,</li>
                    <li>distribute malware or harmful code through the site,</li>
                    <li>copy or redistribute site content in a way that violates applicable rights.</li>
                </ul>

                <h2>4. Intellectual Property</h2>
                <p>
                    The site design, written content, branding, and supporting materials on JewelSliding are protected
                    by applicable intellectual property law. Game-related assets may be owned by their respective rightsholders. Use of the site does not transfer ownership rights to you.
                </p>

                <h2>5. Advertising</h2>
                <p>
                    The site may display ads from third-party providers including Google AdSense. We are not
                    responsible for the content or claims of third-party ads or linked external sites.
                </p>

                <h2>6. Disclaimer of Warranties</h2>
                <p>
                    JewelSliding is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We do not guarantee uninterrupted
                    access, error-free performance, or compatibility with every device, browser, or network condition.
                </p>

                <h2>7. Limitation of Liability</h2>
                <p>
                    To the fullest extent permitted by law, JewelSliding and its operators are not liable for indirect,
                    incidental, special, or consequential damages arising out of your use of the site.
                </p>

                <h2>8. External Links</h2>
                <p>
                    Some pages may link to third-party websites for browser help, ad settings, references, or related
                    information. We do not control those sites and are not responsible for their content or policies.
                </p>

                <h2>9. Changes to These Terms</h2>
                <p>
                    We may revise these terms when the site changes or when legal requirements change. Continued use of
                    the site after updates means you accept the revised terms.
                </p>

                <h2>10. Contact</h2>
                <p>
                    If you have questions about these Terms of Service, use the <a href="/contact">Contact page</a> or email <strong>contact@jewelsliding.com</strong>.
                </p>
            </div>
        </>
    );
}

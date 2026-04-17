import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog - JewelSliding Guides and Puzzle Notes',
    description: 'Read long-form JewelSliding strategy guides, family guidance, and browser puzzle analysis built around the game.',
    keywords: ['JewelSliding blog', 'gem puzzle tips', 'browser game blog', 'puzzle strategy articles'],
    alternates: {
        canonical: '/blog',
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

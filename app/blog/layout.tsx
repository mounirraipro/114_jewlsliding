import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog - JewelSliding Guides and Puzzle Notes',
    description: 'Read the JewelSliding blog for strategy notes, family guidance, and practical browser puzzle advice.',
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

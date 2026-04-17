import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { gameCollections, getCollectionBySlug, getPlayHref } from '../../lib/gameData';
import AdSlot from '../../components/AdSlot';

export function generateStaticParams() {
    return gameCollections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params;
    const collection = getCollectionBySlug(slug);

    if (!collection) {
        return {
            title: 'Collection Not Found',
            description: 'The requested track could not be found on JewelSliding.',
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    const title = `${collection.name} - ${collection.puzzleCount} Boards`;
    const description = `Play ${collection.name} on JewelSliding. ${collection.description} ${collection.puzzleCount} featured boards on a ${collection.gridLabel} layout.`;
    const canonicalUrl = `/categories/${collection.slug}`;

    return {
        title,
        description,
        keywords: [collection.name.toLowerCase(), `${collection.gridLabel} puzzle board`, 'JewelSliding track', 'free puzzle game'],
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            type: 'website',
        },
        twitter: {
            title,
            description,
            card: 'summary_large_image',
        },
    };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const collection = getCollectionBySlug(slug);

    if (!collection) {
        notFound();
    }

    return (
        <>
            <div className="page-header">
                <div className="container">
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                        <Link href="/categories" style={{ color: 'var(--brand-600)' }}>Challenge Tracks</Link> / {collection.name}
                    </div>
                    <h1>
                        <span style={{ fontSize: '1.2em', marginRight: '0.5rem', color: collection.color }}>{collection.shortName}</span>
                        <span className="gradient-text">{collection.name}</span>
                    </h1>
                    <p>{collection.description}</p>
                </div>
            </div>

            <div className="container" style={{ maxWidth: '900px', padding: '0 1.5rem 4rem' }}>
                <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.8,
                    marginBottom: '2rem',
                    fontSize: '1.05rem',
                }}>
                    {collection.longDescription}
                </p>

                <div className="card" style={{ marginBottom: '1.5rem' }}>
                    <h2 style={{ marginBottom: '0.5rem' }}>Track Snapshot</h2>
                    <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                        {collection.gridLabel} lane · {collection.puzzleCount} boards · {collection.sets.length} playable waves · {collection.difficulty} pace
                    </p>
                </div>

                <AdSlot type="banner" />

                <h2 style={{ marginTop: '2rem', marginBottom: '1.5rem' }}>
                    Waves in {collection.name}
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {collection.sets.map((setItem, i) => (
                        <Link key={setItem.index} href={setItem.playHref} style={{ textDecoration: 'none' }}>
                            <div className="card animate-in collection-set-card" style={{
                                animationDelay: `${0.1 + i * 0.1}s`,
                                cursor: 'pointer',
                            }}>
                                {/* Preview */}
                                <div className="collection-set-preview" style={{
                                    borderRadius: 'var(--radius-md)',
                                    background: `linear-gradient(135deg, ${collection.color}44, ${collection.color}11)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.1rem',
                                    fontWeight: 800,
                                }}>
                                    {setItem.label}
                                </div>

                                <div className="collection-set-body">
                                    <h3 style={{ marginBottom: '0.25rem', fontSize: '1.2rem' }}>{setItem.label}</h3>
                                    <p className="collection-set-meta">
                                        Starts at board {setItem.puzzleStart + 1} · {setItem.puzzleCount} boards · {collection.gridLabel} layout
                                    </p>
                                </div>

                                <div className="collection-set-badge" style={{
                                    padding: '0.4rem 1rem',
                                    borderRadius: 'var(--radius-xl)',
                                    fontSize: '0.8rem',
                                    fontWeight: 700,
                                    background: `${collection.color}22`,
                                    color: collection.color,
                                }}>
                                    {collection.difficulty}
                                </div>

                                <div className="collection-set-arrow" style={{
                                    borderRadius: '50%',
                                    background: `${collection.color}22`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.2rem',
                                    color: collection.color,
                                }}>
                                    {'->'}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <AdSlot type="banner" />

                <div style={{ marginTop: '3rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                    <h2>About {collection.name}</h2>
                    <p>
                        {collection.name} maps directly to a playable track inside the embedded game. The page stays
                        aligned with the live board size, featured board count, and launch point used by JewelSliding
                        so players know what kind of pressure they are opening.
                    </p>
                    <p>
                        If you want to jump straight into this track, use the button below to open the first wave in
                        Play mode with the matching starting state already in place.
                    </p>
                    <Link href={getPlayHref(collection.id)} className="btn btn-primary">
                        Open {collection.name}
                    </Link>
                </div>
            </div>
        </>
    );
}

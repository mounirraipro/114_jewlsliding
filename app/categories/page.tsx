import type { Metadata } from 'next';
import Link from 'next/link';
import { gameCollections } from '../lib/gameData';

export const metadata: Metadata = {
  title: 'Challenge Tracks',
  description:
    'Browse all JewelSliding challenge tracks. Explore compact warm-ups, steady classic lanes, and faster rush boards in the embedded game.',
  keywords: ['JewelSliding tracks', 'gem puzzle tracks', 'browser puzzle boards'],
};

export default function CategoriesPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
            <h1 className="gradient-text">Challenge Tracks</h1>
            <p>
              Browse every JewelSliding track and choose the board size and pace that match the kind of pressure you want today.
            </p>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '1000px', padding: '0 1.5rem 4rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem',
          }}
        >
          {gameCollections.map((collection) => (
            <Link
              key={collection.slug}
              href={`/categories/${collection.slug}`}
              className="card"
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <h2
                style={{
                  marginBottom: '0.5rem',
                  color: 'var(--text-primary)',
                  fontSize: '1.2rem',
                }}
              >
                <span style={{ marginRight: '0.5rem', color: collection.color }}>{collection.shortName}</span>
                {collection.name}
              </h2>
              <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                {collection.description}
              </p>
              <p
                style={{
                  marginTop: '0.75rem',
                  marginBottom: 0,
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                }}
              >
                 {collection.gridLabel} lane · {collection.puzzleCount} boards · {collection.sets.length} waves
               </p>
             </Link>
          ))}
        </div>
      </div>
    </>
  );
}

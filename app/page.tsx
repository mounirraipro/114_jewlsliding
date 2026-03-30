import type { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from './components/AdSlot';
import GameEmbedActions from './components/GameEmbedActions';
import HeroSection from './components/HeroSection';
import { gameCollections, totalPuzzleCount } from './lib/gameData';

export const metadata: Metadata = {
  title: 'JewelSliding - Free Online Gem Sliding Puzzle Game',
  description: `Play JewelSliding free online. Slide gem blocks into the open gap below, clear full rows, and hold off the rising pace across ${gameCollections.length} challenge tracks.`,
  keywords: ['JewelSliding', 'gem sliding puzzle', 'sliding block game', 'row clearing puzzle', 'free online puzzle game', 'browser gem game', 'brain games'],
  alternates: {
    canonical: '/',
  },
};

const featuredCollections = gameCollections.slice(0, 6);

export default function Home() {
  return (
    <>
      <section className="home-embed-section">
        <div className="home-embed-shell">
          <div id="home-game-frame" className="home-embed-card">
            <iframe
              src="/game/index.html"
              title="Play JewelSliding Free Online"
              style={{ width: '100%', height: '100%', border: 'none' }}
            />
          </div>
          <GameEmbedActions targetId="home-game-frame" shareUrl="/play" />
        </div>
      </section>

      <HeroSection />

      <section style={{
        padding: '2rem 0',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        background: 'rgba(244, 251, 255, 0.58)',
      }}>
        <div className="container home-stats-grid">
            {[
            { value: `${totalPuzzleCount}+`, label: 'Featured Boards' },
            { value: String(gameCollections.length), label: 'Challenge Tracks' },
            { value: '3', label: 'Speed Tiers' },
            { value: '0', label: 'Downloads Needed' },
          ].map((stat) => (
            <div key={stat.label} className="home-stat-card">
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.7rem',
                fontWeight: 700,
                color: 'var(--brand-700)',
                letterSpacing: '0.01em',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '0.75rem',
                color: 'var(--text-tertiary)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginTop: '0.2rem',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <AdSlot type="banner" />

      <section className="section">
        <div className="container">
          <h2 className="section-title">Why JewelSliding feels so moreish</h2>
          <p className="section-subtitle">
            Every move asks you to read the board quickly, but the rules stay simple enough that a smart adjustment can rescue the whole stack.
            It is a clean loop of sliding, clearing, and surviving just one more wave.
          </p>

          <div className="grid-3">
            <article className="card feature-card">
              <div className="feature-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8.5h12" /><path d="M6 15.5h12" /><path d="M8.5 6v12" /><path d="M15.5 6v12" /><rect x="3" y="3" width="18" height="18" rx="5" /></svg>
              </div>
              <h3>One-Move Decisions</h3>
              <p>You are always looking for a single drop that completes a full stripe, so every move feels immediate and readable.</p>
            </article>

            <article className="card feature-card">
              <div className="feature-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l2.6 5.26 5.8.85-4.2 4.09.99 5.8L12 16.8 6.81 19l.99-5.8-4.2-4.09 5.8-.85L12 3z" /></svg>
              </div>
              <h3>Big Clears, Fast Relief</h3>
              <p>When a horizontal band locks in, the board breathes again and you instantly feel the payoff of planning ahead.</p>
            </article>

            <article className="card feature-card">
              <div className="feature-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6v6l4 2" /><circle cx="12" cy="12" r="8" /><path d="M8 3.2 6.2 5" /><path d="M16 3.2 17.8 5" /></svg>
              </div>
              <h3>Pressure That Builds Fairly</h3>
              <p>The speed ramps up over time, which keeps the puzzle tense without hiding the rules or overwhelming the first few rounds.</p>
            </article>

            <article className="card feature-card">
              <div className="feature-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 20h10" /><path d="M9 16h6" /><path d="M8 3h8l3 5-7 7-7-7 3-5z" /></svg>
              </div>
              <h3>Room for Real Strategy</h3>
              <p>Saving the right gap, choosing the safest column, and resisting panic all matter more than random movement.</p>
            </article>

            <article className="card feature-card">
              <div className="feature-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="12" rx="3" /><path d="M8 20h8" /><path d="M12 16v4" /><path d="M6.5 8.5h11" /></svg>
              </div>
              <h3>Comfortable on Any Screen</h3>
              <p>Phone, tablet, or desktop, the embedded game stays easy to launch whenever you want a quick puzzle burst.</p>
            </article>

            <article className="card feature-card">
              <div className="feature-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12c3-4.5 5.6-6.75 8-6.75S17 7.5 20 12c-3 4.5-5.6 6.75-8 6.75S7 16.5 4 12z" /><circle cx="12" cy="12" r="2.5" /></svg>
              </div>
              <h3>Free and Frictionless</h3>
              <p>No accounts, no install, and no waiting around. Open JewelSliding and start clearing gems in seconds.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'rgba(244, 248, 255, 0.8)' }}>
        <div className="container">
          <h2 className="section-title">Challenge tracks for every pace</h2>
          <p className="section-subtitle">
            Warm-up tracks teach the rhythm, classic tracks reward steady planning, and rush tracks push you to clear rows under pressure.
          </p>

          <div className="home-categories-grid">
            {featuredCollections.map((collection) => (
              <Link key={collection.slug} href={`/categories/${collection.slug}`} className="home-category-card" style={{ textDecoration: 'none' }}>
                <div className="home-category-icon" style={{ background: `${collection.color}22`, color: collection.color }}>
                  {collection.shortName}
                </div>
                <span style={{
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                }}>
                  {collection.name}
                </span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>
                  {collection.gridLabel} lane · {collection.puzzleCount} boards
                </span>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
            <Link href="/categories" className="btn btn-secondary">
              Browse All Tracks
            </Link>
          </div>
        </div>
      </section>

      <AdSlot type="banner" />

      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 className="section-title">How to stay ahead of the stack</h2>
          <p className="section-subtitle">
            The best JewelSliding runs come from reading the board early, protecting open gaps, and avoiding moves that trap larger gems above the wrong row.
          </p>

          <div className="home-feel-grid">
            {[
              { title: 'Keep one escape lane open', desc: 'A single clean column gives you somewhere to drop the next awkward block when the lower rows get crowded.' },
              { title: 'Clear for space, not just score', desc: 'Sometimes the smartest row clear is the one that reopens the board before the speed spike hits.' },
              { title: 'Watch block size, not just color', desc: 'Large gem groups become dangerous when they block narrow openings, so plan around their footprint early.' },
              { title: 'Stay calm as the tempo rises', desc: 'Fast waves punish panic. Quick scans and one deliberate move beat frantic shuffling almost every time.' },
            ].map((item) => (
              <div key={item.title} className="home-feel-card">
                <h3 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>{item.title}</h3>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  margin: 0,
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{
        padding: '5rem 0',
        background: 'rgba(247, 242, 255, 0.85)',
        textAlign: 'center',
        borderTop: '1px solid var(--border-light)',
      }}>
        <div className="container">
          <h2 style={{ marginBottom: '0.5rem' }}>Ready to see how long you can keep the gems moving?</h2>
          <p style={{
            color: 'var(--text-secondary)',
            maxWidth: '400px',
            margin: '0 auto 2rem',
            fontSize: '0.95rem',
            lineHeight: 1.6,
          }}>
            No signup, no install, and no filler between you and the board. Open JewelSliding and start chasing cleaner clears.
          </p>
          <Link href="/play" className="btn btn-primary" style={{ padding: '0.875rem 2rem', fontSize: '0.95rem' }}>
            Play Free Now
          </Link>
        </div>
      </section>
    </>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const GEM_PATH =
    'M30 2 L54 18 L45 44 L30 58 L15 44 L6 18 Z';

/* ── Floating tile config ── */
const TILES = [
    { x: '8%', y: '12%', size: 64, rotation: 10, delay: 0, color: 'rgba(15,118,110,0.16)' },
    { x: '85%', y: '8%', size: 52, rotation: -18, delay: 0.3, color: 'rgba(225,29,72,0.12)' },
    { x: '92%', y: '55%', size: 70, rotation: 28, delay: 0.6, color: 'rgba(6,182,212,0.1)' },
    { x: '5%', y: '65%', size: 58, rotation: -10, delay: 0.9, color: 'rgba(244,114,182,0.14)' },
    { x: '75%', y: '82%', size: 48, rotation: 25, delay: 1.2, color: 'rgba(13,148,136,0.11)' },
    { x: '20%', y: '80%', size: 42, rotation: -30, delay: 0.5, color: 'rgba(251,113,133,0.1)' },
    { x: '65%', y: '15%', size: 38, rotation: 45, delay: 0.8, color: 'rgba(45,212,191,0.11)' },
    { x: '40%', y: '85%', size: 56, rotation: -15, delay: 1.0, color: 'rgba(125,211,252,0.12)' },
];

/* ── Glowing orb config ── */
const ORBS = [
    { x: '15%', y: '25%', size: 280, color: 'rgba(13,148,136,0.09)' },
    { x: '80%', y: '60%', size: 320, color: 'rgba(225,29,72,0.08)' },
    { x: '50%', y: '10%', size: 200, color: 'rgba(103,232,249,0.18)' },
    { x: '30%', y: '70%', size: 240, color: 'rgba(244,114,182,0.06)' },
];

export default function HeroSection() {
    const heroRef = useRef<HTMLElement>(null);
    const tilesRef = useRef<(HTMLDivElement | null)[]>([]);
    const orbsRef = useRef<(HTMLDivElement | null)[]>([]);
    const badgeRef = useRef<HTMLParagraphElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let cleanup = () => {};

        const initAnimations = async () => {
            const { default: gsap } = await import('gsap');

            const ctx = gsap.context(() => {
            /* ── Floating tiles ── */
            tilesRef.current.forEach((tile, i) => {
                if (!tile) return;
                const cfg = TILES[i];

                // Entrance
                gsap.fromTo(
                    tile,
                    { opacity: 0, scale: 0, rotation: cfg.rotation - 40 },
                    {
                        opacity: 1,
                        scale: 1,
                        rotation: cfg.rotation,
                        duration: 1.2,
                        delay: 0.3 + cfg.delay * 0.5,
                        ease: 'elastic.out(1,0.5)',
                    }
                );

                // Continuous float
                gsap.to(tile, {
                    y: `+=${15 + Math.random() * 20}`,
                    rotation: `+=${8 + Math.random() * 12}`,
                    duration: 3 + Math.random() * 3,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    delay: cfg.delay,
                });
            });

            /* ── Glowing orbs ── */
            orbsRef.current.forEach((orb, i) => {
                if (!orb) return;
                gsap.fromTo(
                    orb,
                    { opacity: 0, scale: 0.6 },
                    { opacity: 1, scale: 1, duration: 2, delay: 0.5 + i * 0.3, ease: 'power2.out' }
                );
                gsap.to(orb, {
                    scale: 1.15,
                    opacity: 0.7,
                    duration: 4 + Math.random() * 2,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    delay: i * 0.5,
                });
            });

            /* ── Text timeline ── */
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.fromTo(
                badgeRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8 }
            );

            // Headline words
            if (headlineRef.current) {
                const text = headlineRef.current.innerText;
                const words = text.split(' ');
                headlineRef.current.innerHTML = words
                    .map((w) => `<span class="hero-word"><span class="hero-word-inner">${w}</span></span>`)
                    .join(' ');

                const wordInners = headlineRef.current.querySelectorAll('.hero-word-inner');
                tl.fromTo(
                    wordInners,
                    { y: '100%', opacity: 0 },
                    { y: '0%', opacity: 1, duration: 0.6, stagger: 0.08 },
                    '-=0.3'
                );
            }

            tl.fromTo(
                subtitleRef.current,
                { opacity: 0, y: 25 },
                { opacity: 1, y: 0, duration: 0.8 },
                '-=0.2'
            );

            tl.fromTo(
                ctaRef.current?.children ? Array.from(ctaRef.current.children) : [],
                { opacity: 0, y: 20, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, ease: 'back.out(1.7)' },
                '-=0.3'
            );

            tl.fromTo(
                scrollRef.current,
                { opacity: 0, y: -10 },
                { opacity: 1, y: 0, duration: 0.6 },
                '-=0.1'
            );

            // Scroll indicator bounce
            gsap.to(scrollRef.current, {
                y: 8,
                duration: 1.2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: 2.5,
            });
            }, heroRef);

            /* ── Mouse parallax (desktop only) ── */
            const handleMouseMove = (e: MouseEvent) => {
                if (window.innerWidth < 768) return;
                const { clientX, clientY } = e;
                const xPercent = (clientX / window.innerWidth - 0.5) * 2;
                const yPercent = (clientY / window.innerHeight - 0.5) * 2;

                tilesRef.current.forEach((tile, i) => {
                    if (!tile) return;
                    const depth = 0.5 + (i % 3) * 0.3;
                    gsap.to(tile, {
                        x: `+=${xPercent * 12 * depth}`,
                        y: `+=${yPercent * 8 * depth}`,
                        duration: 1,
                        ease: 'power2.out',
                        overwrite: 'auto',
                    });
                });

                orbsRef.current.forEach((orb, i) => {
                    if (!orb) return;
                    gsap.to(orb, {
                        x: `+=${xPercent * 6 * (i + 1) * 0.3}`,
                        y: `+=${yPercent * 4 * (i + 1) * 0.3}`,
                        duration: 1.5,
                        ease: 'power2.out',
                        overwrite: 'auto',
                    });
                });
            };

            window.addEventListener('mousemove', handleMouseMove);
            cleanup = () => {
                ctx.revert();
                window.removeEventListener('mousemove', handleMouseMove);
            };
        };

        void initAnimations();

        return () => cleanup();
    }, []);

    return (
        <section className="hero hero-full" ref={heroRef}>
            {/* ── Background orbs ── */}
            {ORBS.map((orb, i) => (
                <div
                    key={`orb-${i}`}
                    ref={(el) => { orbsRef.current[i] = el; }}
                    className="hero-orb"
                    style={{
                        left: orb.x,
                        top: orb.y,
                        width: orb.size,
                        height: orb.size,
                        background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
                    }}
                />
            ))}

            {/* ── Floating gem shards ── */}
            {TILES.map((tile, i) => (
                <div
                    key={`tile-${i}`}
                    ref={(el) => { tilesRef.current[i] = el; }}
                    className="hero-tile"
                    style={{
                        left: tile.x,
                        top: tile.y,
                        width: tile.size,
                        height: tile.size,
                    }}
                >
                    <svg viewBox="0 0 60 60" fill={tile.color} xmlns="http://www.w3.org/2000/svg">
                        <path d={GEM_PATH} stroke="rgba(15,118,110,0.22)" strokeWidth="1.5" />
                    </svg>
                </div>
            ))}

            {/* ── Grid pattern overlay ── */}
            <div className="hero-grid-overlay" />

            {/* ── Content ── */}
            <div className="container hero-content">
                <p className="hero-badge" ref={badgeRef}>
                    <span className="hero-badge-dot" />
                    Free browser game · Sliding gems · Fast-rising rows
                </p>

                <h1 ref={headlineRef}>
                    Slide the right gem, clear the whole row, stay alive one wave longer
                </h1>

                <p className="hero-subtitle" ref={subtitleRef}>
                    JewelSliding turns a board full of sparkling gems into a quick-thinking survival puzzle.
                    Drop each block into the empty gap below, build complete horizontal bands, and keep the stack from racing up the field as the pace accelerates.
                </p>

                <div className="hero-cta" ref={ctaRef}>
                    <Link href="/play" className="btn btn-primary btn-hero">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                        Play JewelSliding
                    </Link>
                    <Link href="/how-to-play" className="btn btn-secondary btn-hero">
                        Learn the Moves
                    </Link>
                </div>
            </div>

            {/* ── Scroll indicator ── */}
            <div className="hero-scroll-indicator" ref={scrollRef}>
                <span>Scroll to explore</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </div>
        </section>
    );
}

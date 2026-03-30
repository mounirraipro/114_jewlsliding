import type { Metadata } from 'next';
import GameEmbedActions from '../components/GameEmbedActions';

export const metadata: Metadata = {
    title: 'Play JewelSliding - Free Online Gem Puzzle',
    description: 'Play JewelSliding free. Slide gem blocks into open gaps, complete solid rows, and survive the faster waves.',
    keywords: ['play JewelSliding', 'free gem puzzle game', 'sliding block browser game', 'row clearing puzzle', 'play puzzle online'],
};

type PlayPageProps = {
    searchParams?: Promise<{ collection?: string; puzzle?: string }>;
};

export default async function PlayPage({ searchParams }: PlayPageProps) {
    const params = searchParams ? await searchParams : undefined;
    const iframeQuery = new URLSearchParams();

    if (params?.collection) {
        iframeQuery.set('collection', params.collection);
    }

    if (params?.puzzle) {
        iframeQuery.set('puzzle', params.puzzle);
    }

    const iframeSrc = iframeQuery.size > 0 ? `/game/index.html?${iframeQuery.toString()}` : '/game/index.html';
    const shareUrl = iframeQuery.size > 0 ? `/play?${iframeQuery.toString()}` : '/play';

    return (
        <main className="play-layout">
            <div className="play-main">
                <div className="play-frame-shell">
                    <div id="play-game-frame" className="play-frame-card">
                        <iframe
                            src={iframeSrc}
                            title="JewelSliding Game"
                            className="play-iframe"
                            allow="autoplay"
                            loading="lazy"
                        />
                    </div>
                    <GameEmbedActions targetId="play-game-frame" shareUrl={shareUrl} />
                </div>
            </div>
        </main>
    );
}

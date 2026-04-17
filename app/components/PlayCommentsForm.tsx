'use client';

import { useState } from 'react';

const CONTACT_EMAIL = 'contact@jewelsliding.com';

export default function PlayCommentsForm() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const mailSubject = '[JewelSliding] Play Page Comment';
        const mailBody = [
            `Name: ${formData.name}`,
            `Email: ${formData.email}`,
            'Page: /play',
            '',
            formData.message,
        ].join('\n');

        const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

        window.location.href = mailtoUrl;
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div
                className="card"
                style={{
                    textAlign: 'center',
                    padding: '2rem',
                    borderColor: 'var(--border)',
                }}
            >
                <h3 style={{ marginBottom: '0.5rem' }}>Your email app should be opening</h3>
                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                    If it did not, send your comment manually to {CONTACT_EMAIL}.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
                <label
                    htmlFor="play-comment-name"
                    style={{
                        display: 'block',
                        marginBottom: '0.45rem',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        color: 'var(--text)',
                    }}
                >
                    Name
                </label>
                <input
                    id="play-comment-name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    style={{
                        width: '100%',
                        padding: '0.875rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border)',
                        background: 'var(--bg-card)',
                        color: 'var(--text)',
                        fontSize: '1rem',
                        outline: 'none',
                    }}
                />
            </div>

            <div>
                <label
                    htmlFor="play-comment-email"
                    style={{
                        display: 'block',
                        marginBottom: '0.45rem',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        color: 'var(--text)',
                    }}
                >
                    Email
                </label>
                <input
                    id="play-comment-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    style={{
                        width: '100%',
                        padding: '0.875rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border)',
                        background: 'var(--bg-card)',
                        color: 'var(--text)',
                        fontSize: '1rem',
                        outline: 'none',
                    }}
                />
            </div>

            <div>
                <label
                    htmlFor="play-comment-message"
                    style={{
                        display: 'block',
                        marginBottom: '0.45rem',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        color: 'var(--text)',
                    }}
                >
                    Message
                </label>
                <textarea
                    id="play-comment-message"
                    required
                    rows={6}
                    placeholder="Share your feedback, a gameplay note, or anything you think we should improve."
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    style={{
                        width: '100%',
                        padding: '0.875rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border)',
                        background: 'var(--bg-card)',
                        color: 'var(--text)',
                        fontSize: '1rem',
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: 'inherit',
                    }}
                />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Comment
            </button>
        </form>
    );
}

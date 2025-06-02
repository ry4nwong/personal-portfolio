'use client';
import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const form = e.currentTarget;
            await emailjs.sendForm(
                'service_futdf5c',
                'template_1ibwi7d',
                form,
                'JNd0vOdj2bMUV9tW9'
            );
            setSubmitStatus('success');
            form.reset();
        } catch (error) {
            console.error('Failed to send email:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="flex flex-col gap-5 py-10 px-10 card">
            <div className="flex flex-col gap-2 mb-2">
                <h2 className="text-3xl font-semibold px-4">
                    🚀 Contact Me
                </h2>
                <p className="px-5">
                    I will respond as soon as possible!
                </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-2xl">
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="block w-full p-2 border border-[var(--border)] rounded-lg text-base focus:border-blue-500 bg-[var(--card-bg)]"
                        placeholder="Name"
                        disabled={isSubmitting}
                    />
                </div>

                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="block w-full p-2 border border-[var(--border)] rounded-lg text-base focus:border-blue-500 bg-[var(--card-bg)]"
                        placeholder="Email"
                        disabled={isSubmitting}
                    />
                </div>

                <div>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="block w-full p-2 border border-[var(--border)] rounded-lg text-sm focus:border-blue-500 bg-[var(--card-bg)]"
                        placeholder="Message"
                        disabled={isSubmitting}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2 rounded-lg font-semibold bg-[var(--muted)] transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                    <p className="text-green-500 text-sm text-center">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                    <p className="text-red-500 text-sm text-center">Failed to send message. Please try again.</p>
                )}
            </form>
        </section>
    );
}
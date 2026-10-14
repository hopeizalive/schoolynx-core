"use client";

import React, { useState } from 'react';

type ResultType = { type: 'success' | 'error'; message: string } | null;

type FormData = {
    fullName: string;
    phoneNumber: string;
    whatsapp: string;
    email: string;
};

const contactDetails = [
    {
        label: 'Call our team',
        value: '+92-315-5814609',
        href: 'tel:+923155814609',
        icon: (
            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path strokeLinecap="round" strokeLinejoin="round" d="m5 4 3.5-.8L11 7l-2 2a15 15 0 0 0 6 6l2-2 3.8 2.5L20 19c-.3 1-1.3 1.5-2.3 1.2A18 18 0 0 1 3.8 6.3C3.5 5.3 4 4.3 5 4Z" />
            </svg>
        ),
    },
    {
        label: 'Email us',
        value: 'rizwan@gmail.com',
        href: 'mailto:rizwan@gmail.com',
        icon: (
            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
            </svg>
        ),
    },
];

export default function ContactPage() {
    const [form, setForm] = useState<FormData>({
        fullName: '',
        phoneNumber: '',
        whatsapp: '',
        email: '',
    });
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<ResultType>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setForm((currentForm) => ({ ...currentForm, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResult(null);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json();

            if (data.success) {
                setResult({ type: 'success', message: 'Your message has been sent! We will be in touch soon.' });
                setForm({ fullName: '', phoneNumber: '', whatsapp: '', email: '' });
            } else {
                setResult({ type: 'error', message: data.message || 'Something went wrong.' });
            }
        } catch {
            setResult({ type: 'error', message: 'Unable to send your message. Please check your connection and try again.' });
        } finally {
            setLoading(false);
        }
    };

    const inputClassName = 'min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#172d50] outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-[#f4473e] focus:bg-white focus:ring-4 focus:ring-[#f4473e]/10';
    const labelClassName = 'mb-2 block text-sm font-semibold text-[#243653]';

    return (
        <main className="relative isolate min-h-screen overflow-hidden bg-[#f5f7fb] px-4 py-12 sm:px-6 sm:py-16">
            <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 -z-10 h-96 w-96 rounded-full bg-rose-100/70 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />

            <div className="mx-auto max-w-6xl">
                <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#f4473e]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#c7342e] shadow-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#f4473e]" />
                        We&apos;re here to help
                    </span>
                    <h1 className="mt-5 text-4xl font-bold tracking-tight text-[#172d50] sm:text-5xl">
                        Let&apos;s start a conversation.
                    </h1>
                    <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                        Have a question about Schoolynx? Send us a message and our team will be happy to help.
                    </p>
                </header>

                <div className="grid overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_28px_80px_-40px_rgba(23,45,80,0.25)] lg:grid-cols-[1fr_0.72fr]">
                    <section className="p-6 sm:p-9 lg:p-11" aria-labelledby="contact-form-heading">
                        <div className="mb-7">
                            <h2 id="contact-form-heading" className="text-xl font-bold text-[#172d50] sm:text-2xl">
                                Send us a message
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Fill in your details below. Fields marked <span className="font-semibold text-[#e3443b]">*</span> are required.
                            </p>
                        </div>

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="fullName" className={labelClassName}>
                                        Full name <span className="text-[#e3443b]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        autoComplete="name"
                                        value={form.fullName}
                                        onChange={handleChange}
                                        className={inputClassName}
                                        placeholder="e.g. Ayesha Khan"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phoneNumber" className={labelClassName}>
                                        Phone number <span className="text-[#e3443b]">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        autoComplete="tel"
                                        value={form.phoneNumber}
                                        onChange={handleChange}
                                        className={inputClassName}
                                        placeholder="+92 300 1234567"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="whatsapp" className={labelClassName}>
                                        WhatsApp <span className="font-normal text-slate-400">(optional)</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="whatsapp"
                                        name="whatsapp"
                                        autoComplete="tel"
                                        value={form.whatsapp}
                                        onChange={handleChange}
                                        className={inputClassName}
                                        placeholder="If different from your phone"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className={labelClassName}>
                                        Email address <span className="text-[#e3443b]">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        autoComplete="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        className={inputClassName}
                                        placeholder="you@school.com"
                                        required
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#f4473e] px-6 text-sm font-bold text-white shadow-lg shadow-[#f4473e]/20 transition hover:-translate-y-0.5 hover:bg-[#d93630] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#172d50] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-44"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <svg aria-hidden="true" className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.4 0 0 5.4 0 12h4Zm2 5.3A8 8 0 0 1 4 12H0c0 3 1.1 5.7 3 7.8l3-2.5Z" />
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send message
                                        <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                                        </svg>
                                    </>
                                )}
                            </button>

                            {result && (
                                <div
                                    role="status"
                                    aria-live="polite"
                                    className={`rounded-xl border px-4 py-3 text-sm font-medium ${
                                        result.type === 'success'
                                            ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                                            : 'border-red-200 bg-red-50 text-red-700'
                                    }`}
                                >
                                    {result.message}
                                </div>
                            )}
                        </form>
                    </section>

                    <aside className="relative isolate overflow-hidden bg-[#172d50] p-6 text-white sm:p-9 lg:p-11">
                        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-[#f4473e]/20 blur-3xl" />
                        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-64 w-64 rounded-full bg-blue-400/15 blur-3xl" />

                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#ff8279] ring-1 ring-inset ring-white/10">
                            <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
                            </svg>
                        </span>
                        <h2 className="mt-5 text-2xl font-bold tracking-tight">Quick contact</h2>
                        <p className="mt-2 text-sm leading-6 text-blue-100/75">
                            Prefer a direct conversation? Reach out using the details below.
                        </p>

                        <div className="mt-8 space-y-5">
                            {contactDetails.map((detail) => (
                                <a
                                    key={detail.label}
                                    href={detail.href}
                                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8279]"
                                >
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#ff8279]">
                                        {detail.icon}
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block text-xs font-medium text-blue-100/60">{detail.label}</span>
                                        <span className="mt-1 block break-all text-sm font-semibold text-white group-hover:text-[#ffaaa4]">
                                            {detail.value}
                                        </span>
                                    </span>
                                </a>
                            ))}
                        </div>

                        <div className="my-8 h-px bg-white/15" />

                        <div className="flex items-start gap-4">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#ff8279]">
                                <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" />
                                    <circle cx="12" cy="9" r="2.3" />
                                </svg>
                            </span>
                            <div>
                                <h3 className="text-sm font-semibold text-white">Visit our office</h3>
                                <p className="mt-2 text-sm leading-6 text-blue-100/75">
                                    Office No. 108, Iqra IT Park, Defence View Phase II, Shaheed-i-Milat Road, Karachi
                                </p>
                            </div>
                        </div>

                        <p className="mt-8 text-xs font-medium text-blue-100/50">
                            We look forward to hearing from you.
                        </p>
                    </aside>
                </div>
            </div>
        </main>
    );
}

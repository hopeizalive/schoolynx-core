"use client";

import React, { useState } from 'react';

type FormData = {
  fullName: string;
  role: 'owner' | 'principal' | 'admin' | 'itStaff' | 'other';
  phoneNumber: string;
  whatsapp: string;
  email: string;
  schoolName: string;
  location: string;
  totalStudents: string;
  totalStaff: string;
  interests: string[];
  otherInterest: string;
  preferredDate: string;
  preferredTime: string;
  additionalNotes: string;
};

type Result = { type: 'success' | 'error'; message: string } | null;

const roles: { value: FormData['role']; label: string }[] = [
  { value: 'owner', label: 'Owner' },
  { value: 'principal', label: 'Principal' },
  { value: 'admin', label: 'Administrator' },
  { value: 'itStaff', label: 'IT staff' },
  { value: 'other', label: 'Other' },
];

const interests = [
  'Student Admission',
  'Fee Management',
  'Attendance',
  'Exams & Result Cards',
  'Timetable',
  'Parent App',
  'Daily Homework / Diary',
  'SMS Alerts',
  'Online Classes',
];

const inputClassName =
  'min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#172d50] outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-[#f4473e] focus:bg-white focus:ring-4 focus:ring-[#f4473e]/10';
const labelClassName = 'mb-2 block text-sm font-semibold text-[#243653]';

const SectionIcon = ({ children }: { children: React.ReactNode }) => (
  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff0ef] text-[#e3443b]">
    {children}
  </span>
);

export default function LiveDemo() {
  const [form, setForm] = useState<FormData>({
    fullName: '',
    role: 'owner',
    phoneNumber: '',
    whatsapp: '',
    email: '',
    schoolName: '',
    location: '',
    totalStudents: '',
    totalStaff: '',
    interests: [],
    otherInterest: '',
    preferredDate: '',
    preferredTime: '',
    additionalNotes: '',
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm((currentForm) => ({ ...currentForm, [id]: value }));
  };

  const handleRoleChange = (role: FormData['role']) => {
    setForm((currentForm) => ({ ...currentForm, role }));
  };

  const handleInterestChange = (interest: string) => {
    setForm((currentForm) => ({
      ...currentForm,
      interests: currentForm.interests.includes(interest)
        ? currentForm.interests.filter((item) => item !== interest)
        : [...currentForm.interests, interest],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch('/api/live-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setResult({ type: 'success', message: 'Your demo request has been sent! Our team will be in touch soon.' });
        setForm({
          fullName: '',
          role: 'owner',
          phoneNumber: '',
          whatsapp: '',
          email: '',
          schoolName: '',
          location: '',
          totalStudents: '',
          totalStaff: '',
          interests: [],
          otherInterest: '',
          preferredDate: '',
          preferredTime: '',
          additionalNotes: '',
        });
      } else {
        setResult({ type: 'error', message: data.message || 'Something went wrong.' });
      }
    } catch {
      setResult({ type: 'error', message: 'Unable to send your request. Please check your connection and try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f4f7fc]">
      <section className="relative isolate overflow-hidden bg-[#101f3a] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-48 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#f4473e]/20 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-64 left-[-8rem] -z-10 h-[32rem] w-[32rem] rounded-full bg-blue-500/15 blur-3xl" />
        <div className="mx-auto max-w-7xl px-5 py-14 text-center sm:px-8 sm:py-16 lg:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#ff7169]" />
            See the difference for yourself
          </span>
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Request a live demo
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100/80 sm:text-lg sm:leading-8">
            Experience Schoolynx in action. Tell us a little about your school, and we&apos;ll tailor a walkthrough to your needs.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-blue-100/75">
            <span className="inline-flex items-center gap-2">
              <span className="text-[#ff8279]">✓</span> Personalised walkthrough
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-[#ff8279]">✓</span> No commitment required
            </span>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto grid max-w-7xl items-start gap-7 lg:grid-cols-[0.72fr_1.55fr] lg:gap-9">
          <aside className="overflow-hidden rounded-[1.6rem] bg-[#172d50] text-white shadow-xl shadow-[#172d50]/10">
            <div className="relative isolate overflow-hidden p-6 sm:p-8">
              <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 -z-10 h-64 w-64 rounded-full bg-[#f4473e]/20 blur-3xl" />
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#ff8279] ring-1 ring-inset ring-white/10">
                <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6m-6 4h4" />
                </svg>
              </span>
              <h2 className="mt-5 text-2xl font-bold tracking-tight">A demo made for you.</h2>
              <p className="mt-3 text-sm leading-6 text-blue-100/75">
                We&apos;ll focus on the tools and workflows that matter most to your school.
              </p>

              <ol className="mt-8 space-y-5">
                {[
                  { number: '01', title: 'Tell us about your school', detail: 'A few details help us prepare.' },
                  { number: '02', title: 'Choose your interests', detail: 'We will focus on what matters.' },
                  { number: '03', title: 'Pick a time that suits you', detail: 'Our team will confirm your demo.' },
                ].map((step) => (
                  <li key={step.number} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.07] text-xs font-bold text-[#ffaaa4]">
                      {step.number}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-white">{step.title}</span>
                      <span className="mt-1 block text-xs leading-5 text-blue-100/60">{step.detail}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="border-t border-white/10 bg-white/[0.04] px-6 py-5 sm:px-8">
              <p className="text-xs font-medium leading-5 text-blue-100/60">
                Your information is only used to arrange and personalise your Schoolynx demo.
              </p>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="space-y-5">
            <section className="rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-[0_16px_45px_-34px_rgba(23,45,80,0.25)] sm:p-7">
              <div className="mb-6 flex items-center gap-3">
                <SectionIcon>
                  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <circle cx="12" cy="8" r="4" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 21a7 7 0 0 1 14 0" />
                  </svg>
                </SectionIcon>
                <div>
                  <h2 className="text-lg font-bold text-[#172d50]">Your details</h2>
                  <p className="mt-0.5 text-xs text-slate-500">Who should we get in touch with?</p>
                </div>
              </div>

              <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className={labelClassName}>Full name <span className="text-[#e3443b]">*</span></label>
                  <input id="fullName" name="fullName" autoComplete="name" type="text" value={form.fullName} onChange={handleChange} className={inputClassName} placeholder="e.g. Ayesha Khan" required />
                </div>
                <div>
                  <label htmlFor="email" className={labelClassName}>Work email <span className="text-[#e3443b]">*</span></label>
                  <input id="email" name="email" autoComplete="email" type="email" value={form.email} onChange={handleChange} className={inputClassName} placeholder="you@school.com" required />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className={labelClassName}>Phone number <span className="text-[#e3443b]">*</span></label>
                  <input id="phoneNumber" name="phoneNumber" autoComplete="tel" type="tel" value={form.phoneNumber} onChange={handleChange} className={inputClassName} placeholder="+92 300 1234567" required />
                </div>
                <div>
                  <label htmlFor="whatsapp" className={labelClassName}>WhatsApp <span className="font-normal text-slate-400">(optional)</span></label>
                  <input id="whatsapp" name="whatsapp" type="tel" value={form.whatsapp} onChange={handleChange} className={inputClassName} placeholder="If different from your phone" />
                </div>
              </div>

              <fieldset className="mt-5">
                <legend className={labelClassName}>Your role <span className="text-[#e3443b]">*</span></legend>
                <div className="flex flex-wrap gap-2">
                  {roles.map((role) => (
                    <label
                      key={role.value}
                      className={`inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-full border px-3.5 text-sm font-medium transition focus-within:ring-2 focus-within:ring-[#f4473e] focus-within:ring-offset-2 ${
                        form.role === role.value
                          ? 'border-[#f4473e]/40 bg-[#fff0ef] text-[#c7342e]'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={role.value}
                        checked={form.role === role.value}
                        onChange={() => handleRoleChange(role.value)}
                        className="sr-only"
                      />
                      {form.role === role.value && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#f4473e]" />
                      )}
                      {role.label}
                    </label>
                  ))}
                </div>
              </fieldset>
            </section>

            <section className="rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-[0_16px_45px_-34px_rgba(23,45,80,0.25)] sm:p-7">
              <div className="mb-6 flex items-center gap-3">
                <SectionIcon>
                  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V7l8-4v18m-8-9h8m-4-5h.01M17 11h2v10m-4-5h.01" />
                  </svg>
                </SectionIcon>
                <div>
                  <h2 className="text-lg font-bold text-[#172d50]">About your school</h2>
                  <p className="mt-0.5 text-xs text-slate-500">Help us understand your institution.</p>
                </div>
              </div>

              <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="schoolName" className={labelClassName}>School name <span className="text-[#e3443b]">*</span></label>
                  <input id="schoolName" name="schoolName" type="text" value={form.schoolName} onChange={handleChange} className={inputClassName} placeholder="Your school or institution" required />
                </div>
                <div>
                  <label htmlFor="location" className={labelClassName}>City / location <span className="text-[#e3443b]">*</span></label>
                  <input id="location" name="location" type="text" value={form.location} onChange={handleChange} className={inputClassName} placeholder="e.g. Karachi" required />
                </div>
                <div>
                  <label htmlFor="totalStudents" className={labelClassName}>Number of students <span className="text-[#e3443b]">*</span></label>
                  <input id="totalStudents" name="totalStudents" type="number" min="0" value={form.totalStudents} onChange={handleChange} className={inputClassName} placeholder="e.g. 800" required />
                </div>
                <div>
                  <label htmlFor="totalStaff" className={labelClassName}>Number of staff <span className="text-[#e3443b]">*</span></label>
                  <input id="totalStaff" name="totalStaff" type="number" min="0" value={form.totalStaff} onChange={handleChange} className={inputClassName} placeholder="e.g. 65" required />
                </div>
              </div>
            </section>

            <section className="rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-[0_16px_45px_-34px_rgba(23,45,80,0.25)] sm:p-7">
              <div className="mb-6 flex items-center gap-3">
                <SectionIcon>
                  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v18H6.5A2.5 2.5 0 0 1 4 18.5v-13Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20M8 7h8m-8 4h6" />
                  </svg>
                </SectionIcon>
                <div>
                  <h2 className="text-lg font-bold text-[#172d50]">What would you like to explore?</h2>
                  <p className="mt-0.5 text-xs text-slate-500">Select all the areas you&apos;re interested in.</p>
                </div>
              </div>

              <div className="grid gap-2.5 sm:grid-cols-2">
                {interests.map((interest) => {
                  const isSelected = form.interests.includes(interest);

                  return (
                    <label
                      key={interest}
                      className={`flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border px-3.5 py-2.5 text-sm transition ${
                        isSelected
                          ? 'border-[#f4473e]/35 bg-[#fff7f6] text-[#a9312b]'
                          : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleInterestChange(interest)}
                        className="h-4 w-4 rounded border-slate-300 accent-[#f4473e] focus:ring-[#f4473e]"
                      />
                      <span className="font-medium">{interest}</span>
                    </label>
                  );
                })}
              </div>

              <div className="mt-4">
                <label htmlFor="otherInterest" className={labelClassName}>Something else?</label>
                <input id="otherInterest" name="otherInterest" type="text" value={form.otherInterest} onChange={handleChange} className={inputClassName} placeholder="Tell us what else you would like to see" />
              </div>
            </section>

            <section className="rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-[0_16px_45px_-34px_rgba(23,45,80,0.25)] sm:p-7">
              <div className="mb-6 flex items-center gap-3">
                <SectionIcon>
                  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4M3 10h18m-11 4h4m-4 3h4" />
                  </svg>
                </SectionIcon>
                <div>
                  <h2 className="text-lg font-bold text-[#172d50]">Pick a time for your demo</h2>
                  <p className="mt-0.5 text-xs text-slate-500">When is convenient for our team to contact you?</p>
                </div>
              </div>

              <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="preferredDate" className={labelClassName}>Preferred date <span className="text-[#e3443b]">*</span></label>
                  <input id="preferredDate" name="preferredDate" type="date" value={form.preferredDate} onChange={handleChange} className={inputClassName} required />
                </div>
                <div>
                  <label htmlFor="preferredTime" className={labelClassName}>Preferred time <span className="text-[#e3443b]">*</span></label>
                  <input id="preferredTime" name="preferredTime" type="time" value={form.preferredTime} onChange={handleChange} className={inputClassName} required />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="additionalNotes" className={labelClassName}>Anything else we should know? <span className="font-normal text-slate-400">(optional)</span></label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={form.additionalNotes}
                  onChange={handleChange}
                  rows={4}
                  className={`${inputClassName} resize-y`}
                  placeholder="Share any questions or details that will help us prepare for your demo."
                />
              </div>
            </section>

            <div className="rounded-[1.5rem] border border-slate-200/80 bg-white p-5 shadow-[0_16px_45px_-34px_rgba(23,45,80,0.25)] sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6">
              <p className="mb-4 text-xs leading-5 text-slate-500 sm:mb-0">
                By submitting, you agree that our team may contact you about your demo request.
              </p>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#f4473e] px-6 text-sm font-bold text-white shadow-lg shadow-[#f4473e]/20 transition hover:-translate-y-0.5 hover:bg-[#d93630] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#172d50] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-48"
              >
                {loading ? (
                  <>
                    <svg aria-hidden="true" className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.4 0 0 5.4 0 12h4Zm2 5.3A8 8 0 0 1 4 12H0c0 3 1.1 5.7 3 7.8l3-2.5Z" />
                    </svg>
                    Sending request...
                  </>
                ) : (
                  <>
                    Request my demo
                    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                    </svg>
                  </>
                )}
              </button>
            </div>
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
        </div>
      </section>
    </main>
  );
}

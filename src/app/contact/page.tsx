"use client";

import React, {useState} from 'react';

type ResultType = { type: 'success' | 'error'; message: string } | null;

type FormData = {
    fullName: string;
    phoneNumber: string;
    whatsapp: string;
    email: string;
};

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
        setForm({...form, [e.target.id]: e.target.value});
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResult(null);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(form),
            });
            const data = await res.json();

            if (data.success) {
                setResult({type: 'success', message: 'Your message has been sent!'});
                setForm({fullName: '', phoneNumber: '', whatsapp: '', email: ''});
            } else {
                setResult({type: 'error', message: data.message || 'Something went wrong.'});
            }
        } catch {
            setResult({type: 'error', message: 'Network error.'});
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen pt-12 pb-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Contact Us</h1>
                <p className='text-2xl text-gray-400 mb-12 text-center'>We&apos;d love to hear from you!</p>

                <div className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
                        <div className="bg-white pb-8 col-span-2">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {/* Contact Person Section */}
                                <div className="space-y-6">

                                    {/* Full Name */}
                                    <div>
                                        <label htmlFor="fullName"
                                               className="block text-base font-semibold text-gray-800 mb-1">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            value={form.fullName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-md focus:ring-2 focus:ring-red-500 focus:bg-white focus:border-red-500 text-base"
                                            required
                                        />
                                    </div>


                                    {/* Phone Number */}
                                    <div>
                                        <label htmlFor="phoneNumber"
                                               className="block text-base font-semibold text-gray-800 mb-1">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phoneNumber"
                                            value={form.phoneNumber}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-md focus:ring-2 focus:ring-red-500 focus:bg-white focus:border-red-500 text-base"
                                            required
                                        />
                                    </div>

                                    {/* WhatsApp */}
                                    <div>
                                        <label htmlFor="whatsapp"
                                               className="block text-base font-semibold text-gray-800 mb-1">
                                            WhatsApp (if any)
                                        </label>
                                        <input
                                            type="tel"
                                            id="whatsapp"
                                            value={form.whatsapp}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-md focus:ring-2 focus:ring-red-500 focus:bg-white focus:border-red-500 text-base"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email"
                                               className="block text-base font-semibold text-gray-800 mb-1">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-gray-100 border border-transparent rounded-md focus:ring-2 focus:ring-red-500 focus:bg-white focus:border-red-500 text-base"
                                            required
                                        />
                                    </div>
                                </div>


                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="mt-6 bg-red-500 hover:bg-red-600 text-white font-bold text-xl px-6 py-2 rounded transition w-40"
                                    disabled={loading}
                                >
                                    {loading ? 'Sending...' : 'Submit'}
                                </button>

                                {result && (
                                    <div
                                        className={`mt-4 text-lg font-semibold ${result.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                                        {result.message}
                                    </div>
                                )}
                            </form>
                        </div>

                        <div className="bg-gray-100 p-8 rounded-lg col-span-1">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Quick Contact</h3>
                            <h3 className="text-xl font-semibold text-red-600 hover:underline cursor-pointer">+91-8047-0918-07</h3>
                            <h3 className="text-lg font-semibold text-red-600 mb-4 hover:underline cursor-pointer">sales@Schoolynx.com</h3>
                            <hr className='text-gray-300'/>
                            <div className="space-y-6 pt-6">

                                <hr className='text-gray-300'/>

                                <div>


                                    <h4 className="text-2xl font-semibold text-gray-800 mb-4">Address</h4>
                                    <p className="text-gray-600">
                                        Office No.108 Iqra IT Park defence View Phase II,<br/>
                                        Shaheed-i-Milat Road Karachi
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 
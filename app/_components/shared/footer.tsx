'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.trim()) {
            setMessage('Please enter your email');
            return;
        }

        setLoading(true);
        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Subscribed successfully!');
                setEmail('');
                setTimeout(() => setMessage(''), 3000);
            } else {
                setMessage(data.message || 'Failed to subscribe');
            }
        } catch (error) {
            setMessage('Error subscribing. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer className="bg-slate-900 text-white py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-8">

                    <div className="flex flex-col gap-6 col-span-2">
                        <div className="flex items-start">
                            <Image
                                src="/logo.png"
                                alt="Berzerker Furrey Logo"
                                width={120}
                                height={120}
                                className="h-auto w-auto"
                            />
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed">
                            Carefully curated and handpicked comics for true fans, dedicated
                            enthusiasts, and serious collectors. Explore rare, vintage, and
                            premium editions, each telling a unique story and carrying the
                            legacy of legendary creators. Own, cherish, and celebrate the
                            comics that have shaped genres.
                        </p>

                        <div className="flex items-center gap-4">
                            <span className="text-white font-semibold text-sm">CONTACT</span>
                            <Link
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-amber-500 transition"
                            >
                                <FaFacebook size={20} />
                            </Link>
                            <Link
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-amber-500 transition"
                            >
                                <FaInstagram size={20} />
                            </Link>
                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-amber-500 transition"
                            >
                                <FaLinkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6 text-base">Company & Legal</h3>
                        <nav className="flex flex-col gap-4">
                            <Link
                                href="/about"
                                className="text-gray-300 hover:text-amber-500 transition text-sm"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/terms"
                                className="text-gray-300 hover:text-amber-500 transition text-sm"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                href="/privacy"
                                className="text-gray-300 hover:text-amber-500 transition text-sm"
                            >
                                Privacy Policy
                            </Link>
                        </nav>
                    </div>

                    <div className='col-span-2'>
                        <div className="flex  gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSubscribe(e)}
                                className="px-4 py-3 w-full rounded-md bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm font-medium"
                            />
                            <button
                                onClick={handleSubscribe}
                                disabled={loading}
                                className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-6 py-3 rounded-md transition disabled:opacity-50 text-sm"
                            >
                                {loading ? 'Subscribing...' : 'Subscribe'}
                            </button>
                            {message && (
                                <p
                                    className={`text-sm ${message.includes('success') || message.includes('Successfully')
                                            ? 'text-green-400'
                                            : 'text-red-400'
                                        }`}
                                >
                                    {message}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-6">
                    <div className="text-center text-gray-400 text-sm">
                        <p>
                            © 2025. Comic Book. <span className="text-gray-500">All rights reserved.</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import Link from 'next/link';
import { Instagram, Mail, MapPin } from 'lucide-react';
import React from 'react';
import AppLogo from '@modules/layout/app-logo';

// Composant TikTok Icon personnalisé
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.349-1.849-1.349-2.838C16.392.775 15.617 0 14.892 0h-3.892v15.108c0 1.849-1.5 3.349-3.349 3.349s-3.349-1.5-3.349-3.349 1.5-3.349 3.349-3.349c.366 0 .717.059 1.046.167V7.562a7.35 7.35 0 0 0-1.046-.075C3.201 7.487 0 10.688 0 14.639s3.201 7.151 7.651 7.151 7.651-3.201 7.651-7.151V8.562c1.5 1.075 3.349 1.7 5.349 1.7V6.387c-1.5 0-2.849-.575-3.849-1.5l-.481.675z"/>
  </svg>
);

export const AppFooter = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { label: 'À propos', href: '/about' },
            { label: 'Contact', href: '/contact' },
        ],
        legal: [
            { label: "Conditions d'utilisation", href: '/legal/terms' },
            { label: 'Politique de confidentialité', href: '/legal/privacy' },
            { label: 'Cookies', href: '/legal/cookies' },
        ],
    };

    const socialLinks = [
        { icon: <Instagram className="size-5" />, href: 'https://instagram.com/noktrastudio', label: 'Instagram' },
        { icon: <TikTokIcon className="size-5" />, href: 'https://tiktok.com/@noktra_studio', label: 'TikTok' },
    ];

    return (
        <footer className="bg-black pb-5 text-white dark:bg-black dark:text-white">
            {/* Main Footer Content */}
            <div className="px-8 md:px-40 pt-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Logo & Description */}
                    <div className="lg:col-span-2">
                        <div className="mb-4 inline-block">
                            <AppLogo />
                        </div>
                        <p className="mb-6 max-w-sm text-gray-400">
                            Plongez dans l'univers de la mode sombre et sophistiquée. Des pièces uniques qui transforment l'obscurité en matière
                            première du style.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center text-sm text-gray-400">
                                <Mail className="mr-2 size-4" />
                                contact@noktra.studio
                            </div>
                            <div className="flex items-center text-sm text-gray-400">
                                <MapPin className="mr-2 size-4" />
                                Paris, France
                            </div>
                        </div>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="mb-4 font-semibold">Légal</h4>
                        <ul className="space-y-2">
                            {footerLinks.legal.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Social Links & Copyright */}
                <div className="mt-12 border-t border-gray-800 pt-8">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <div className="mb-4 flex space-x-4 md:mb-0">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full bg-gray-900 p-2 transition-colors hover:bg-gray-800"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        <div className="text-center text-sm text-gray-400">© {currentYear} Noktra Studio. Tous droits réservés.</div>
                    </div>
                </div>
            </div>
            {/* Newsletter Section */}
        </footer>
    );
};

export default AppFooter
"use client";

import { signIn } from "next-auth/react";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const callbackUrl = searchParams.get("callbackUrl") || "/admin";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        const result = await signIn("credentials", {
            redirect: false,
            username,
            password,
        });

        if (result?.error) {
            setError("Invalid credentials.");
            setIsLoading(false);
        } else {
            router.push(callbackUrl);
            router.refresh();
        }
    };

    return (
        <section className="min-h-screen pt-32 pb-64 px-4 bg-brand-cream flex flex-col items-center justify-center relative">
            <div className="w-full max-w-md bg-white border-2 border-brand-dark p-8 md:p-12 shadow-[8px_8px_0_#000] rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="text-center mb-8">
                    <span className="font-sans text-brand-dark/50 font-bold uppercase tracking-[0.2em] text-xs mb-2 block">
                        Restricted Access
                    </span>
                    <h1 className="font-display text-4xl block font-black text-brand-dark uppercase tracking-tighter leading-none">
                        Admin <span className="text-brand-yellow">Login</span>
                    </h1>
                </div>

                {error && (
                    <div className="mb-6 p-3 bg-red-100 border-2 border-brand-red text-brand-red font-sans font-semibold text-center text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block font-sans font-bold text-brand-dark mb-2 text-sm uppercase tracking-wide">
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-4 bg-gray-50 border-2 border-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:bg-white transition-colors font-sans"
                            placeholder="Enter username"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-sans font-bold text-brand-dark mb-2 text-sm uppercase tracking-wide">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-4 bg-gray-50 border-2 border-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:bg-white transition-colors font-sans"
                            placeholder="Enter password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-4 px-8 border-2 border-brand-dark font-display uppercase font-black text-xl tracking-wider transition-all duration-300 shadow-[4px_4px_0_#000] ${isLoading
                            ? "bg-gray-200 text-gray-500 cursor-not-allowed translate-x-1 translate-y-1 shadow-none"
                            : "bg-brand-blue text-white hover:bg-white hover:text-brand-blue hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                            }`}
                    >
                        {isLoading ? "Logging in..." : "Access Results"}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default function Page() {
    return (
        <Suspense fallback={<div className="min-h-screen pt-32 pb-64 flex items-center justify-center bg-brand-cream">Loading...</div>}>
            <LoginForm />
        </Suspense>
    );
}

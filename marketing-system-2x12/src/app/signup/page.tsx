import Link from 'next/link';
import { Play } from 'lucide-react';

export default function SignupPage() {
    return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-[50%] -left-[10%] w-[40%] h-[50%] bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="w-full max-w-md glass-panel p-8 rounded-2xl border border-white/10 shadow-2xl animate-fade-in-up">
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                            <Play className="w-4 h-4 text-white fill-white" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
                            AIVideo.io
                        </span>
                    </Link>
                    <h1 className="text-2xl font-bold mb-2">Create Account</h1>
                    <p className="text-muted-foreground">Join the future of AI video streaming</p>
                </div>

                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1.5" htmlFor="firstName">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                className="w-full h-11 px-4 rounded-lg bg-secondary/50 border border-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50"
                                placeholder="Jane"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1.5" htmlFor="lastName">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                className="w-full h-11 px-4 rounded-lg bg-secondary/50 border border-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50"
                                placeholder="Doe"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1.5" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full h-11 px-4 rounded-lg bg-secondary/50 border border-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1.5" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full h-11 px-4 rounded-lg bg-secondary/50 border border-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50"
                            placeholder="Create a strong password"
                        />
                        <p className="text-xs text-muted-foreground mt-1">Must be at least 8 characters</p>
                    </div>

                    <button
                        type="submit"
                        className="w-full h-11 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-medium rounded-lg shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] mt-2"
                    >
                        Create Account
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-muted-foreground">
                    Already have an account?{' '}
                    <Link href="/login" className="text-primary hover:text-primary/80 font-medium transition-colors">
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
}

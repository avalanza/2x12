import Link from 'next/link';
import { Play } from 'lucide-react';

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
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
                    <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
                    <p className="text-muted-foreground">Sign in to your account to continue</p>
                </div>

                <form className="space-y-4">
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
                        <div className="flex items-center justify-between mb-1.5">
                            <label className="block text-sm font-medium" htmlFor="password">
                                Password
                            </label>
                            <Link href="#" className="text-xs text-primary hover:text-primary/80">Forgot password?</Link>
                        </div>
                        <input
                            type="password"
                            id="password"
                            className="w-full h-11 px-4 rounded-lg bg-secondary/50 border border-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full h-11 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-medium rounded-lg shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-muted-foreground">
                    Don't have an account?{' '}
                    <Link href="/signup" className="text-primary hover:text-primary/80 font-medium transition-colors">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
}

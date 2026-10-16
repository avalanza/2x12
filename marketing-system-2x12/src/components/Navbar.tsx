import Link from 'next/link';

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 h-16 flex items-center justify-between px-6 md:px-12">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
                <Link href="/">AIVideo.io</Link>
            </div>
            <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
                <Link href="/#features" className="hover:text-primary transition-colors">Features</Link>
                <Link href="/#creators" className="hover:text-primary transition-colors">Creators</Link>
                <Link href="/#pricing" className="hover:text-primary transition-colors">Pricing</Link>
            </div>
            <div className="flex gap-4">
                <Link href="/login" className="px-4 py-2 text-sm font-medium hover:text-white transition-colors">
                    Login
                </Link>
                <Link href="/signup" className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25">
                    Get Started
                </Link>
            </div>
        </nav>
    );
}

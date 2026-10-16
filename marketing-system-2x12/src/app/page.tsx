import Link from 'next/link';
import { Play, Upload, Users, Zap } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { FeatureCard } from '@/components/FeatureCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">

      <Navbar />

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-secondary text-xs font-medium text-blue-400 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
            <Zap className="w-3 h-3" /> The Future of Streaming
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
            The Premium Platform for <br />
            <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              AI-Generated Video
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
            Discover, stream, and monetize the next generation of synthetic media.
            Join the community of creators pushing the boundaries of what's possible.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
            <Link href="/explore" className="h-12 px-8 rounded-full bg-white text-black font-semibold flex items-center gap-2 hover:bg-gray-200 transition-colors">
              <Play className="w-4 h-4 fill-current" /> Start Watching
            </Link>
            <Link href="/creators" className="h-12 px-8 rounded-full glass-panel border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2">
              <Upload className="w-4 h-4" /> Become a Creator
            </Link>
          </div>

          {/* Hero Visual/Placeholder */}
          <div className="mt-20 relative max-w-5xl mx-auto aspect-video rounded-xl bg-gradient-to-br from-slate-900 to-black border border-white/10 shadow-2xl overflow-hidden group animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform cursor-pointer">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Play className="w-6 h-6 text-blue-400" />}
              title="Crystal Clear Streaming"
              description="Adaptive bitrate streaming ensures your AI masterpieces look perfect on any device."
            />
            <FeatureCard
              icon={<Users className="w-6 h-6 text-violet-400" />}
              title="Community First"
              description="Join a thriving community of AI artists, developers, and enthusiasts."
            />
            <FeatureCard
              icon={<Upload className="w-6 h-6 text-fuchsia-400" />}
              title="Easy Monetization"
              description="Creators keep up to 90% of revenue from memberships and tips."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

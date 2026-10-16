import { StudioSidebar } from '@/components/StudioSidebar';
import { Camera, Save } from 'lucide-react';

export default function SettingsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 flex">
            <StudioSidebar />

            <main className="flex-1 ml-64 p-8">
                <div className="max-w-4xl">
                    <h1 className="text-2xl font-bold mb-8">Channel Settings</h1>

                    <div className="space-y-8">
                        {/* Branding Section */}
                        <section className="p-8 rounded-2xl bg-secondary/10 border border-white/10">
                            <h2 className="text-lg font-semibold mb-6">Branding</h2>

                            <div className="flex items-start gap-8">
                                <div className="space-y-4 text-center">
                                    <div className="w-32 h-32 rounded-full bg-secondary/30 border-2 border-dashed border-white/20 flex flex-col items-center justify-center relative cursor-pointer hover:border-primary hover:bg-secondary/20 transition-all group overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop"
                                            alt="Avatar"
                                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                                        />
                                        <Camera className="w-8 h-8 text-white z-10" />
                                        <span className="text-xs text-white/80 mt-2 z-10">Change</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">Recommended: 98x98 px</p>
                                </div>

                                <div className="flex-1 space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-1.5">Channel Name</label>
                                        <input
                                            type="text"
                                            defaultValue="Synthetic Dreams"
                                            className="w-full max-w-md h-10 px-4 rounded-lg bg-secondary/30 border border-white/10 focus:border-primary/50 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1.5">Channel Handle</label>
                                        <div className="flex items-center gap-2 max-w-md bg-secondary/30 border border-white/10 rounded-lg px-4 focus-within:border-primary/50 transition-colors">
                                            <span className="text-muted-foreground">@</span>
                                            <input
                                                type="text"
                                                defaultValue="synthetic_dreams"
                                                className="flex-1 h-10 bg-transparent outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1.5">Description</label>
                                        <textarea
                                            rows={4}
                                            defaultValue="Exploring the boundaries of AI-generated video content. New uploads every week covering the latest tools and techniques in generative media."
                                            className="w-full max-w-md px-4 py-3 rounded-lg bg-secondary/30 border border-white/10 focus:border-primary/50 outline-none transition-all resize-none"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Preferences Section */}
                        <section className="p-8 rounded-2xl bg-secondary/10 border border-white/10">
                            <h2 className="text-lg font-semibold mb-6">Preferences</h2>
                            <div className="space-y-4 max-w-md">
                                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/20">
                                    <div>
                                        <p className="font-medium">Email Notifications</p>
                                        <p className="text-sm text-muted-foreground">Get emails about new comments</p>
                                    </div>
                                    <div className="w-12 h-6 rounded-full bg-primary p-1 cursor-pointer">
                                        <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/20">
                                    <div>
                                        <p className="font-medium">Show Subscriber Count</p>
                                        <p className="text-sm text-muted-foreground">Visible on your channel page</p>
                                    </div>
                                    <div className="w-12 h-6 rounded-full bg-primary p-1 cursor-pointer">
                                        <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="flex justify-end pt-4">
                            <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                                <Save className="w-4 h-4" /> Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

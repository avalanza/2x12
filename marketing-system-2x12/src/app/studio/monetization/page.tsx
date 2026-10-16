'use client';

import { StudioSidebar } from '@/components/StudioSidebar';
import { Plus, Edit2, Trash2, Check, DollarSign } from 'lucide-react';
import { useState } from 'react';

interface Tier {
    id: string;
    name: string;
    price: string;
    description: string;
    perks: string[];
}

const INITIAL_TIERS: Tier[] = [
    {
        id: '1',
        name: 'Supporter',
        price: '4.99',
        description: 'Support the channel and get a badge.',
        perks: ['Loyalty Badges', 'Custom Emojis']
    },
    {
        id: '2',
        name: 'Super Fan',
        price: '9.99',
        description: 'Get early access to my videos.',
        perks: ['Loyalty Badges', 'Custom Emojis', 'Early Access', 'Members-only Polls']
    }
];

export default function MonetizationPage() {
    const [tiers, setTiers] = useState<Tier[]>(INITIAL_TIERS);

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 flex">
            <StudioSidebar />

            <main className="flex-1 ml-64 p-8">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-2xl font-bold mb-2">Channel Monetization</h1>
                            <p className="text-muted-foreground">Manage your membership tiers and perks.</p>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                            <Plus className="w-4 h-4" /> Add Tier
                        </button>
                    </div>

                    {/* Overview Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="p-6 rounded-xl bg-secondary/10 border border-white/10">
                            <h3 className="text-sm font-medium text-muted-foreground mb-4">Total Members</h3>
                            <div className="text-3xl font-bold">842</div>
                            <div className="text-green-400 text-sm mt-2">+12 this week</div>
                        </div>
                        <div className="p-6 rounded-xl bg-secondary/10 border border-white/10">
                            <h3 className="text-sm font-medium text-muted-foreground mb-4">Est. Monthly Revenue</h3>
                            <div className="text-3xl font-bold">$5,240</div>
                            <div className="text-green-400 text-sm mt-2">+5.4% vs last month</div>
                        </div>
                        <div className="p-6 rounded-xl bg-secondary/10 border border-white/10">
                            <h3 className="text-sm font-medium text-muted-foreground mb-4">Active Tiers</h3>
                            <div className="text-3xl font-bold">2</div>
                            <div className="text-muted-foreground text-sm mt-2">Max 5 tiers</div>
                        </div>
                    </div>

                    {/* Tier Management */}
                    <h2 className="text-lg font-semibold mb-6">Membership Tiers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tiers.map((tier) => (
                            <div key={tier.id} className="rounded-2xl border border-white/10 bg-secondary/5 overflow-hidden flex flex-col">
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="font-bold text-xl">{tier.name}</h3>
                                        <div className="flex gap-2">
                                            <button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
                                                <Edit2 className="w-4 h-4 text-muted-foreground hover:text-white" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-3xl font-bold mb-4 flex items-baseline gap-1">
                                        ${tier.price} <span className="text-sm font-normal text-muted-foreground">/mo</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

                                    <div className="mt-auto space-y-3">
                                        {tier.perks.map((perk, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm">
                                                <div className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">
                                                    <Check className="w-3 h-3" />
                                                </div>
                                                <span>{perk}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-4 border-t border-white/5 bg-secondary/10 flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground">412 Members</span>
                                    <span className="text-green-400 font-medium">Active</span>
                                </div>
                            </div>
                        ))}

                        {/* Add New Placeholder */}
                        <div className="rounded-2xl border-2 border-dashed border-white/10 bg-transparent hover:bg-secondary/5 hover:border-white/20 transition-all flex flex-col items-center justify-center p-8 cursor-pointer group min-h-[300px]">
                            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                <Plus className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <h3 className="font-medium text-lg">Create New Tier</h3>
                            <p className="text-sm text-muted-foreground mt-2">Design a custom tier with unique perks</p>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

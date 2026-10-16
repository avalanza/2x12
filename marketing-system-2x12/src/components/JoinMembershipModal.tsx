'use client';

import { X, Check, Star } from 'lucide-react';
import { useState } from 'react';

interface JoinMembershipModalProps {
    isOpen: boolean;
    onClose: () => void;
    creatorName: string;
}

const TIERS = [
    {
        id: '1',
        name: 'Supporter',
        price: '4.99',
        perks: ['Loyalty Badges', 'Custom Emojis']
    },
    {
        id: '2',
        name: 'Super Fan',
        price: '9.99',
        perks: ['Loyalty Badges', 'Custom Emojis', 'Early Access', 'Members-only Polls'],
        recommended: true
    },
    {
        id: '3',
        name: 'Producer',
        price: '24.99',
        perks: ['All Previous Perks', 'Name in Credits', 'Merch Discount', 'Private Discord Access']
    }
];

export function JoinMembershipModal({ isOpen, onClose, creatorName }: JoinMembershipModalProps) {
    if (!isOpen) return null;

    const [selectedTier, setSelectedTier] = useState<string>('2');
    const [step, setStep] = useState<'selection' | 'success'>('selection');

    const handleJoin = () => {
        // Mock payment processing
        setStep('success');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="bg-[#0f0f11] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row overflow-hidden shadow-2xl animate-fade-in-up">

                {/* Visual Side (Hidden on mobile) */}
                <div className="hidden md:flex flex-col justify-between w-1/3 bg-primary/10 p-8 border-r border-white/5 bg-[url('https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center relative">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-2">Join {creatorName}</h2>
                        <p className="text-white/80">Support creative independence and unlock exclusive rewards.</p>
                    </div>
                    <div className="relative z-10 mt-12">
                        <div className="flex items-center gap-2 mb-4">
                            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            <span className="font-semibold">Member Benefits</span>
                        </div>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li>• Support your favorite creator directly</li>
                            <li>• Stand out in comments and chat</li>
                            <li>• Access exclusive behind-the-scenes</li>
                        </ul>
                    </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 p-6 md:p-8 relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors z-20"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {step === 'selection' ? (
                        <>
                            <div className="md:hidden text-center mb-6">
                                <h2 className="text-xl font-bold">Join {creatorName}</h2>
                            </div>

                            <div className="space-y-4">
                                {TIERS.map((tier) => (
                                    <div
                                        key={tier.id}
                                        onClick={() => setSelectedTier(tier.id)}
                                        className={`relative p-5 rounded-xl border-2 transition-all cursor-pointer flex flex-col md:flex-row gap-4 md:items-center ${selectedTier === tier.id ? 'border-primary bg-primary/5' : 'border-white/10 hover:border-white/30 bg-secondary/5'}`}
                                    >
                                        {tier.recommended && (
                                            <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg">
                                                Recommended
                                            </div>
                                        )}
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-2">
                                                <h3 className="font-bold text-lg">{tier.name}</h3>
                                                <span className="text-xl font-bold">${tier.price}<span className="text-sm font-normal text-muted-foreground">/mo</span></span>
                                            </div>
                                            <div className="flex flex-wrap gap-x-4 gap-y-1">
                                                {tier.perks.map((perk, i) => (
                                                    <span key={i} className="text-sm text-muted-foreground flex items-center gap-1">
                                                        <Check className="w-3 h-3 text-green-400" /> {perk}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${selectedTier === tier.id ? 'border-primary' : 'border-white/30'}`}>
                                            {selectedTier === tier.id && <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/5">
                                <button
                                    onClick={handleJoin}
                                    className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                                >
                                    Join Now
                                </button>
                                <p className="text-center text-xs text-muted-foreground mt-4">
                                    Recurring billing. Cancel anytime. By joining, you agree to our Terms of Service.
                                </p>
                            </div>
                        </>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center text-center py-12">
                            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6 animate-fade-in-up">
                                <Check className="w-10 h-10 text-green-400" />
                            </div>
                            <h2 className="text-2xl font-bold mb-2">Welcome to the inner circle!</h2>
                            <p className="text-muted-foreground mb-8 text-balance max-w-sm">
                                You are now a <strong>Super Fan</strong> of {creatorName}. Your perks are active immediately.
                            </p>
                            <button
                                onClick={onClose}
                                className="px-8 py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors"
                            >
                                Continue Watching
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

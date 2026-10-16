'use client';

import { StudioSidebar } from '@/components/StudioSidebar';
import { Upload, X, Film, Wand2, Plus, FileVideo } from 'lucide-react';
import { useState, useRef } from 'react';

export default function UploadPage() {
    const [file, setFile] = useState<File | null>(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handlePublish = () => {
        console.log({
            file: file?.name,
            title,
            description,
            status: 'published'
        });
        alert('Video published! (Check console for data)');
    };

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 flex">
            <StudioSidebar />

            <main className="flex-1 ml-64 p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl font-bold mb-8">Upload New Video</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column: Upload & Preview */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Drag & Drop Zone */}
                            {!file ? (
                                <div
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    onClick={() => fileInputRef.current?.click()}
                                    className={`border-2 border-dashed rounded-2xl p-12 flex flex-col items-center justify-center transition-colors cursor-pointer group ${isDragging ? 'border-primary bg-primary/10' : 'border-white/10 bg-secondary/10 hover:bg-secondary/20'
                                        }`}
                                >
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        className="hidden"
                                        accept="video/mp4,video/mov,video/webm"
                                        onChange={handleFileSelect}
                                    />
                                    <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Upload className={`w-8 h-8 transition-colors ${isDragging ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}`} />
                                    </div>
                                    <h3 className="text-lg font-medium mb-1">Drag video here to upload</h3>
                                    <p className="text-sm text-muted-foreground mb-6">Or click to select files</p>
                                    <button className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                                        Select Files
                                    </button>
                                    <p className="text-xs text-muted-foreground mt-4">MP4, MOV, WebM up to 2GB</p>
                                </div>
                            ) : (
                                <div className="border border-white/10 rounded-2xl p-6 bg-secondary/10 flex items-center gap-4 relative">
                                    <button
                                        onClick={() => setFile(null)}
                                        className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/10 transition-colors"
                                    >
                                        <X className="w-5 h-5 text-muted-foreground" />
                                    </button>
                                    <div className="w-16 h-16 rounded-lg bg-black flex items-center justify-center shrink-0">
                                        <FileVideo className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium truncate max-w-[200px]">{file.name}</p>
                                        <p className="text-sm text-muted-foreground">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                                    </div>
                                </div>
                            )}

                            {/* Metadata Form */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1.5">Title</label>
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="w-full h-11 px-4 rounded-lg bg-secondary/30 border border-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50"
                                        placeholder="E.g., Cyberpunk City Walkthrough"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1.5">Description</label>
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="w-full h-32 px-4 py-3 rounded-lg bg-secondary/30 border border-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-muted-foreground/50 resize-none"
                                        placeholder="Tell viewers about your video..."
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: AI Details */}
                        <div className="space-y-6">
                            <div className="p-6 rounded-xl bg-secondary/30 border border-white/5 space-y-4">
                                <h3 className="font-semibold flex items-center gap-2">
                                    <Wand2 className="w-4 h-4 text-fuchsia-400" /> AI Generation Details
                                </h3>

                                <div>
                                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Model Used</label>
                                    <select className="w-full h-10 px-3 rounded-lg bg-black/20 border border-white/10 focus:border-primary/50 outline-none text-sm">
                                        <option>Sora v1.0</option>
                                        <option>Runway Gen-2</option>
                                        <option>Pika Labs</option>
                                        <option>Stable Video Diffusion</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Prompt</label>
                                    <textarea
                                        className="w-full h-24 px-3 py-2 rounded-lg bg-black/20 border border-white/10 focus:border-primary/50 outline-none text-sm resize-none"
                                        placeholder="The prompt used to generate this video..."
                                    ></textarea>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Negative Prompt</label>
                                    <textarea
                                        className="w-full h-16 px-3 py-2 rounded-lg bg-black/20 border border-white/10 focus:border-primary/50 outline-none text-sm resize-none"
                                        placeholder="(Optional) What to exclude..."
                                    ></textarea>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 pt-4">
                                <button className="px-5 py-2.5 rounded-lg font-medium hover:bg-secondary/50 transition-colors">
                                    Save Draft
                                </button>
                                <button
                                    onClick={handlePublish}
                                    className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={!file}
                                >
                                    Publish Video
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

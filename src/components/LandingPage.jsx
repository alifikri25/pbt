import { Camera, Aperture, Layers, Download, ArrowRight, Images } from 'lucide-react';
import { FRAMES, getFrameThumbnail } from '../data/frames';

export default function LandingPage({ onNavigate }) {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <nav className="flex justify-between items-center mb-16 animate-fade-in">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                            <Camera className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold">PhotoBooth</span>
                    </div>
                    <button
                        onClick={() => onNavigate('gallery')}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass hover:bg-slate-700/50 transition-all duration-300"
                    >
                        <Images className="w-5 h-5" />
                        <span className="hidden sm:inline">Gallery</span>
                    </button>
                </nav>

                <section className="text-center py-16 md:py-24 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-purple-300 mb-6">
                        <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                        Professional Quality Photos
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
                        <span className="gradient-text">Premium</span>
                        <br />
                        <span className="text-white">Photobooth Studio</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Capture magical moments with stunning premium frames.
                        Professional quality photos instantly downloadable.
                    </p>

                    <button
                        onClick={() => onNavigate('camera')}
                        className="btn-primary text-white px-10 py-5 rounded-2xl text-lg font-semibold inline-flex items-center gap-3 animate-pulse-glow"
                    >
                        <Camera className="w-6 h-6" />
                        Start Photobooth
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </section>

                <section className="py-16">
                    <h2 className="text-3xl md:text-4xl font-display text-center mb-4">How It Works</h2>
                    <p className="text-slate-400 text-center mb-12">Simple 3-step process to capture your moments</p>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { icon: Aperture, title: 'Allow Camera', desc: 'Grant camera access to start capturing beautiful photos' },
                            { icon: Layers, title: 'Choose Frame', desc: 'Pick from 16+ stunning aesthetic templates for any occasion' },
                            { icon: Download, title: 'Capture & Download', desc: 'Take photos, save to gallery, and download instantly' }
                        ].map((step, i) => (
                            <div
                                key={i}
                                className="glass p-8 rounded-3xl text-center card-hover"
                                style={{ animationDelay: `${i * 0.15}s` }}
                            >
                                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30">
                                    <step.icon className="w-10 h-10 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-16">
                    <h2 className="text-3xl md:text-4xl font-display text-center mb-4">Aesthetic Templates</h2>
                    <p className="text-slate-400 text-center mb-12">Premium frames for every occasion</p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {FRAMES.slice(0, 6).map((frame) => (
                            <div
                                key={frame.id}
                                className="glass p-2 rounded-2xl card-hover cursor-pointer group"
                                onClick={() => onNavigate('camera')}
                            >
                                <div className="aspect-[2/3] rounded-xl overflow-hidden mb-2 bg-slate-800">
                                    <img
                                        src={getFrameThumbnail(frame)}
                                        alt={frame.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                </div>
                                <p className="text-xs text-center text-slate-300 truncate font-medium">{frame.name}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <button
                            onClick={() => onNavigate('camera')}
                            className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-2"
                        >
                            View all {FRAMES.length} templates
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </section>

                <footer className="text-center py-12 border-t border-slate-800">
                    <p className="text-slate-500 text-sm">
                        © 2026 Premium Photobooth Studio. Made with ♥
                    </p>
                </footer>
            </div>
        </div>
    );
}

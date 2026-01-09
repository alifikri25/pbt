import { ArrowLeft, Camera, Download, Trash2, AlertTriangle, Images } from 'lucide-react';

export default function Gallery({
    photos,
    onNavigate,
    onDelete,
    onDownload,
    onClearAll,
    showConfirm,
    setShowConfirm
}) {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <nav className="flex justify-between items-center mb-8">
                    <button
                        onClick={() => onNavigate('camera')}
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="hidden sm:inline">Back</span>
                    </button>

                    <h1 className="text-2xl md:text-3xl font-display font-bold flex items-center gap-3">
                        <Images className="w-7 h-7 text-primary-400" />
                        My Photos
                        {photos.length > 0 && (
                            <span className="bg-primary-500 text-sm px-3 py-1 rounded-full font-sans">
                                {photos.length}
                            </span>
                        )}
                    </h1>

                    <div className="flex gap-2">
                        <button
                            onClick={() => onNavigate('camera')}
                            className="btn-primary text-white px-4 py-2.5 rounded-xl flex items-center gap-2 font-medium"
                        >
                            <Camera className="w-5 h-5" />
                            <span className="hidden md:inline">Take More</span>
                        </button>
                        {photos.length > 0 && (
                            <button
                                onClick={() => setShowConfirm(true)}
                                className="px-4 py-2.5 rounded-xl glass text-red-400 hover:bg-red-500/20 transition-all font-medium"
                            >
                                <span className="hidden md:inline">Clear All</span>
                                <Trash2 className="w-5 h-5 md:hidden" />
                            </button>
                        )}
                    </div>
                </nav>

                {photos.length === 0 ? (
                    <div className="text-center py-20 animate-fade-in">
                        <div className="w-32 h-32 mx-auto mb-8 rounded-3xl glass flex items-center justify-center">
                            <Camera className="w-16 h-16 text-slate-500" />
                        </div>
                        <h2 className="text-3xl font-display font-semibold mb-4">No photos yet</h2>
                        <p className="text-slate-400 mb-10 max-w-md mx-auto">
                            Start capturing beautiful moments with our premium photobooth!
                        </p>
                        <button
                            onClick={() => onNavigate('camera')}
                            className="btn-primary text-white px-10 py-5 rounded-2xl text-lg font-semibold inline-flex items-center gap-3"
                        >
                            <Camera className="w-6 h-6" />
                            Take Your First Photo
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                        {photos.map((photo, index) => (
                            <div
                                key={photo.key}
                                className="glass rounded-2xl overflow-hidden card-hover group animate-fade-in"
                                style={{ animationDelay: `${index * 0.03}s` }}
                            >
                                <div className="relative bg-slate-800">
                                    <img
                                        src={photo.value.imageData}
                                        alt="Photo"
                                        className="w-full h-auto object-contain"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                                        <button
                                            onClick={() => onDownload(photo.value.imageData)}
                                            className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all hover:scale-110"
                                            title="Download"
                                        >
                                            <Download className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => onDelete(photo.key)}
                                            className="p-2.5 rounded-full bg-red-500/50 hover:bg-red-500/70 backdrop-blur-sm transition-all hover:scale-110"
                                            title="Delete"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <p className="text-xs text-slate-400 mb-0.5">
                                        {new Date(photo.value.timestamp).toLocaleDateString()}
                                    </p>
                                    {photo.value.frameName && (
                                        <p className="text-xs font-medium truncate text-slate-300">{photo.value.frameName}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {showConfirm && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-slate-900 rounded-2xl p-8 max-w-sm w-full text-center animate-scale-in border border-slate-700/50">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-red-500/20 flex items-center justify-center">
                                <AlertTriangle className="w-10 h-10 text-red-400" />
                            </div>
                            <h3 className="text-2xl font-display font-semibold mb-3">Clear All Photos?</h3>
                            <p className="text-slate-400 mb-8">
                                This will permanently delete all {photos.length} photos. This action cannot be undone.
                            </p>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setShowConfirm(false)}
                                    className="flex-1 py-3.5 rounded-xl glass hover:bg-slate-700/50 transition-all font-medium"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {
                                        onClearAll();
                                        setShowConfirm(false);
                                    }}
                                    className="flex-1 py-3.5 rounded-xl bg-red-500 hover:bg-red-600 transition-all text-white font-medium"
                                >
                                    Clear All
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

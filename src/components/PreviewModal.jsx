import { X, RotateCcw, Save, Download } from 'lucide-react';
import { useEffect } from 'react';

export default function PreviewModal({ photo, onClose, onSave, onDownload, onRetake }) {
    useEffect(() => {
        const handleKeydown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'Enter') onSave();
        };
        window.addEventListener('keydown', handleKeydown);
        return () => window.removeEventListener('keydown', handleKeydown);
    }, [onClose, onSave]);

    if (!photo) return null;

    return (
        <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-auto"
            onClick={onClose}
        >
            <div
                className="bg-slate-900 rounded-3xl p-4 md:p-6 max-w-2xl w-full animate-scale-in shadow-2xl border border-slate-700/50 my-4"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Preview Photo</h3>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-slate-700/50 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="rounded-2xl overflow-hidden mb-4 bg-slate-800 flex items-center justify-center max-h-[60vh]">
                    <img
                        src={photo}
                        alt="Captured photo"
                        className="max-w-full max-h-[60vh] object-contain"
                    />
                </div>

                <div className="flex gap-2 md:gap-3">
                    <button
                        onClick={onRetake}
                        className="flex-1 py-3 rounded-xl glass hover:bg-slate-700/50 transition-all flex items-center justify-center gap-2 font-medium text-sm md:text-base"
                    >
                        <RotateCcw className="w-4 h-4 md:w-5 md:h-5" />
                        <span className="hidden sm:inline">Retake</span>
                    </button>
                    <button
                        onClick={onSave}
                        className="flex-1 py-3 rounded-xl btn-primary text-white flex items-center justify-center gap-2 font-medium text-sm md:text-base"
                    >
                        <Save className="w-4 h-4 md:w-5 md:h-5" />
                        Save
                    </button>
                    <button
                        onClick={onDownload}
                        className="flex-1 py-3 rounded-xl btn-secondary text-white flex items-center justify-center gap-2 font-medium text-sm md:text-base"
                    >
                        <Download className="w-4 h-4 md:w-5 md:h-5" />
                        Download
                    </button>
                </div>

                <p className="text-center text-xs text-slate-500 mt-3">
                    Press Enter to save, Esc to close
                </p>
            </div>
        </div>
    );
}

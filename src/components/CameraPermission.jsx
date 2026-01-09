import { Camera, Loader2 } from 'lucide-react';

export default function CameraPermission({ status, onRequest }) {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="glass p-12 rounded-3xl text-center max-w-md w-full animate-fade-in">
                <div className={`w-28 h-28 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-2xl shadow-primary-500/30 ${status === 'loading' ? '' : 'animate-float'}`}>
                    {status === 'loading' ? (
                        <Loader2 className="w-12 h-12 text-white animate-spin" />
                    ) : (
                        <Camera className="w-12 h-12 text-white" />
                    )}
                </div>

                {status === 'loading' && (
                    <>
                        <h2 className="text-2xl font-display font-bold mb-4">Requesting Access...</h2>
                        <p className="text-slate-400">Please allow camera access in your browser</p>
                    </>
                )}

                {status === 'denied' && (
                    <>
                        <h2 className="text-2xl font-display font-bold mb-4 text-red-400">Camera Access Denied</h2>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            Please enable camera access in your browser settings and reload the page.
                        </p>
                        <button
                            onClick={() => location.reload()}
                            className="btn-primary text-white px-8 py-4 rounded-2xl font-semibold inline-flex items-center gap-2"
                        >
                            Try Again
                        </button>
                    </>
                )}

                {status === 'prompt' && (
                    <>
                        <h2 className="text-2xl font-display font-bold mb-4">Camera Access Needed</h2>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            We need camera access to take your photos. Your privacy is important - photos are stored locally on your device.
                        </p>
                        <button
                            onClick={onRequest}
                            className="btn-primary text-white px-10 py-5 rounded-2xl text-lg font-semibold inline-flex items-center gap-3"
                        >
                            <Camera className="w-6 h-6" />
                            Allow Camera Access
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

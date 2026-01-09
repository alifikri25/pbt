import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Camera, Images, FlipHorizontal, Layers, X, Trash2, Check } from 'lucide-react';
import { getFrameImage, getPhotoSlots } from '../data/frames';
import FrameSelector from './FrameSelector';

export default function PhotoboothInterface({
    stream,
    selectedCategory,
    setSelectedCategory,
    selectedFrame,
    setSelectedFrame,
    recentPhotos,
    onCapture,
    onNavigate,
    countdownEnabled,
    setCountdownEnabled,
    flashEnabled,
    setFlashEnabled
}) {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [countdown, setCountdown] = useState(null);
    const [isFlashing, setIsFlashing] = useState(false);
    const [isMirrored, setIsMirrored] = useState(true);
    const [showMobileFrames, setShowMobileFrames] = useState(false);

    const [capturedPhotos, setCapturedPhotos] = useState([]);
    const [currentSlot, setCurrentSlot] = useState(0);

    const totalSlots = selectedFrame?.photoSlots?.length || 4;

    useEffect(() => {
        if (stream && videoRef.current) {
            videoRef.current.srcObject = stream;
        }
    }, [stream]);

    useEffect(() => {
        setCapturedPhotos([]);
        setCurrentSlot(0);
    }, [selectedFrame]);

    const capturePhoto = () => {
        if (countdownEnabled) {
            let count = 3;
            setCountdown(count);
            const interval = setInterval(() => {
                count--;
                if (count > 0) {
                    setCountdown(count);
                } else {
                    clearInterval(interval);
                    setCountdown(null);
                    doCapture();
                }
            }, 1000);
        } else {
            doCapture();
        }
    };

    const doCapture = () => {
        if (flashEnabled) {
            setIsFlashing(true);
            setTimeout(() => setIsFlashing(false), 300);
        }

        const video = videoRef.current;
        if (!video) return;

        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = 400;
        tempCanvas.height = 300;
        const tempCtx = tempCanvas.getContext('2d');

        tempCtx.save();
        if (isMirrored) {
            tempCtx.scale(-1, 1);
            tempCtx.drawImage(video, -400, 0, 400, 300);
        } else {
            tempCtx.drawImage(video, 0, 0, 400, 300);
        }
        tempCtx.restore();

        const photoData = tempCanvas.toDataURL('image/jpeg', 0.95);
        const newPhotos = [...capturedPhotos, photoData];
        setCapturedPhotos(newPhotos);

        if (newPhotos.length >= totalSlots) {
            generateFinalImage(newPhotos);
        } else {
            setCurrentSlot(newPhotos.length);
        }
    };

    const generateFinalImage = async (photos) => {
        const canvas = canvasRef.current;
        if (!canvas || !selectedFrame) return;

        const canvasWidth = 512;
        const canvasHeight = 768;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        const loadImage = (src) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.crossOrigin = 'anonymous';
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = src;
            });
        };

        const slots = getPhotoSlots(selectedFrame, canvasWidth, canvasHeight);

        for (let i = 0; i < photos.length && i < slots.length; i++) {
            const slot = slots[i];
            try {
                const img = await loadImage(photos[i]);

                ctx.save();
                ctx.beginPath();
                ctx.roundRect(slot.x, slot.y, slot.width, slot.height, 8);
                ctx.clip();

                const imgAspect = img.width / img.height;
                const slotAspect = slot.width / slot.height;

                let drawWidth, drawHeight, drawX, drawY;

                if (imgAspect > slotAspect) {
                    drawHeight = slot.height;
                    drawWidth = drawHeight * imgAspect;
                    drawX = slot.x - (drawWidth - slot.width) / 2;
                    drawY = slot.y;
                } else {
                    drawWidth = slot.width;
                    drawHeight = drawWidth / imgAspect;
                    drawX = slot.x;
                    drawY = slot.y - (drawHeight - slot.height) / 2;
                }

                ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
                ctx.restore();
            } catch (e) {
                console.error('Error loading photo:', e);
            }
        }

        try {
            const frameImg = await loadImage(getFrameImage(selectedFrame));
            ctx.drawImage(frameImg, 0, 0, canvasWidth, canvasHeight);
        } catch (e) {
            console.error('Error loading frame:', e);
        }

        const finalImage = canvas.toDataURL('image/png');
        onCapture(finalImage);

        setCapturedPhotos([]);
        setCurrentSlot(0);
    };

    const removePhoto = (index) => {
        const newPhotos = capturedPhotos.filter((_, i) => i !== index);
        setCapturedPhotos(newPhotos);
        setCurrentSlot(newPhotos.length);
    };

    const resetPhotos = () => {
        setCapturedPhotos([]);
        setCurrentSlot(0);
    };

    return (
        <div className="min-h-screen">
            {isFlashing && (
                <div className="fixed inset-0 bg-white z-50 pointer-events-none animate-[flash_0.3s_ease-out]" />
            )}

            <div className="container mx-auto px-4 py-4">
                <nav className="flex justify-between items-center mb-4">
                    <button
                        onClick={() => onNavigate('landing')}
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="hidden sm:inline">Back</span>
                    </button>

                    <h1 className="text-xl md:text-2xl font-display font-bold gradient-text">Photobooth</h1>

                    <button
                        onClick={() => onNavigate('gallery')}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl glass hover:bg-slate-700/50 transition-all"
                    >
                        <Images className="w-5 h-5" />
                        <span className="hidden md:inline">Gallery</span>
                        {recentPhotos.length > 0 && (
                            <span className="bg-purple-500 text-xs px-2 py-0.5 rounded-full">
                                {recentPhotos.length}
                            </span>
                        )}
                    </button>
                </nav>

                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="hidden lg:block w-72 glass rounded-2xl p-4 h-[calc(100vh-120px)] overflow-hidden">
                        <FrameSelector
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            selectedFrame={selectedFrame}
                            onSelectFrame={setSelectedFrame}
                        />
                    </div>

                    <div className="flex-1 flex flex-col items-center">
                        <div className="mb-4 flex items-center gap-2">
                            <span className="text-sm text-slate-400">Capture</span>
                            <div className="flex gap-1">
                                {Array.from({ length: totalSlots }, (_, i) => (
                                    <div
                                        key={i}
                                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all
                      ${i < capturedPhotos.length
                                                ? 'bg-green-500 text-white'
                                                : i === currentSlot
                                                    ? 'bg-purple-500 text-white animate-pulse'
                                                    : 'bg-slate-700 text-slate-400'}`}
                                    >
                                        {i < capturedPhotos.length ? <Check className="w-4 h-4" /> : i + 1}
                                    </div>
                                ))}
                            </div>
                            {capturedPhotos.length > 0 && (
                                <button
                                    onClick={resetPhotos}
                                    className="ml-2 p-1.5 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all"
                                    title="Reset"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        <div className="flex gap-4 items-start">
                            <div className="w-full max-w-sm">
                                <div className="aspect-[4/3] glass rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10 relative">
                                    <video
                                        ref={videoRef}
                                        autoPlay
                                        playsInline
                                        muted
                                        className="w-full h-full object-cover"
                                        style={{ transform: isMirrored ? 'scaleX(-1)' : 'scaleX(1)' }}
                                    />

                                    {countdown !== null && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                            <span className="text-8xl font-bold text-white drop-shadow-2xl animate-countdown">
                                                {countdown}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="flex justify-center items-center gap-4 mt-4">
                                    <button
                                        onClick={() => setIsMirrored(!isMirrored)}
                                        className={`p-3 rounded-full glass transition-all ${isMirrored ? 'bg-purple-500/20 text-purple-400' : 'hover:bg-slate-700/50'}`}
                                        title="Flip"
                                    >
                                        <FlipHorizontal className="w-5 h-5" />
                                    </button>

                                    <button
                                        onClick={capturePhoto}
                                        className="btn-primary text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 animate-pulse-glow"
                                    >
                                        <Camera className="w-6 h-6" />
                                        {currentSlot + 1}/{totalSlots}
                                    </button>

                                    <button
                                        onClick={() => setShowMobileFrames(true)}
                                        className="lg:hidden p-3 rounded-full glass hover:bg-slate-700/50 transition-all"
                                    >
                                        <Layers className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {capturedPhotos.length > 0 && (
                                <div className="hidden md:block w-24">
                                    <p className="text-xs text-slate-400 mb-2 text-center">Captured</p>
                                    <div className="space-y-2">
                                        {capturedPhotos.map((photo, i) => (
                                            <div key={i} className="relative group">
                                                <img
                                                    src={photo}
                                                    alt={`Photo ${i + 1}`}
                                                    className="w-full aspect-[4/3] object-cover rounded-lg"
                                                />
                                                <button
                                                    onClick={() => removePhoto(i)}
                                                    className="absolute top-1 right-1 p-1 rounded-full bg-red-500/80 opacity-0 group-hover:opacity-100 transition-opacity"
                                                >
                                                    <X className="w-3 h-3" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {selectedFrame && (
                                <div className="hidden lg:block w-48">
                                    <p className="text-xs text-slate-400 mb-2 text-center">Selected Frame</p>
                                    <div className="aspect-[2/3] rounded-xl overflow-hidden shadow-xl bg-slate-800">
                                        <img
                                            src={getFrameImage(selectedFrame)}
                                            alt={selectedFrame.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-center text-sm mt-2 font-medium">{selectedFrame.name}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="hidden lg:block w-64 glass rounded-2xl p-4">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <Images className="w-5 h-5 text-purple-400" />
                            Recent
                        </h3>

                        {recentPhotos.length === 0 ? (
                            <div className="text-center text-slate-500 py-8">
                                <Camera className="w-10 h-10 mx-auto mb-2 opacity-30" />
                                <p className="text-sm">No photos yet</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 gap-2">
                                {recentPhotos.slice(0, 4).map((photo, i) => (
                                    <div
                                        key={photo.key}
                                        className="aspect-[2/3] rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                                        onClick={() => onNavigate('gallery')}
                                    >
                                        <img
                                            src={photo.value.imageData}
                                            alt={`Photo ${i + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        {recentPhotos.length > 0 && (
                            <button
                                onClick={() => onNavigate('gallery')}
                                className="w-full mt-3 py-2 rounded-xl glass text-center hover:bg-slate-700/50 transition-all text-sm"
                            >
                                View All
                            </button>
                        )}

                        <div className="mt-4 pt-4 border-t border-slate-700/50">
                            <h4 className="text-sm font-semibold mb-3 text-slate-400">Settings</h4>

                            <label className="flex items-center justify-between mb-3 cursor-pointer">
                                <span className="text-sm text-slate-300">Countdown</span>
                                <div
                                    onClick={() => setCountdownEnabled(!countdownEnabled)}
                                    className={`w-11 h-6 rounded-full relative transition-colors cursor-pointer ${countdownEnabled ? 'bg-purple-500' : 'bg-slate-600'}`}
                                >
                                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${countdownEnabled ? 'right-1' : 'left-1'}`} />
                                </div>
                            </label>

                            <label className="flex items-center justify-between cursor-pointer">
                                <span className="text-sm text-slate-300">Flash</span>
                                <div
                                    onClick={() => setFlashEnabled(!flashEnabled)}
                                    className={`w-11 h-6 rounded-full relative transition-colors cursor-pointer ${flashEnabled ? 'bg-purple-500' : 'bg-slate-600'}`}
                                >
                                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${flashEnabled ? 'right-1' : 'left-1'}`} />
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <canvas ref={canvasRef} style={{ display: 'none' }} />

            {showMobileFrames && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 lg:hidden">
                    <div className="absolute bottom-0 left-0 right-0 bg-slate-900 rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto animate-fade-in-up">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Choose Frame</h3>
                            <button
                                onClick={() => setShowMobileFrames(false)}
                                className="p-2 rounded-full hover:bg-slate-700/50"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <FrameSelector
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            selectedFrame={selectedFrame}
                            onSelectFrame={(frame) => {
                                setSelectedFrame(frame);
                                setShowMobileFrames(false);
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

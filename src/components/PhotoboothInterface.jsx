import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Camera, Images, FlipHorizontal, Layers, X, Trash2, Check } from 'lucide-react';
import { getFrameOverlay, getLayoutDimensions, LAYOUT_OPTIONS } from '../data/frames';
import FrameSelector from './FrameSelector';

export default function PhotoboothInterface({
    stream,
    selectedCategory,
    setSelectedCategory,
    selectedFrame,
    setSelectedFrame,
    selectedLayout,
    setSelectedLayout,
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

    const layoutConfig = LAYOUT_OPTIONS.find(l => l.id === selectedLayout) || LAYOUT_OPTIONS[0];
    const totalSlots = layoutConfig.slots;

    useEffect(() => {
        if (stream && videoRef.current) {
            videoRef.current.srcObject = stream;
        }
    }, [stream]);

    useEffect(() => {
        setCapturedPhotos([]);
        setCurrentSlot(0);
    }, [selectedLayout, selectedFrame]);

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
        const photoWidth = 360;
        const photoHeight = photoWidth * 1.3;
        tempCanvas.width = photoWidth;
        tempCanvas.height = photoHeight;
        const tempCtx = tempCanvas.getContext('2d');

        tempCtx.save();
        if (isMirrored) {
            tempCtx.scale(-1, 1);
            tempCtx.drawImage(video, -photoWidth, 0, photoWidth, photoHeight);
        } else {
            tempCtx.drawImage(video, 0, 0, photoWidth, photoHeight);
        }
        tempCtx.restore();

        const photoData = tempCanvas.toDataURL('image/png');
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
        if (!canvas) return;

        const dimensions = getLayoutDimensions(selectedLayout, 400);
        canvas.width = dimensions.width;
        canvas.height = dimensions.height;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = selectedFrame?.colors?.bg || '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const loadImage = (src) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = src;
            });
        };

        for (let i = 0; i < photos.length && i < dimensions.photoSlots.length; i++) {
            const slot = dimensions.photoSlots[i];
            try {
                const img = await loadImage(photos[i]);
                ctx.save();
                ctx.beginPath();
                ctx.roundRect(slot.x, slot.y, slot.width, slot.height, 8);
                ctx.clip();
                ctx.drawImage(img, slot.x, slot.y, slot.width, slot.height);
                ctx.restore();
            } catch (e) {
                console.error('Error loading photo:', e);
            }
        }

        if (selectedFrame) {
            const frameData = getFrameOverlay(selectedFrame, selectedLayout, 400);
            try {
                const frameImg = await loadImage(frameData.svg);
                ctx.drawImage(frameImg, 0, 0, canvas.width, canvas.height);
            } catch (e) {
                console.error('Error loading frame:', e);
            }
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
                            <span className="bg-primary-500 text-xs px-2 py-0.5 rounded-full">
                                {recentPhotos.length}
                            </span>
                        )}
                    </button>
                </nav>

                <div className="flex flex-col lg:flex-row gap-4">
                    {/* Left Sidebar - Frame Selector */}
                    <div className="hidden lg:block w-72 glass rounded-2xl p-4 h-[calc(100vh-120px)] overflow-hidden">
                        <FrameSelector
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            selectedFrame={selectedFrame}
                            onSelectFrame={setSelectedFrame}
                            selectedLayout={selectedLayout}
                            setSelectedLayout={setSelectedLayout}
                        />
                    </div>

                    {/* Center - Camera & Preview */}
                    <div className="flex-1 flex flex-col items-center">
                        {/* Progress indicator for multi-photo */}
                        {totalSlots > 1 && (
                            <div className="mb-4 flex items-center gap-2">
                                <span className="text-sm text-slate-400">Photo</span>
                                <div className="flex gap-1">
                                    {Array.from({ length: totalSlots }, (_, i) => (
                                        <div
                                            key={i}
                                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all
                        ${i < capturedPhotos.length
                                                    ? 'bg-green-500 text-white'
                                                    : i === currentSlot
                                                        ? 'bg-primary-500 text-white animate-pulse'
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
                                        title="Reset all photos"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        )}

                        <div className="flex gap-4 items-start">
                            {/* Camera Preview */}
                            <div className="w-full max-w-sm">
                                <div className="camera-container glass rounded-2xl animate-glow shadow-2xl shadow-primary-500/10">
                                    <video
                                        ref={videoRef}
                                        autoPlay
                                        playsInline
                                        muted
                                        className="camera-video rounded-2xl"
                                        style={{ transform: isMirrored ? 'scaleX(-1)' : 'scaleX(1)' }}
                                    />

                                    {countdown !== null && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl">
                                            <span className="text-8xl font-bold text-white animate-countdown drop-shadow-2xl">
                                                {countdown}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="flex justify-center items-center gap-4 mt-4">
                                    <button
                                        onClick={() => setIsMirrored(!isMirrored)}
                                        className={`p-3 rounded-full glass transition-all ${isMirrored ? 'bg-primary-500/20 text-primary-400' : 'hover:bg-slate-700/50'}`}
                                        title="Flip horizontal"
                                    >
                                        <FlipHorizontal className="w-5 h-5" />
                                    </button>

                                    <button
                                        onClick={capturePhoto}
                                        className="btn-primary text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 animate-pulse-glow"
                                    >
                                        <Camera className="w-6 h-6" />
                                        {totalSlots > 1 ? `Capture ${currentSlot + 1}/${totalSlots}` : 'Capture'}
                                    </button>

                                    <button
                                        onClick={() => setShowMobileFrames(true)}
                                        className="lg:hidden p-3 rounded-full glass hover:bg-slate-700/50 transition-all"
                                        title="Choose frame"
                                    >
                                        <Layers className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Captured Photos Preview (for multi-photo) */}
                            {totalSlots > 1 && capturedPhotos.length > 0 && (
                                <div className="hidden md:block w-32">
                                    <p className="text-xs text-slate-400 mb-2 text-center">Captured</p>
                                    <div className="space-y-2">
                                        {capturedPhotos.map((photo, i) => (
                                            <div key={i} className="relative group">
                                                <img
                                                    src={photo}
                                                    alt={`Captured ${i + 1}`}
                                                    className="w-full aspect-[3/4] object-cover rounded-lg"
                                                />
                                                <button
                                                    onClick={() => removePhoto(i)}
                                                    className="absolute top-1 right-1 p-1 rounded-full bg-red-500/80 opacity-0 group-hover:opacity-100 transition-opacity"
                                                >
                                                    <X className="w-3 h-3" />
                                                </button>
                                                <span className="absolute bottom-1 left-1 bg-black/50 text-xs px-1.5 py-0.5 rounded">
                                                    #{i + 1}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Sidebar - Recent Photos & Settings */}
                    <div className="hidden lg:block w-64 glass rounded-2xl p-4">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                            <Images className="w-5 h-5 text-primary-400" />
                            Recent Photos
                            {recentPhotos.length > 0 && (
                                <span className="bg-primary-500 text-xs px-2 py-0.5 rounded-full">
                                    {recentPhotos.length}
                                </span>
                            )}
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
                                        className="aspect-[2/3] rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-lg"
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
                                className="w-full mt-3 py-2 rounded-xl glass text-center hover:bg-slate-700/50 transition-all text-sm font-medium"
                            >
                                View All Photos
                            </button>
                        )}

                        <div className="mt-4 pt-4 border-t border-slate-700/50">
                            <h4 className="text-sm font-semibold mb-3 text-slate-400">Settings</h4>

                            <label className="flex items-center justify-between mb-3 cursor-pointer group">
                                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">Countdown</span>
                                <div
                                    onClick={() => setCountdownEnabled(!countdownEnabled)}
                                    className={`w-11 h-6 rounded-full relative transition-colors cursor-pointer ${countdownEnabled ? 'bg-primary-500' : 'bg-slate-600'}`}
                                >
                                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all shadow-md ${countdownEnabled ? 'right-1' : 'left-1'}`} />
                                </div>
                            </label>

                            <label className="flex items-center justify-between cursor-pointer group">
                                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">Flash</span>
                                <div
                                    onClick={() => setFlashEnabled(!flashEnabled)}
                                    className={`w-11 h-6 rounded-full relative transition-colors cursor-pointer ${flashEnabled ? 'bg-primary-500' : 'bg-slate-600'}`}
                                >
                                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all shadow-md ${flashEnabled ? 'right-1' : 'left-1'}`} />
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <canvas ref={canvasRef} style={{ display: 'none' }} />

            {/* Mobile Frame Selector */}
            {showMobileFrames && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 lg:hidden">
                    <div className="absolute bottom-0 left-0 right-0 bg-slate-900 rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto animate-fade-in-up">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Choose Frame & Layout</h3>
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
                            }}
                            selectedLayout={selectedLayout}
                            setSelectedLayout={setSelectedLayout}
                        />
                        <button
                            onClick={() => setShowMobileFrames(false)}
                            className="w-full mt-4 btn-primary text-white py-3 rounded-xl font-medium"
                        >
                            Done
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

import { useState, useEffect, useCallback } from 'react';
import { FRAMES } from './data/frames';
import { storage } from './hooks/useStorage';

import Toast from './components/Toast';
import LandingPage from './components/LandingPage';
import CameraPermission from './components/CameraPermission';
import PhotoboothInterface from './components/PhotoboothInterface';
import PreviewModal from './components/PreviewModal';
import Gallery from './components/Gallery';

export default function App() {
    const [currentPage, setCurrentPage] = useState('landing');
    const [cameraStatus, setCameraStatus] = useState('prompt');
    const [stream, setStream] = useState(null);

    const [selectedFrame, setSelectedFrame] = useState(FRAMES[0]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedLayout, setSelectedLayout] = useState('1x1');

    const [countdownEnabled, setCountdownEnabled] = useState(true);
    const [flashEnabled, setFlashEnabled] = useState(true);

    const [photos, setPhotos] = useState([]);
    const [capturedPhoto, setCapturedPhoto] = useState(null);

    const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
    const [showConfirm, setShowConfirm] = useState(false);

    const showToast = useCallback((message, type = 'success') => {
        setToast({ show: true, message, type });
    }, []);

    const hideToast = useCallback(() => {
        setToast({ show: false, message: '', type: 'success' });
    }, []);

    const loadPhotos = useCallback(() => {
        const savedPhotos = storage.getPhotos();
        setPhotos(savedPhotos);
    }, []);

    useEffect(() => {
        loadPhotos();
    }, [loadPhotos]);

    const requestCamera = useCallback(async () => {
        setCameraStatus('loading');
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: {
                    width: { ideal: 1280 },
                    height: { ideal: 720 },
                    facingMode: 'user'
                }
            });
            setStream(mediaStream);
            setCameraStatus('granted');
            setCurrentPage('booth');
        } catch (err) {
            console.error('Camera error:', err);
            setCameraStatus('denied');
        }
    }, []);

    const handleNavigate = useCallback((newPage) => {
        if (newPage === 'camera') {
            if (cameraStatus === 'granted' && stream) {
                setCurrentPage('booth');
            } else {
                setCurrentPage('permission');
            }
        } else if (newPage === 'landing') {
            setCurrentPage('landing');
        } else if (newPage === 'gallery') {
            loadPhotos();
            setCurrentPage('gallery');
        }
    }, [cameraStatus, stream, loadPhotos]);

    const handleCapture = useCallback((imageData) => {
        setCapturedPhoto(imageData);
    }, []);

    const handleSave = useCallback(() => {
        storage.savePhoto(
            capturedPhoto,
            selectedFrame?.id || null,
            selectedFrame?.name || null
        );
        loadPhotos();
        setCapturedPhoto(null);
        showToast('Photo saved to gallery!');
    }, [capturedPhoto, selectedFrame, loadPhotos, showToast]);

    const handleDownload = useCallback((imageData) => {
        const link = document.createElement('a');
        link.download = `photobooth_${selectedLayout}_${new Date().toISOString().replace(/[:.]/g, '-')}.png`;
        link.href = imageData || capturedPhoto;
        link.click();
        showToast('Photo downloaded!');
    }, [capturedPhoto, selectedLayout, showToast]);

    const handleDelete = useCallback((key) => {
        storage.deletePhoto(key);
        loadPhotos();
        showToast('Photo deleted');
    }, [loadPhotos, showToast]);

    const handleClearAll = useCallback(() => {
        storage.clearAllPhotos();
        setPhotos([]);
        showToast('All photos cleared');
    }, [showToast]);

    return (
        <>
            <Toast
                show={toast.show}
                message={toast.message}
                type={toast.type}
                onClose={hideToast}
            />

            {currentPage === 'landing' && (
                <LandingPage onNavigate={handleNavigate} />
            )}

            {currentPage === 'permission' && (
                <CameraPermission
                    status={cameraStatus}
                    onRequest={requestCamera}
                />
            )}

            {currentPage === 'booth' && (
                <PhotoboothInterface
                    stream={stream}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    selectedFrame={selectedFrame}
                    setSelectedFrame={setSelectedFrame}
                    selectedLayout={selectedLayout}
                    setSelectedLayout={setSelectedLayout}
                    countdownEnabled={countdownEnabled}
                    setCountdownEnabled={setCountdownEnabled}
                    flashEnabled={flashEnabled}
                    setFlashEnabled={setFlashEnabled}
                    recentPhotos={photos}
                    onCapture={handleCapture}
                    onNavigate={handleNavigate}
                />
            )}

            {currentPage === 'gallery' && (
                <Gallery
                    photos={photos}
                    onNavigate={handleNavigate}
                    onDelete={handleDelete}
                    onDownload={handleDownload}
                    onClearAll={handleClearAll}
                    showConfirm={showConfirm}
                    setShowConfirm={setShowConfirm}
                />
            )}

            {capturedPhoto && (
                <PreviewModal
                    photo={capturedPhoto}
                    onClose={() => setCapturedPhoto(null)}
                    onSave={handleSave}
                    onDownload={() => handleDownload(capturedPhoto)}
                    onRetake={() => setCapturedPhoto(null)}
                />
            )}
        </>
    );
}

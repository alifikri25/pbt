export const FRAME_CATEGORIES = ['All', 'Aesthetic', 'Vintage', 'Cute', 'Minimal', 'Fun', 'Romantic'];

export const LAYOUT_OPTIONS = [
    { id: '1x4', label: '4 Photos', slots: 4, aspectRatio: '2/7' },
    { id: '1x3', label: '3 Photos', slots: 3, aspectRatio: '2/5' },
    { id: '1x2', label: '2 Photos', slots: 2, aspectRatio: '2/4' },
];

export const FRAMES = [
    {
        id: 'denim-stickers',
        name: 'Denim Stickers',
        category: 'Cute',
        image: '/frames/denim.png',
        thumbnail: '/frames/denim.png',
        photoSlots: [
            { x: 142, y: 82, width: 228, height: 140 },
            { x: 142, y: 235, width: 228, height: 140 },
            { x: 142, y: 388, width: 228, height: 140 },
            { x: 142, y: 541, width: 228, height: 140 },
        ]
    },
    {
        id: 'nutrition-label',
        name: 'Nutrition Label',
        category: 'Fun',
        image: '/frames/nutrition.png',
        thumbnail: '/frames/nutrition.png',
        photoSlots: [
            { x: 85, y: 145, width: 185, height: 105 },
            { x: 85, y: 265, width: 185, height: 105 },
            { x: 85, y: 385, width: 185, height: 105 },
            { x: 85, y: 505, width: 185, height: 105 },
        ]
    },
    {
        id: 'every-moment',
        name: 'Every Moment',
        category: 'Minimal',
        image: '/frames/every_moment.png',
        thumbnail: '/frames/every_moment.png',
        photoSlots: [
            { x: 70, y: 95, width: 220, height: 145 },
            { x: 70, y: 255, width: 220, height: 145 },
            { x: 70, y: 415, width: 220, height: 145 },
            { x: 70, y: 575, width: 220, height: 145 },
        ]
    },
    {
        id: 'vintage-inc',
        name: 'Photomat Inc.',
        category: 'Vintage',
        image: '/frames/vintage_inc.png',
        thumbnail: '/frames/vintage_inc.png',
        photoSlots: [
            { x: 85, y: 95, width: 190, height: 130 },
            { x: 85, y: 235, width: 190, height: 130 },
            { x: 85, y: 375, width: 190, height: 130 },
            { x: 85, y: 515, width: 190, height: 130 },
        ]
    },
    {
        id: 'korean-cute',
        name: 'Make a Wish',
        category: 'Cute',
        image: '/frames/korean_cute.png',
        thumbnail: '/frames/korean_cute.png',
        photoSlots: [
            { x: 85, y: 75, width: 195, height: 130 },
            { x: 85, y: 220, width: 195, height: 130 },
            { x: 85, y: 365, width: 195, height: 130 },
            { x: 85, y: 510, width: 195, height: 130 },
        ]
    },
    {
        id: 'retro-film',
        name: 'Kodak Film',
        category: 'Vintage',
        image: '/frames/film.png',
        thumbnail: '/frames/film.png',
        photoSlots: [
            { x: 160, y: 55, width: 195, height: 140 },
            { x: 160, y: 210, width: 195, height: 140 },
            { x: 160, y: 365, width: 195, height: 140 },
            { x: 160, y: 520, width: 195, height: 140 },
        ]
    },
    {
        id: 'receipt-style',
        name: 'Memory Store',
        category: 'Fun',
        image: '/frames/receipt.png',
        thumbnail: '/frames/receipt.png',
        photoSlots: [
            { x: 55, y: 95, width: 200, height: 130 },
            { x: 55, y: 260, width: 200, height: 130 },
            { x: 55, y: 425, width: 200, height: 130 },
            { x: 55, y: 590, width: 200, height: 130 },
        ]
    },
    {
        id: 'magazine-cover',
        name: 'Vogue Style',
        category: 'Aesthetic',
        image: '/frames/magazine.png',
        thumbnail: '/frames/magazine.png',
        photoSlots: [
            { x: 65, y: 175, width: 155, height: 165 },
            { x: 235, y: 175, width: 155, height: 165 },
            { x: 65, y: 360, width: 155, height: 165 },
            { x: 235, y: 360, width: 155, height: 165 },
        ]
    },
    {
        id: 'vintage-ticket',
        name: 'Admit One',
        category: 'Vintage',
        image: '/frames/ticket.png',
        thumbnail: '/frames/ticket.png',
        photoSlots: [
            { x: 55, y: 130, width: 185, height: 120 },
            { x: 55, y: 280, width: 185, height: 120 },
            { x: 55, y: 430, width: 185, height: 120 },
            { x: 55, y: 580, width: 185, height: 120 },
        ]
    },
    {
        id: 'y2k-cyber',
        name: '2000s Vibes',
        category: 'Aesthetic',
        image: '/frames/y2k.png',
        thumbnail: '/frames/y2k.png',
        photoSlots: [
            { x: 80, y: 100, width: 200, height: 130 },
            { x: 80, y: 250, width: 200, height: 130 },
            { x: 80, y: 400, width: 200, height: 130 },
            { x: 80, y: 550, width: 200, height: 130 },
        ]
    },
    {
        id: 'neon-glow',
        name: 'Glow Up',
        category: 'Aesthetic',
        image: '/frames/neon_glow.png',
        thumbnail: '/frames/neon_glow.png',
        photoSlots: [
            { x: 55, y: 90, width: 195, height: 135 },
            { x: 55, y: 245, width: 195, height: 135 },
            { x: 55, y: 400, width: 195, height: 135 },
            { x: 55, y: 555, width: 195, height: 135 },
        ]
    },
    {
        id: 'newspaper-style',
        name: 'Daily News',
        category: 'Vintage',
        image: '/frames/newspaper.png',
        thumbnail: '/frames/newspaper.png',
        photoSlots: [
            { x: 65, y: 130, width: 230, height: 125 },
            { x: 65, y: 280, width: 230, height: 125 },
            { x: 65, y: 430, width: 230, height: 125 },
            { x: 65, y: 580, width: 230, height: 125 },
        ]
    },
    {
        id: 'love-hearts',
        name: 'Love Hearts',
        category: 'Romantic',
        image: '/frames/love_hearts.png',
        thumbnail: '/frames/love_hearts.png',
        photoSlots: [
            { x: 143, y: 110, width: 225, height: 140 },
            { x: 143, y: 265, width: 225, height: 140 },
            { x: 143, y: 420, width: 225, height: 140 },
            { x: 143, y: 575, width: 225, height: 140 },
        ]
    },
    {
        id: 'retro-arcade',
        name: 'Insert Coin',
        category: 'Fun',
        image: '/frames/arcade.png',
        thumbnail: '/frames/arcade.png',
        photoSlots: [
            { x: 50, y: 80, width: 210, height: 140 },
            { x: 50, y: 240, width: 210, height: 140 },
            { x: 50, y: 400, width: 210, height: 140 },
            { x: 50, y: 560, width: 210, height: 140 },
        ]
    },
    {
        id: 'botanical-minimal',
        name: 'Forever & Always',
        category: 'Minimal',
        image: '/frames/botanical.png',
        thumbnail: '/frames/botanical.png',
        photoSlots: [
            { x: 90, y: 150, width: 180, height: 150 },
            { x: 90, y: 320, width: 180, height: 150 },
            { x: 90, y: 490, width: 180, height: 150 },
        ]
    },
    {
        id: 'polaroid-vintage',
        name: 'Summer Memories',
        category: 'Romantic',
        image: '/frames/polaroid.png',
        thumbnail: '/frames/polaroid.png',
        photoSlots: [
            { x: 180, y: 110, width: 165, height: 125 },
            { x: 180, y: 260, width: 165, height: 125 },
            { x: 180, y: 410, width: 165, height: 125 },
            { x: 180, y: 560, width: 165, height: 125 },
        ]
    },
];

export function getFrameThumbnail(frame) {
    return frame.thumbnail;
}

export function getFrameImage(frame) {
    return frame.image;
}

export function getPhotoSlots(frame, canvasWidth, canvasHeight) {
    const frameAspect = 512 / 768;
    const scaleX = canvasWidth / 512;
    const scaleY = canvasHeight / 768;

    return frame.photoSlots.map(slot => ({
        x: slot.x * scaleX,
        y: slot.y * scaleY,
        width: slot.width * scaleX,
        height: slot.height * scaleY,
    }));
}

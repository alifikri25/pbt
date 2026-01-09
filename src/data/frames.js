export const FRAME_CATEGORIES = ['All', 'Classic', 'Aesthetic', 'Cute', 'Vintage'];

export const FRAMES = [
    {
        id: 'clean-film',
        name: 'Film Strip',
        category: 'Classic',
        image: '/frames/clean_film.png',
        thumbnail: '/frames/clean_film.png',
        photoSlots: [
            { x: 164, y: 22, width: 185, height: 105 },
            { x: 164, y: 138, width: 185, height: 105 },
            { x: 164, y: 254, width: 185, height: 105 },
            { x: 164, y: 370, width: 185, height: 105 },
        ]
    },
    {
        id: 'denim-stickers',
        name: 'Denim Stickers',
        category: 'Cute',
        image: '/frames/denim.png',
        thumbnail: '/frames/denim.png',
        photoSlots: [
            { x: 205, y: 43, width: 100, height: 80 },
            { x: 205, y: 143, width: 100, height: 80 },
            { x: 205, y: 243, width: 100, height: 80 },
            { x: 205, y: 343, width: 100, height: 80 },
        ]
    },
    {
        id: 'nutrition-label',
        name: 'Nutrition Label',
        category: 'Vintage',
        image: '/frames/nutrition.png',
        thumbnail: '/frames/nutrition.png',
        photoSlots: [
            { x: 169, y: 118, width: 175, height: 85 },
            { x: 169, y: 218, width: 175, height: 85 },
            { x: 169, y: 318, width: 175, height: 85 },
            { x: 169, y: 418, width: 175, height: 85 },
        ]
    },
    {
        id: 'every-moment',
        name: 'Every Moment',
        category: 'Classic',
        image: '/frames/every_moment.png',
        thumbnail: '/frames/every_moment.png',
        photoSlots: [
            { x: 175, y: 55, width: 158, height: 92 },
            { x: 175, y: 160, width: 158, height: 92 },
            { x: 175, y: 265, width: 158, height: 92 },
            { x: 175, y: 370, width: 158, height: 92 },
        ]
    },
    {
        id: 'korean-cute',
        name: 'Make a Wish',
        category: 'Cute',
        image: '/frames/korean_cute.png',
        thumbnail: '/frames/korean_cute.png',
        photoSlots: [
            { x: 178, y: 38, width: 155, height: 95 },
            { x: 178, y: 148, width: 155, height: 95 },
            { x: 178, y: 258, width: 155, height: 95 },
            { x: 178, y: 368, width: 155, height: 95 },
        ]
    },
    {
        id: 'vintage-ticket',
        name: 'Admit One',
        category: 'Vintage',
        image: '/frames/ticket.png',
        thumbnail: '/frames/ticket.png',
        photoSlots: [
            { x: 164, y: 88, width: 185, height: 90 },
            { x: 164, y: 198, width: 185, height: 90 },
            { x: 164, y: 308, width: 185, height: 90 },
            { x: 164, y: 418, width: 185, height: 90 },
        ]
    },
    {
        id: 'love-hearts',
        name: 'Love Hearts',
        category: 'Cute',
        image: '/frames/love_hearts.png',
        thumbnail: '/frames/love_hearts.png',
        photoSlots: [
            { x: 178, y: 62, width: 158, height: 92 },
            { x: 178, y: 170, width: 158, height: 92 },
            { x: 178, y: 278, width: 158, height: 92 },
            { x: 178, y: 386, width: 158, height: 92 },
        ]
    },
    {
        id: 'retro-arcade',
        name: 'Insert Coin',
        category: 'Aesthetic',
        image: '/frames/arcade.png',
        thumbnail: '/frames/arcade.png',
        photoSlots: [
            { x: 160, y: 50, width: 192, height: 92 },
            { x: 160, y: 160, width: 192, height: 92 },
            { x: 160, y: 270, width: 192, height: 92 },
            { x: 160, y: 380, width: 192, height: 92 },
        ]
    },
    {
        id: 'receipt-style',
        name: 'Memory Store',
        category: 'Vintage',
        image: '/frames/receipt.png',
        thumbnail: '/frames/receipt.png',
        photoSlots: [
            { x: 168, y: 62, width: 178, height: 95 },
            { x: 168, y: 182, width: 178, height: 95 },
            { x: 168, y: 302, width: 178, height: 95 },
            { x: 168, y: 422, width: 178, height: 95 },
        ]
    },
    {
        id: 'neon-glow',
        name: 'Glow Up',
        category: 'Aesthetic',
        image: '/frames/neon_glow.png',
        thumbnail: '/frames/neon_glow.png',
        photoSlots: [
            { x: 155, y: 58, width: 200, height: 88 },
            { x: 155, y: 162, width: 200, height: 88 },
            { x: 155, y: 266, width: 200, height: 88 },
            { x: 155, y: 370, width: 200, height: 88 },
        ]
    },
    {
        id: 'newspaper-style',
        name: 'Daily News',
        category: 'Vintage',
        image: '/frames/newspaper.png',
        thumbnail: '/frames/newspaper.png',
        photoSlots: [
            { x: 168, y: 82, width: 178, height: 78 },
            { x: 168, y: 188, width: 178, height: 78 },
            { x: 168, y: 294, width: 178, height: 78 },
            { x: 168, y: 400, width: 178, height: 78 },
        ]
    },
    {
        id: 'botanical-minimal',
        name: 'Forever Always',
        category: 'Classic',
        image: '/frames/botanical.png',
        thumbnail: '/frames/botanical.png',
        photoSlots: [
            { x: 182, y: 120, width: 148, height: 100 },
            { x: 182, y: 240, width: 148, height: 100 },
            { x: 182, y: 360, width: 148, height: 100 },
        ]
    },
];

export function getFrameThumbnail(frame) {
    return frame.thumbnail;
}

export function getFrameImage(frame) {
    return frame.image;
}

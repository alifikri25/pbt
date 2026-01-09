export const FRAME_CATEGORIES = ['All', 'Wedding', 'Birthday', 'Kids', 'Corporate', 'Minimalist', 'Special', 'Aesthetic'];

export const LAYOUT_OPTIONS = [
    { id: '1x1', label: '1 Photo', slots: 1, aspectRatio: '2/3' },
    { id: '1x2', label: '2 Photos', slots: 2, aspectRatio: '2/5' },
    { id: '1x3', label: '3 Photos', slots: 3, aspectRatio: '2/7' },
    { id: '1x4', label: '4 Photos', slots: 4, aspectRatio: '2/9' },
    { id: '1x5', label: '5 Photos', slots: 5, aspectRatio: '2/11' },
    { id: '1x6', label: '6 Photos', slots: 6, aspectRatio: '2/13' },
];

export const FRAMES = [
    // WEDDING FRAMES
    {
        id: 'wedding-gold-floral',
        name: 'Elegant Gold Floral',
        category: 'Wedding',
        colors: { primary: '#D4AF37', secondary: '#F5E6C8', accent: '#8B7355', bg: '#FFFEF7' }
    },
    {
        id: 'wedding-pink-roses',
        name: 'Romantic Pink Roses',
        category: 'Wedding',
        colors: { primary: '#FFB6C1', secondary: '#FFF0F5', accent: '#DB7093', bg: '#FFF5F7' }
    },
    {
        id: 'wedding-white-classic',
        name: 'Classic White',
        category: 'Wedding',
        colors: { primary: '#FFFFFF', secondary: '#F8F8F8', accent: '#D4AF37', bg: '#FFFFFF' }
    },
    {
        id: 'wedding-vintage-lace',
        name: 'Vintage Lace',
        category: 'Wedding',
        colors: { primary: '#FFF8DC', secondary: '#FFFAF0', accent: '#DEB887', bg: '#FFFEF5' }
    },
    {
        id: 'wedding-burgundy',
        name: 'Burgundy Romance',
        category: 'Wedding',
        colors: { primary: '#800020', secondary: '#D4AF37', accent: '#2C1810', bg: '#FFF9F5' }
    },

    // BIRTHDAY FRAMES
    {
        id: 'birthday-balloons',
        name: 'Colorful Balloons',
        category: 'Birthday',
        colors: { primary: '#FF6B6B', secondary: '#4ECDC4', accent: '#FFE66D', bg: '#FFF5F5' }
    },
    {
        id: 'birthday-golden',
        name: 'Golden Celebration',
        category: 'Birthday',
        colors: { primary: '#FFD700', secondary: '#FFA500', accent: '#FF6347', bg: '#FFFEF0' }
    },
    {
        id: 'birthday-pastel',
        name: 'Pastel Rainbow',
        category: 'Birthday',
        colors: { primary: '#FFB5E8', secondary: '#B5DEFF', accent: '#BFFCC6', bg: '#FFFAFC' }
    },
    {
        id: 'birthday-confetti',
        name: 'Party Confetti',
        category: 'Birthday',
        colors: { primary: '#FF1493', secondary: '#00CED1', accent: '#FFD700', bg: '#FFFFFF' }
    },
    {
        id: 'birthday-neon',
        name: 'Neon Party',
        category: 'Birthday',
        colors: { primary: '#FF00FF', secondary: '#00FFFF', accent: '#FFFF00', bg: '#1A1A2E' }
    },

    // KIDS FRAMES
    {
        id: 'kids-superhero',
        name: 'Superhero Comic',
        category: 'Kids',
        colors: { primary: '#FF0000', secondary: '#0066CC', accent: '#FFD700', bg: '#FFF5F5' }
    },
    {
        id: 'kids-princess',
        name: 'Princess Castle',
        category: 'Kids',
        colors: { primary: '#FF69B4', secondary: '#DDA0DD', accent: '#FFD700', bg: '#FFF0F8' }
    },
    {
        id: 'kids-space',
        name: 'Space Adventure',
        category: 'Kids',
        colors: { primary: '#4B0082', secondary: '#191970', accent: '#FFD700', bg: '#0F0F23' }
    },
    {
        id: 'kids-dinosaur',
        name: 'Dino World',
        category: 'Kids',
        colors: { primary: '#228B22', secondary: '#8B4513', accent: '#FF6347', bg: '#F0FFF0' }
    },
    {
        id: 'kids-unicorn',
        name: 'Magical Unicorn',
        category: 'Kids',
        colors: { primary: '#FF69B4', secondary: '#87CEEB', accent: '#DDA0DD', bg: '#FFF0F8' }
    },
    {
        id: 'kids-ocean',
        name: 'Under The Sea',
        category: 'Kids',
        colors: { primary: '#00CED1', secondary: '#4169E1', accent: '#FFD700', bg: '#F0FFFF' }
    },

    // CORPORATE FRAMES
    {
        id: 'corporate-blue',
        name: 'Professional Blue',
        category: 'Corporate',
        colors: { primary: '#1E3A8A', secondary: '#3B82F6', accent: '#60A5FA', bg: '#F8FAFC' }
    },
    {
        id: 'corporate-geometric',
        name: 'Modern Geometric',
        category: 'Corporate',
        colors: { primary: '#374151', secondary: '#6B7280', accent: '#9CA3AF', bg: '#F9FAFB' }
    },
    {
        id: 'corporate-elegant',
        name: 'Elegant Black',
        category: 'Corporate',
        colors: { primary: '#1F2937', secondary: '#374151', accent: '#D4AF37', bg: '#FFFFFF' }
    },
    {
        id: 'corporate-tech',
        name: 'Tech Gradient',
        category: 'Corporate',
        colors: { primary: '#6366F1', secondary: '#8B5CF6', accent: '#A855F7', bg: '#F5F3FF' }
    },

    // MINIMALIST FRAMES
    {
        id: 'minimal-white',
        name: 'Pure White',
        category: 'Minimalist',
        colors: { primary: '#FFFFFF', secondary: '#F5F5F5', accent: '#E5E5E5', bg: '#FFFFFF' }
    },
    {
        id: 'minimal-black',
        name: 'Classic Black',
        category: 'Minimalist',
        colors: { primary: '#1A1A1A', secondary: '#333333', accent: '#4A4A4A', bg: '#FFFFFF' }
    },
    {
        id: 'minimal-gradient',
        name: 'Soft Gradient',
        category: 'Minimalist',
        colors: { primary: '#E0C3FC', secondary: '#8EC5FC', accent: '#FFFFFF', bg: '#FAFBFF' }
    },
    {
        id: 'minimal-line',
        name: 'Line Art',
        category: 'Minimalist',
        colors: { primary: '#2D3748', secondary: '#FFFFFF', accent: '#CBD5E0', bg: '#FFFFFF' }
    },

    // SPECIAL FRAMES
    {
        id: 'special-christmas',
        name: 'Christmas Joy',
        category: 'Special',
        colors: { primary: '#C41E3A', secondary: '#228B22', accent: '#FFD700', bg: '#FFF5F5' }
    },
    {
        id: 'special-halloween',
        name: 'Spooky Halloween',
        category: 'Special',
        colors: { primary: '#FF6600', secondary: '#1A1A1A', accent: '#8B00FF', bg: '#FFF5EB' }
    },
    {
        id: 'special-valentine',
        name: 'Valentine Love',
        category: 'Special',
        colors: { primary: '#FF1493', secondary: '#FFB6C1', accent: '#DC143C', bg: '#FFF0F5' }
    },
    {
        id: 'special-newyear',
        name: 'New Year Sparkle',
        category: 'Special',
        colors: { primary: '#FFD700', secondary: '#C0C0C0', accent: '#1A1A1A', bg: '#FFFEF5' }
    },
    {
        id: 'special-graduation',
        name: 'Graduation Day',
        category: 'Special',
        colors: { primary: '#1E3A5F', secondary: '#D4AF37', accent: '#8B0000', bg: '#F8F9FA' }
    },

    // AESTHETIC FRAMES
    {
        id: 'aesthetic-retro',
        name: 'Retro Vibes',
        category: 'Aesthetic',
        colors: { primary: '#E07C24', secondary: '#2E5A4B', accent: '#DCAB6F', bg: '#FDF6E3' }
    },
    {
        id: 'aesthetic-y2k',
        name: 'Y2K Cyber',
        category: 'Aesthetic',
        colors: { primary: '#FF00FF', secondary: '#00FFFF', accent: '#FF1493', bg: '#F5F0FF' }
    },
    {
        id: 'aesthetic-cottagecore',
        name: 'Cottagecore',
        category: 'Aesthetic',
        colors: { primary: '#8B7355', secondary: '#9DB17C', accent: '#F5DEB3', bg: '#FFFEF5' }
    },
    {
        id: 'aesthetic-darkacademia',
        name: 'Dark Academia',
        category: 'Aesthetic',
        colors: { primary: '#3D2914', secondary: '#5C4033', accent: '#D4AF37', bg: '#F5EFE6' }
    },
    {
        id: 'aesthetic-vaporwave',
        name: 'Vaporwave',
        category: 'Aesthetic',
        colors: { primary: '#FF71CE', secondary: '#01CDFE', accent: '#B967FF', bg: '#1A1A2E' }
    },
    {
        id: 'aesthetic-polaroid',
        name: 'Instant Polaroid',
        category: 'Aesthetic',
        colors: { primary: '#FAFAFA', secondary: '#E5E5E5', accent: '#262626', bg: '#FAFAFA' }
    },
];

export function generateFrameSVG(frame, layout = '1x1', width = 400) {
    const layoutConfig = LAYOUT_OPTIONS.find(l => l.id === layout) || LAYOUT_OPTIONS[0];
    const slots = layoutConfig.slots;

    const photoWidth = width - 40;
    const photoHeight = photoWidth * 1.3;
    const gap = 15;
    const padding = 20;
    const headerHeight = 50;
    const footerHeight = 60;

    const totalHeight = headerHeight + (photoHeight * slots) + (gap * (slots - 1)) + footerHeight + (padding * 2);

    const c = frame.colors;
    const photoSlots = [];

    for (let i = 0; i < slots; i++) {
        const y = headerHeight + padding + (i * (photoHeight + gap));
        photoSlots.push({ x: padding, y, width: photoWidth, height: photoHeight, index: i });
    }

    let decorations = '';

    switch (frame.category) {
        case 'Wedding':
            decorations = `
        <circle cx="${width / 2 - 60}" cy="25" r="8" fill="${c.primary}" opacity="0.6"/>
        <circle cx="${width / 2}" cy="20" r="10" fill="${c.accent}" opacity="0.7"/>
        <circle cx="${width / 2 + 60}" cy="25" r="8" fill="${c.primary}" opacity="0.6"/>
        <path d="M${padding},${headerHeight - 5} Q${width / 2},${headerHeight - 20} ${width - padding},${headerHeight - 5}" stroke="${c.primary}" fill="none" stroke-width="1.5" opacity="0.5"/>
        <text x="${width / 2}" y="${totalHeight - 20}" text-anchor="middle" fill="${c.accent}" font-family="Playfair Display, serif" font-size="14" font-style="italic">with love ♥</text>
      `;
            break;

        case 'Birthday':
            decorations = `
        <ellipse cx="30" cy="30" rx="15" ry="20" fill="${c.primary}" opacity="0.8"/>
        <ellipse cx="60" cy="25" rx="12" ry="16" fill="${c.secondary}" opacity="0.8"/>
        <ellipse cx="${width - 30}" cy="30" rx="15" ry="20" fill="${c.secondary}" opacity="0.8"/>
        <ellipse cx="${width - 60}" cy="25" rx="12" ry="16" fill="${c.primary}" opacity="0.8"/>
        <text x="${width / 2}" y="${totalHeight - 18}" text-anchor="middle" fill="${c.primary}" font-family="Poppins, sans-serif" font-size="12" font-weight="bold">🎉 HAPPY BIRTHDAY! 🎉</text>
      `;
            break;

        case 'Kids':
            decorations = `
        <circle cx="25" cy="25" r="12" fill="${c.primary}" opacity="0.7"/>
        <circle cx="50" cy="20" r="8" fill="${c.secondary}" opacity="0.7"/>
        <circle cx="${width - 25}" cy="25" r="12" fill="${c.secondary}" opacity="0.7"/>
        <circle cx="${width - 50}" cy="20" r="8" fill="${c.primary}" opacity="0.7"/>
        <text x="${width / 2}" y="${totalHeight - 18}" text-anchor="middle" fill="${c.primary}" font-family="Poppins, sans-serif" font-size="13" font-weight="bold">★ FUN TIME ★</text>
      `;
            break;

        case 'Corporate':
            decorations = `
        <rect x="${padding}" y="15" width="80" height="25" fill="${c.primary}" rx="4"/>
        <text x="${padding + 40}" y="32" text-anchor="middle" fill="#FFFFFF" font-family="Poppins, sans-serif" font-size="9" font-weight="600">YOUR LOGO</text>
        <line x1="${padding}" y1="${headerHeight}" x2="${width - padding}" y2="${headerHeight}" stroke="${c.primary}" stroke-width="2"/>
        <line x1="${padding}" y1="${totalHeight - footerHeight + 10}" x2="${width - padding}" y2="${totalHeight - footerHeight + 10}" stroke="${c.primary}" stroke-width="2"/>
      `;
            break;

        case 'Minimalist':
            decorations = `
        <line x1="${padding + 10}" y1="25" x2="${padding + 50}" y2="25" stroke="${c.primary}" stroke-width="2"/>
        <line x1="${width - padding - 50}" y1="25" x2="${width - padding - 10}" y2="25" stroke="${c.primary}" stroke-width="2"/>
      `;
            break;

        case 'Special':
            if (frame.id.includes('christmas')) {
                decorations = `
          <circle cx="25" cy="25" r="10" fill="${c.primary}"/>
          <circle cx="${width - 25}" cy="25" r="10" fill="${c.secondary}"/>
          <polygon points="${width / 2},12 ${width / 2 - 12},35 ${width / 2 + 12},35" fill="${c.secondary}"/>
          <text x="${width / 2}" y="${totalHeight - 18}" text-anchor="middle" fill="${c.primary}" font-family="Playfair Display, serif" font-size="13">🎄 Merry Christmas 🎄</text>
        `;
            } else if (frame.id.includes('halloween')) {
                decorations = `
          <ellipse cx="35" cy="28" rx="18" ry="14" fill="${c.primary}"/>
          <ellipse cx="${width - 35}" cy="28" rx="18" ry="14" fill="${c.primary}"/>
          <text x="${width / 2}" y="${totalHeight - 18}" text-anchor="middle" fill="${c.primary}" font-family="Poppins, sans-serif" font-size="12" font-weight="bold">🎃 SPOOKY! 👻</text>
        `;
            } else if (frame.id.includes('valentine')) {
                decorations = `
          <text x="${width / 2}" y="32" text-anchor="middle" fill="${c.primary}" font-size="20">❤️</text>
          <text x="${width / 2}" y="${totalHeight - 18}" text-anchor="middle" fill="${c.primary}" font-family="Playfair Display, serif" font-size="13" font-style="italic">With All My Love</text>
        `;
            } else {
                decorations = `
          <circle cx="30" cy="25" r="8" fill="${c.primary}" opacity="0.6"/>
          <circle cx="${width - 30}" cy="25" r="8" fill="${c.secondary}" opacity="0.6"/>
          <text x="${width / 2}" y="${totalHeight - 20}" text-anchor="middle" fill="${c.accent}" font-family="Playfair Display, serif" font-size="12">✨ Special Moments ✨</text>
        `;
            }
            break;

        case 'Aesthetic':
            if (frame.id.includes('polaroid')) {
                decorations = `
          <text x="${width / 2}" y="${totalHeight - 22}" text-anchor="middle" fill="${c.accent}" font-family="Playfair Display, serif" font-size="16" font-style="italic">memories ♥</text>
        `;
            } else if (frame.id.includes('vaporwave') || frame.id.includes('y2k')) {
                decorations = `
          <text x="${width / 2}" y="32" text-anchor="middle" fill="${c.primary}" font-family="Poppins, sans-serif" font-size="11" font-weight="bold">✦ AESTHETIC ✦</text>
          <line x1="${padding}" y1="${headerHeight - 5}" x2="${width - padding}" y2="${headerHeight - 5}" stroke="${c.secondary}" stroke-width="2"/>
        `;
            } else {
                decorations = `
          <circle cx="30" cy="25" r="6" fill="${c.primary}" opacity="0.5"/>
          <circle cx="${width - 30}" cy="25" r="6" fill="${c.secondary}" opacity="0.5"/>
          <text x="${width / 2}" y="${totalHeight - 20}" text-anchor="middle" fill="${c.accent}" font-family="Playfair Display, serif" font-size="11" font-style="italic">captured moments</text>
        `;
            }
            break;

        default:
            decorations = '';
    }

    const photoSlotsRects = photoSlots.map(slot => `
    <rect x="${slot.x}" y="${slot.y}" width="${slot.width}" height="${slot.height}" fill="transparent" stroke="${c.accent}" stroke-width="1" stroke-dasharray="5,5" opacity="0.3"/>
  `).join('');

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${totalHeight}" width="${width}" height="${totalHeight}">
    <defs>
      <linearGradient id="borderGrad_${frame.id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${c.primary}"/>
        <stop offset="100%" style="stop-color:${c.secondary}"/>
      </linearGradient>
      <mask id="photoMask_${frame.id}">
        <rect width="${width}" height="${totalHeight}" fill="white"/>
        ${photoSlots.map(slot => `<rect x="${slot.x}" y="${slot.y}" width="${slot.width}" height="${slot.height}" fill="black" rx="8"/>`).join('')}
      </mask>
    </defs>
    
    <!-- Frame background with transparent photo slots -->
    <rect width="${width}" height="${totalHeight}" fill="${c.bg}" rx="15" mask="url(#photoMask_${frame.id})"/>
    
    <!-- Border -->
    <rect x="3" y="3" width="${width - 6}" height="${totalHeight - 6}" fill="none" stroke="url(#borderGrad_${frame.id})" stroke-width="6" rx="12"/>
    
    <!-- Photo slot borders -->
    ${photoSlots.map(slot => `<rect x="${slot.x}" y="${slot.y}" width="${slot.width}" height="${slot.height}" fill="none" stroke="${c.accent}" stroke-width="2" rx="8" opacity="0.4"/>`).join('')}
    
    <!-- Decorations -->
    ${decorations}
  </svg>`;

    return {
        svg: `data:image/svg+xml,${encodeURIComponent(svg)}`,
        photoSlots,
        width,
        height: totalHeight
    };
}

export function getFrameThumbnail(frame, layout = '1x1') {
    const result = generateFrameSVG(frame, layout, 120);
    return result.svg;
}

export function getFrameOverlay(frame, layout = '1x1', width = 400) {
    return generateFrameSVG(frame, layout, width);
}

export function getLayoutDimensions(layout = '1x1', baseWidth = 400) {
    const layoutConfig = LAYOUT_OPTIONS.find(l => l.id === layout) || LAYOUT_OPTIONS[0];
    const slots = layoutConfig.slots;

    const photoWidth = baseWidth - 40;
    const photoHeight = photoWidth * 1.3;
    const gap = 15;
    const padding = 20;
    const headerHeight = 50;
    const footerHeight = 60;

    const totalHeight = headerHeight + (photoHeight * slots) + (gap * (slots - 1)) + footerHeight + (padding * 2);

    return {
        width: baseWidth,
        height: totalHeight,
        slots,
        photoSlots: Array.from({ length: slots }, (_, i) => ({
            x: padding,
            y: headerHeight + padding + (i * (photoHeight + gap)),
            width: photoWidth,
            height: photoHeight
        }))
    };
}

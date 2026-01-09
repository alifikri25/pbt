BUATKAN WEBSITE PHOTOBOOTH PREMIUM INTERAKTIF LENGKAP

=== TEKNOLOGI ===
- React dengan hooks (useState, useEffect, useRef)
- Tailwind CSS untuk styling responsive
- Lucide React untuk icons
- Canvas API untuk overlay frame dan export
- WebRTC getUserMedia untuk akses webcam
- Persistent Storage API untuk simpan foto antar session
- HTML2Canvas atau native canvas untuk download

=== STRUKTUR & FITUR LENGKAP ===

1. LANDING PAGE
- Hero section gradient modern (purple-pink)
- Judul besar "Premium Photobooth Studio"
- Subtitle menarik tentang photobooth
- Button CTA "Start Photobooth" yang mencolok
- Section "How It Works" (3 steps dengan icon: Allow Camera → Choose Frame → Capture & Download)
- Section "Available Templates" grid 4-6 preview frame templates
- Footer dengan credit
- Font: Poppins untuk body, Playfair Display untuk heading
- Animasi smooth fade-in saat load
- Background: gradient atau pattern subtle

2. CAMERA PERMISSION
- Modal popup atau dedicated page
- Icon kamera besar di center
- Text "We need camera access to take photos"
- Button "Allow Camera Access" primary color
- Loading spinner saat request permission
- Error state jika ditolak dengan instruksi manual
- Smooth transition setelah granted

3. MAIN PHOTOBOOTH INTERFACE (3 KOLOM LAYOUT)

LEFT SIDEBAR (Desktop 20%, Mobile: drawer):
- Header "Choose Frame"
- Categories tabs/pills: All, Wedding, Birthday, Kids, Character, Corporate, Minimalist
- Scroll vertical frame thumbnails
- Setiap frame punya:
  * Thumbnail preview dengan contoh foto
  * Nama frame
  * Active state border glow jika terpilih
- 15-20 frame templates berbeda berkualitas premium

CENTER AREA (50%):
- Container camera preview dengan aspect ratio 2:3
- Live video feed dari webcam
- Frame overlay transparan di atas video (real-time preview)
- Countdown overlay animasi (3, 2, 1, ✓) muncul saat capture
- Flash effect putih saat foto diambil
- Bottom control panel:
  * Button "Capture Photo" besar dengan icon camera (primary color, pulse animation)
  * Button flip horizontal (icon FlipHorizontal)
  * Button switch camera depan/belakang untuk mobile (icon SwitchCamera)
  * Button info/help (icon Info)

RIGHT SIDEBAR (30%, Mobile: bottom sheet):
- Header "Recent Photos" dengan count badge
- Mini gallery grid 2 kolom (max 6 thumbnail terakhir)
- Button "View All Photos" 
- Divider
- Settings section:
  * Toggle "Countdown Sound" dengan switch
  * Toggle "Flash Effect" dengan switch
  * Info icon dengan tooltip
- Credit/watermark kecil di bottom

MOBILE RESPONSIVE:
- Stack vertical: Camera full width → Controls → Bottom drawer untuk frames & gallery

4. PREVIEW MODAL (Setelah Capture)
- Modal fullscreen atau overlay dengan backdrop blur
- Foto hasil ditampilkan besar di center
- Smooth zoom-in animation dari posisi capture
- Bottom action bar dengan 3 buttons:
  * "Retake" icon RotateCcw (secondary, ghost style)
  * "Save to Gallery" icon Save (primary color)
  * "Download Now" icon Download (primary color, variant)
- Simple edit tools (optional panel):
  * Brightness slider dengan icon Sun
  * Contrast slider dengan icon Contrast
  * Reset button
- Close button (X) di top-right
- Keyboard shortcut: Enter untuk save, Esc untuk close

5. GALLERY PAGE
- Header bar:
  * Judul "My Photos" dengan count badge
  * Button "Take More Photos" (icon Camera, primary)
  * Filter dropdown by frame category (optional)
  * Button "Clear All" dengan confirmation
- Grid layout masonry atau uniform 3-4 kolom
- Setiap foto card:
  * Image dengan frame
  * Hover overlay dark dengan buttons:
    - Download (icon Download)
    - Delete (icon Trash2, red color)
    - Share (icon Share2, optional)
  * Timestamp kecil di bottom
- Empty state jika belum ada foto:
  * Icon besar Camera
  * Text "No photos yet"
  * Button "Take Your First Photo"
- Pagination atau infinite scroll jika banyak foto
- Responsive: 2 kolom di tablet, 1 kolom di mobile

=== FRAME TEMPLATES PREMIUM (15-20 DESIGNS) ===

Format setiap frame:
- Vertical strip 2:7 ratio untuk 3-4 foto slots
- Transparent PNG atau SVG
- High quality print-ready design
- Space untuk custom text (editable)

Kategori & Contoh Frame:

WEDDING (3-4 frames):
1. "Elegant Gold Floral" - border gold dengan ornament bunga, cream background, space untuk nama pengantin & tanggal
2. "Romantic Pink Roses" - border pink soft dengan mawar, elegant typography space
3. "Classic White Minimalist" - frame putih simple dengan gold accent line
4. "Vintage Lace" - border lace pattern dengan pearl accent

BIRTHDAY (3-4 frames):
1. "Colorful Balloons" - border dengan ilustrasi balon warna-warni, confetti
2. "Golden Celebration" - gold glitter border dengan "Happy Birthday" text
3. "Pastel Rainbow" - gradient pastel dengan stars
4. "Cake & Candles" - cute illustration border dengan kue ulang tahun

KIDS/CHARACTER (3-4 frames):
1. "Toy Story Theme" - border dengan karakter woody, buzz, clouds background
2. "Princess Theme" - pink border dengan crown, castle, glitter
3. "Superhero Comic" - comic style border dengan "POW! BAM!" elements
4. "Crayon Shinchan Cute" - pink border dengan karakter Shinchan, kawaii style

CORPORATE (2-3 frames):
1. "Professional Blue" - clean blue border dengan space logo perusahaan
2. "Modern Geometric" - minimal geometric pattern, space untuk event name
3. "Elegant Black & White" - sophisticated monochrome design

MINIMALIST (2-3 frames):
1. "Simple White Border" - thin white border, clean
2. "Pastel Gradient" - subtle gradient background dengan thin frame
3. "Modern Line Art" - geometric line decoration, minimal

SPECIAL THEMES (2-3 frames):
1. "Christmas Holiday" - red green dengan snowflakes, santa elements
2. "Halloween Spooky" - orange black dengan pumpkin, bats
3. "Polaroid Vintage" - design seperti foto polaroid dengan "I Miss You" text

=== TECHNICAL IMPLEMENTATION DETAILS ===

CAMERA HANDLING:
- Request HD video stream (1280x720 minimum)
- Handle multiple cameras (enumerate devices)
- Fallback jika tidak ada kamera
- Handle permission denied
- Auto-stop stream saat leave page
- Mirror video horizontal untuk selfie (CSS transform)

FRAME OVERLAY:
- Load frame sebagai Image object
- Composite frame di atas foto di canvas
- Maintain aspect ratio frame
- Center alignment foto dalam frame slots
- Support multiple photo slots dalam satu frame (vertical strip)

CAPTURE PROCESS:
1. Countdown 3-2-1 dengan animation
2. Optional beep sound tiap angka
3. Flash effect putih fullscreen saat capture
4. Freeze video frame
5. Draw video ke canvas
6. Overlay frame template di atas
7. Export canvas sebagai PNG/JPEG
8. Show preview modal
9. Save ke storage jika user confirm

STORAGE:
- Gunakan window.storage.set() untuk simpan foto persistent
- Format: key = "photo_[timestamp]", value = {imageData: base64, frameId, timestamp, frameName}
- List photos: window.storage.list("photo_")
- Delete: window.storage.delete(key)
- Handle storage limit errors

DOWNLOAD:
- Create downloadable link dari canvas
- Filename: "photobooth_[date]_[time].png"
- Trigger download otomatis
- Toast notification "Photo downloaded!"

UI/UX POLISH:
- Loading skeleton untuk frame thumbnails
- Smooth transitions semua state changes
- Hover effects pada buttons
- Active states jelas
- Toast notifications untuk feedback (saved, deleted, error)
- Smooth scroll behavior
- Modal animations (fade + scale)
- Button loading states
- Empty states dengan call-to-action
- Error boundaries untuk handle crashes

RESPONSIVE BREAKPOINTS:
- Desktop: 1024px+ (3 kolom layout)
- Tablet: 768px-1023px (2 kolom, sidebar collapsible)
- Mobile: <768px (stack vertical, drawer UI)

PERFORMANCE:
- Lazy load frame images
- Optimize canvas operations
- Debounce camera stream
- Compress saved images jika perlu
- Virtual scroll untuk banyak photos di gallery

ACCESSIBILITY:
- ARIA labels semua buttons
- Keyboard navigation support
- Focus visible states
- Alt text untuk images
- Screen reader friendly

COLOR PALETTE SUGGESTION:
- Primary: #8B5CF6 (purple)
- Secondary: #EC4899 (pink)
- Accent: #F59E0B (amber)
- Background: #0F172A (dark slate)
- Surface: #1E293B (slate)
- Text: #F1F5F9 (light slate)
- Success: #10B981 (green)
- Error: #EF4444 (red)

Atau tema terang:
- Primary: #6366F1 (indigo)
- Secondary: #EC4899 (pink)
- Background: #FFFFFF (white)
- Surface: #F8FAFC (gray-50)
- Text: #0F172A (slate-900)

=== DELIVERABLES ===
Buatkan dalam 1 artifact React component lengkap yang sudah jadi dan bisa langsung dijalankan, dengan:
✓ Semua fitur di atas implemented
✓ Minimal 15 frame templates premium berbeda (bisa gunakan placeholder images atau generate SVG frames)
✓ Fully responsive
✓ Smooth animations
✓ Error handling lengkap
✓ Persistent storage working
✓ Download functionality working
✓ Beautiful modern UI
✓ Production-ready code
✓ No comments dalam code
✓ Clean code structure

PENTING: Jangan gunakan localStorage atau sessionStorage, gunakan window.storage API sesuai dokumentasi.
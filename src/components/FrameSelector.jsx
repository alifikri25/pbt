import { FRAME_CATEGORIES, FRAMES, LAYOUT_OPTIONS, getFrameThumbnail } from '../data/frames';
import { Layers, LayoutGrid } from 'lucide-react';

export default function FrameSelector({
    selectedCategory,
    setSelectedCategory,
    selectedFrame,
    onSelectFrame,
    selectedLayout,
    setSelectedLayout
}) {
    const filteredFrames = selectedCategory === 'All'
        ? FRAMES
        : FRAMES.filter(f => f.category === selectedCategory);

    return (
        <div className="h-full flex flex-col">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary-400" />
                Choose Frame
            </h3>

            {/* Layout Selection */}
            <div className="mb-4">
                <p className="text-xs text-slate-400 mb-2 flex items-center gap-1">
                    <LayoutGrid className="w-3 h-3" />
                    Photo Layout
                </p>
                <div className="grid grid-cols-3 gap-1.5">
                    {LAYOUT_OPTIONS.map(layout => (
                        <button
                            key={layout.id}
                            onClick={() => setSelectedLayout(layout.id)}
                            className={`px-2 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 text-center
                ${selectedLayout === layout.id
                                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'}`}
                        >
                            {layout.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Category Selection */}
            <div className="flex flex-wrap gap-1.5 mb-4">
                {FRAME_CATEGORIES.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300
              ${selectedCategory === cat
                                ? 'bg-secondary-500 text-white shadow-lg shadow-secondary-500/30'
                                : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Frame Grid */}
            <div className="flex-1 overflow-y-auto hide-scrollbar">
                <div className="grid grid-cols-2 gap-2">
                    {filteredFrames.map(frame => (
                        <div
                            key={frame.id}
                            onClick={() => onSelectFrame(frame)}
                            className={`cursor-pointer rounded-xl overflow-hidden transition-all duration-300 
                ${selectedFrame?.id === frame.id ? 'frame-active scale-[1.02]' : 'hover:scale-105 hover:shadow-lg'}`}
                        >
                            <div
                                className="relative flex items-center justify-center p-2"
                                style={{
                                    backgroundColor: frame.colors.bg,
                                    aspectRatio: selectedLayout === '1x1' ? '2/3' : selectedLayout === '1x2' ? '2/4' : '2/5'
                                }}
                            >
                                <img
                                    src={getFrameThumbnail(frame, selectedLayout)}
                                    alt={frame.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <div className="p-2 bg-slate-800/80 text-center">
                                <p className="text-xs truncate font-medium">{frame.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

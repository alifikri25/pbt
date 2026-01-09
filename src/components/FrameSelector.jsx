import { FRAME_CATEGORIES, FRAMES, getFrameThumbnail } from '../data/frames';
import { Layers } from 'lucide-react';

export default function FrameSelector({
    selectedCategory,
    setSelectedCategory,
    selectedFrame,
    onSelectFrame
}) {
    const filteredFrames = selectedCategory === 'All'
        ? FRAMES
        : FRAMES.filter(f => f.category === selectedCategory);

    return (
        <div className="h-full flex flex-col">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-400" />
                Choose Frame
            </h3>

            <div className="flex flex-wrap gap-1.5 mb-4">
                {FRAME_CATEGORIES.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300
              ${selectedCategory === cat
                                ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                                : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="flex-1 overflow-y-auto hide-scrollbar">
                <div className="grid grid-cols-2 gap-2">
                    {filteredFrames.map(frame => (
                        <div
                            key={frame.id}
                            onClick={() => onSelectFrame(frame)}
                            className={`cursor-pointer rounded-xl overflow-hidden transition-all duration-300 bg-slate-800
                ${selectedFrame?.id === frame.id ? 'ring-2 ring-purple-500 ring-offset-2 ring-offset-slate-900 scale-[1.02]' : 'hover:scale-105 hover:shadow-lg'}`}
                        >
                            <div className="aspect-[2/3] relative overflow-hidden">
                                <img
                                    src={getFrameThumbnail(frame)}
                                    alt={frame.name}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-2 bg-slate-800/90 text-center">
                                <p className="text-xs truncate font-medium">{frame.name}</p>
                                <p className="text-[10px] text-slate-400">{frame.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

import { Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, Laptop, LayoutList, Volume, Maximize2} from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between fixed bottom-0 left-0 w-screen">
      <div className="flex items-center gap-2">
        <img
          src="./albumImage.jpg"
          height={56}
          width={56}
          alt="foto da musica"
        />
        <div className="flex flex-col">
          <strong className="font-normal">JUDAS</strong>
          <span className="text-xs text-zinc-400">7 Minutoz</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-6 items-center">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />

          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
            <Play />
          </button>

          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:32</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="h-1 w-41 bg-zinc-200 rounded-full"></div>
          </div>
          <span className="text-xs text-zinc-400">1:32</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop size={20} />

        <div className="flex items-center gap-2">
          <Volume size={20} />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="h-1 w-10 bg-zinc-200 rounded-full"></div>
          </div>
        </div>

        <Maximize2 size={20} />
      </div>
    </footer>
  );
}

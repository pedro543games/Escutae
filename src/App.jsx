import { Home, Search, Library, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { Footer } from './components/footer'
import { Sidebar } from './components/sideBar'

function App() {
    return (
        <div className="h-screen flex flex-col text-zinc-50">
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-6 pb-26">
                    <div className='flex items-center gap-4'>
                        <button className='rounded-full bg-black/20 p-1'>
                            <ChevronLeft />
                        </button>
                        <button className='rounded-full bg-black/20 p-1'>
                            <ChevronRight />
                        </button>
                    </div>

                    <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

                    <div className='grid grid-cols-2 gap-4 mt-4'>
                        <a href="" className='bg-white/5 rounded group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
                            <img src="./Musics/Shikamaru.jpg" height={104} width={104} alt="Capa do album" />
                            <strong>Rap Do Shikamaru</strong>

                            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                                <Play />
                            </button>
                        </a>
                        <a href="" className='bg-white/5 rounded-md group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
                            <img src="./Musics/ShutUp.jpg" height={104} width={104} alt="Capa do album" />
                            <strong>Shut Up My Moms Calling</strong>

                            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                                <Play />
                            </button>
                        </a>
                        <a href="" className='bg-white/5 rounded-md group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
                            <img src="./Musics/HeadHunter.jpg" height={104} width={104} alt="Capa do album" />
                            <strong>I Think I Still Damaged</strong>

                            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                                <Play />
                            </button>
                        </a>
                        <a href="" className='bg-white/5 rounded-md group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
                            <img src="./albumImage.jpg" height={104} width={104} alt="Capa do album" />
                            <strong>Judas</strong>

                            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                                <Play />
                            </button>
                        </a>
                    </div>

                    <h2 className='font-semibold text-2xl mt-10'> Made For You</h2>

                    <div className='grid grid-cols-7 gap-4 mt-4'>

                        <div className='bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2'>
                            <img src="./1nonly.jpg" height={120} className='w-full' width={120} alt="Capa do album" />
                            <strong className='font-semibold'>Daily Mix 1</strong>
                            <span className='text-sm text-zinc-500'> 1nonly e lilbubblegum </span>
                        </div>

                        <div className='bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2'>
                            <img src="./Lee.jpg" height={120} className='w-full' width={120} alt="Capa do album" />
                            <strong className='font-semibold'>Good Vibes</strong>
                            <span className='text-sm text-zinc-500'> Lee, Blvk, 90sFkav e mais...</span>
                        </div>

                        <div className='bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2'>
                            <img src="./Shiloh.jpg" height={120} className='w-full' width={120} alt="Capa do album" />
                            <strong className='font-semibold'>Sad Mix</strong>
                            <span className='text-sm text-zinc-500'> Shiloh Dynasty, Sagun, kidtendo! e mais...</span>
                        </div>

                        <div className='bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2'>
                            <img src="./7mz.jpg" height={120} className='w-full' width={120} alt="Capa do album" />
                            <strong className='font-semibold'>Mix 7 Minutoz</strong>
                            <span className='text-sm text-zinc-500'> Death Note, Rap do Sharingan e mais...</span>
                        </div>

                        <div className='bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2'>
                            <img src="./Artic.jpg" height={120} className='w-full' width={120} alt="Capa do album" />
                            <strong className='font-semibold'>Mix Artic Mokeys</strong>
                            <span className='text-sm text-zinc-500'> 505, Do I Wanna Know?, Knee Socks e mais...</span>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default App
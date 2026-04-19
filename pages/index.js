import React from 'react';
import { Search, Tv, BookOpen, ArrowRight, Play } from 'lucide-react';

export default function MangaSync() {
  const animeCards =[
    {
      title: "Jujutsu Kaisen",
      video: "https://assets.mixkit.co/videos/preview/mixkit-abstract-glowing-neon-lines-background-loop-31295-large.mp4",
      animePoint: "S2 Ended",
      mangaPoint: "Ch. 138"
    },
    {
      title: "Demon Slayer",
      video: "https://assets.mixkit.co/videos/preview/mixkit-night-streets-of-tokyo-illuminated-by-neon-signs-119-large.mp4",
      animePoint: "S4 Ended",
      mangaPoint: "Ch. 137"
    },
    {
      title: "Chainsaw Man",
      video: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-drawing-a-comic-with-ink-27361-large.mp4",
      animePoint: "S1 Ended",
      mangaPoint: "Ch. 39"
    }
  ];

  return (
    <div className="bg-[#0A0A0F] text-[#F0F0F5] min-h-screen selection:bg-[#FF0055] selection:text-white">
      {/* Anime / Cyberpunk Custom CSS System */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Permanent+Marker&display=swap');
        
        .font-anime { font-family: 'Oswald', sans-serif; }
        .font-marker { font-family: 'Permanent Marker', cursive; }
        
        /* New Cyber Glass Effect */
        .cyber-glass {
          background: rgba(15, 15, 22, 0.4);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(0, 240, 255, 0.1);
          border-left: 3px solid #FF0055;
          position: relative;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
          overflow: hidden;
        }

        /* Diagonal Accent Bar inside Cards */
        .cyber-glass::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 20%;
          height: 200%;
          background: rgba(255,255,255,0.03);
          transform: rotate(45deg);
          pointer-events: none;
        }

        /* CRT Scanline Overlay */
        .scanlines::before {
          content: "";
          display: block;
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0),
            rgba(255,255,255,0) 50%,
            rgba(0,0,0,0.1) 50%,
            rgba(0,0,0,0.1)
          );
          background-size: 100% 4px;
          z-index: 50;
          pointer-events: none;
        }
      `}} />

      {/* Global CRT Scanlines (Visible on Desktop mainly) */}
      <div className="fixed inset-0 scanlines pointer-events-none z-50"></div>

      {/* SECTION 1: HERO - DYNAMIC TOKYO SEARCH */}
      <section className="relative w-full h-screen border-b-2 border-[#00F0FF]/20">
        <video 
          autoPlay loop muted playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-70 filter brightness-[0.6] contrast-125 sepia-[0.2] hue-rotate-[-30deg]"
          src="https://assets.mixkit.co/videos/preview/mixkit-neon-lights-in-a-dark-alley-in-tokyo-44026-large.mp4"
        />
        
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-12 h-full flex flex-col pt-8">
          {/* Navigation Area */}
          <header className="flex items-center justify-between w-full border-b border-[#F0F0F5]/10 pb-4">
            <div className="font-anime font-bold text-[28px] tracking-wide text-[#00F0FF] flex items-center gap-2">
              <Tv className="text-[#FF0055] w-6 h-6" /> Manga<span className="text-white">Sync</span>.io
            </div>
            
            <nav className="hidden md:flex cyber-glass rounded-lg px-8 py-3 items-center gap-8">
              {['Series Database', 'Trending', 'My List', 'Requests'].map((item) => (
                <a key={item} href="#" className="font-anime font-medium tracking-wide text-[16px] uppercase hover:text-[#00F0FF] transition-colors">
                  {item}
                </a>
              ))}
            </nav>

            <button className="cyber-glass rounded w-12 h-12 flex justify-center items-center group">
              <Search className="w-5 h-5 group-hover:text-[#FF0055]" />
            </button>
          </header>

          {/* Huge Main Call to Action Content */}
          <div className="flex-1 flex flex-col justify-center max-w-[900px] mt-[-5vh]">
            <h1 className="font-anime uppercase text-[48px] sm:text-[70px] lg:text-[100px] leading-[1.05] relative z-10 font-bold drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#00F0FF]/50">
              BRIDGE THE GAP.
              <br />READ <span className="text-[#00F0FF]">THE TRUE</span> CANON.
              <span className="absolute -right-2 sm:-right-8 top-0 lg:-top-12 font-marker text-[#FF0055] text-[28px] sm:text-[40px] md:text-[50px] lowercase rotate-[-4deg] opacity-100 whitespace-nowrap drop-shadow-[0_0_15px_rgba(255,0,85,0.8)]">
                No more waiting!
              </span>
            </h1>
            
            <p className="font-sans text-[16px] sm:text-[18px] md:text-[20px] max-w-[500px] mt-6 text-[#F0F0F5]/80 font-light border-l border-[#00F0FF] pl-4">
              Stop wandering the wikis to figure out where your favorite anime left off. Find exactly which manga chapter to pick up right now.
            </p>

            {/* Giant Action Button */}
            <button className="mt-12 bg-gradient-to-r from-[#FF0055] to-[#c5003c] text-white font-anime tracking-wider text-xl w-[260px] h-[60px] flex items-center justify-center gap-3 transform hover:-skew-x-12 transition-all shadow-[0_0_20px_rgba(255,0,85,0.5)]">
              SEARCH ANIME DIRECTORY <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE DB GRID */}
      <section className="relative w-full bg-[#0A0A0F] py-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0A0A0F] via-[#0A0A0F] to-[#040406]">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
          
          <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-16 gap-6 sm:gap-0 border-b border-[#F0F0F5]/10 pb-6">
            <h2 className="font-anime font-bold text-[36px] sm:text-[50px] leading-[1.1]">
              <span className="text-white">TOP CHART:</span><br/>
              <span className="font-marker font-normal text-[#FF0055] text-[36px] lowercase tracking-wide block translate-y-[-10px] pl-6">Highly Anticipated</span>
            </h2>

            <div className="flex items-center gap-2 group cursor-pointer border border-[#F0F0F5]/20 px-6 py-2 rounded-sm cyber-glass">
              <span className="font-anime text-[18px] uppercase tracking-wider group-hover:text-[#00F0FF]">VIEW FULL INDEX</span>
              <BookOpen className="w-4 h-4 text-[#FF0055] group-hover:animate-pulse" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {animeCards.map((card, idx) => (
              <div key={idx} className="cyber-glass p-1 rounded-sm group relative cursor-pointer transform hover:-translate-y-2 hover:border-l-4 hover:border-l-[#00F0FF] transition-all duration-300">
                <div className="relative w-full pb-[110%] overflow-hidden rounded-[2px] bg-black">
                  <video 
                    autoPlay loop muted playsInline 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms] opacity-50 group-hover:opacity-100"
                    src={card.video}
                  />
                  
                  {/* Floating Content over Video */}
                  <div className="absolute top-0 w-full bg-gradient-to-b from-black/80 to-transparent p-6 z-10">
                     <h3 className="font-anime text-3xl font-bold tracking-wide uppercase drop-shadow-[2px_2px_0px_#FF0055] text-white">
                        {card.title}
                     </h3>
                  </div>

                  {/* Dark Sync Overlay */}
                  <div className="absolute bottom-6 left-4 right-4 z-10 grid grid-cols-2 gap-4">
                     {/* Anime Endpoint Box */}
                     <div className="bg-[#0A0A0F]/90 backdrop-blur-md p-3 border-l-2 border-red-500 rounded-sm">
                       <div className="text-[#F0F0F5]/50 font-mono text-[10px] uppercase font-bold tracking-widest flex items-center gap-1 mb-1"><Play className="w-3 h-3 text-red-500 fill-current" /> WATCHED TO:</div>
                       <div className="font-anime font-medium tracking-wide text-lg uppercase text-white">{card.animePoint}</div>
                     </div>
                     {/* Manga Start Point Box */}
                     <div className="bg-[#FF0055]/90 backdrop-blur-md p-3 border-l-2 border-white rounded-sm shadow-[0_0_15px_#FF0055]">
                       <div className="text-white font-mono text-[10px] uppercase font-bold tracking-widest flex items-center gap-1 mb-1"><BookOpen className="w-3 h-3 text-white" /> START FROM:</div>
                       <div className="font-anime font-bold tracking-wider text-xl uppercase text-white">{card.mangaPoint}</div>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: BOTTOM / CALL TO ACTION BANNER */}
      <section className="relative w-full overflow-hidden bg-black py-[120px] border-t-2 border-[#00F0FF]/30">
         {/* Noise graphic or Video Background could go here */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#0A0A0F]/90 z-0"></div>
        <video 
          autoPlay loop muted playsInline 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover mix-blend-screen opacity-10 blur-sm pointer-events-none z-10"
          src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-drawing-a-comic-with-ink-27361-large.mp4"
        />

        <div className="relative z-20 max-w-[1200px] mx-auto text-center px-6">
            <span className="font-marker text-[#00F0FF] text-[24px] sm:text-[36px] lowercase tracking-wider mix-blend-lighten z-10 mb-[-15px] block -rotate-3 text-center w-full shadow-[#00F0FF]">
              Spoilers everywhere!
            </span>
            <h2 className="font-anime font-bold uppercase text-[40px] sm:text-[60px] md:text-[80px] lg:text-[110px] leading-none mb-10 inline-block px-10 relative">
               DON'T WAIT FOR THE <br className="hidden md:block"/>NEXT SEASON.
               {/* Edge cut box decoration */}
               <div className="absolute top-0 left-0 w-8 h-8 border-t-[3px] border-l-[3px] border-[#FF0055]"></div>
               <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[3px] border-r-[3px] border-[#FF0055]"></div>
            </h2>
            
            <p className="text-[#F0F0F5]/60 font-sans max-w-2xl mx-auto text-[16px] sm:text-[20px] mb-12">
               Over <strong className="text-white">4,000</strong> mapped connections linking anime endpoints to exact manga starting volumes. Stay ahead of the timeline.
            </p>

            <button className="mx-auto flex cyber-glass items-center justify-center bg-white/5 border border-white/20 text-white w-full sm:w-auto px-10 py-5 rounded-[4px] hover:bg-white hover:text-black font-anime text-2xl uppercase tracking-[0.2em] font-bold group transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                Read From Your Chapter 
                <Search className="ml-3 group-hover:scale-125 transition-transform stroke-[3px]" />
            </button>
        </div>
      </section>

    </div>
  );
}

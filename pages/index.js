import React from 'react';
import { Mail, GitHub, ChevronRight } from 'lucide-react';

export default function OrbisNftLanding() {
  const nftCards =[
    {
      video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4",
      score: "8.7/10"
    },
    {
      video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4",
      score: "9/10"
    },
    {
      video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4",
      score: "8.2/10"
    }
  ];

  return (
    <div className="bg-[#010828] text-[#EFF4FF] min-h-screen selection:bg-[#6FFF00] selection:text-[#010828]">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Condiment&display=swap');
        
        .font-grotesk { font-family: 'Anton', sans-serif; }
        .font-condiment { font-family: 'Condiment', cursive; }
        
        .liquid-glass {
          background: rgba(255, 255, 255, 0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: none;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }
        .liquid-glass::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.4px;
          background: linear-gradient(180deg,
          rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
          rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
          rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}} />

      <div className="fixed inset-0 z-50 pointer-events-none mix-blend-lighten opacity-60 bg-[url('/texture.png')] bg-cover"></div>

      <section className="relative w-full h-screen rounded-b-[32px] overflow-hidden">
        <video 
          autoPlay loop muted playsInline 
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4"
        />
        
        <div className="relative z-10 max-w-[1831px] mx-auto px-6 sm:px-12 h-full flex flex-col pt-8">
          <header className="flex items-start justify-between w-full">
            <div className="font-grotesk text-[16px] uppercase tracking-wide">Orbis.Nft</div>
            
            <nav className="hidden lg:flex liquid-glass rounded-[28px] px-[52px] py-[24px] items-center gap-8 z-20">
              {['Homepage', 'Gallery', 'Buy NFT', 'FAQ', 'Contact'].map((item) => (
                <a key={item} href="#" className="font-grotesk text-[13px] uppercase hover:text-[#6FFF00] transition-colors">
                  {item}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex flex-col gap-3 mt-4">
              {[Mail, Github].map((Icon, i) => (
                <button key={i} className="liquid-glass w-[56px] h-[56px] rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition-colors z-20">
                  <Icon className="w-[20px] h-[20px] text-[#EFF4FF]" strokeWidth={1.5} />
                </button>
              ))}
            </div>
          </header>

          <div className="flex-1 flex flex-col justify-center max-w-[780px] lg:ml-32 mt-[-10vh] relative pointer-events-none">
            <h1 className="font-grotesk uppercase text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] leading-[1.05] sm:leading-[1] relative inline-block">
              BEYOND EARTH<br />AND ( ITS ) FAMILIAR BOUNDARIES
              
              <span className="absolute -right-4 md:-right-12 bottom-4 sm:bottom-0 lg:-bottom-6 font-condiment text-[#6FFF00] text-[24px] sm:text-[32px] md:text-[48px] normal-case -rotate-1 mix-blend-exclusion opacity-90 whitespace-nowrap">
                Nft collection
              </span>
            </h1>

            <div className="flex lg:hidden justify-start gap-4 mt-12 pointer-events-auto">
              {[Mail, Github].map((Icon, i) => (
                <button key={i} className="liquid-glass w-[56px] h-[56px] rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Icon className="w-[20px] h-[20px] text-[#EFF4FF]" strokeWidth={1.5} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full min-h-screen overflow-hidden">
        <video 
          autoPlay loop muted playsInline 
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4"
        />
        
        <div className="relative z-10 max-w-[1831px] mx-auto px-6 sm:px-12 py-[64px] sm:py-[80px] md:py-[96px] h-full min-h-screen flex flex-col justify-between">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0 mt-[10vh]">
            <h2 className="font-grotesk uppercase text-[32px] sm:text-[45px] lg:text-[60px] relative leading-[1.1]">
              HELLO!<br />I'M ORBIS
              
              <span className="absolute -right-6 sm:-right-16 bottom-0 sm:-bottom-2 font-condiment text-[#6FFF00] normal-case text-[36px] sm:text-[52px] lg:text-[68px] -rotate-1 mix-blend-exclusion whitespace-nowrap">
                Orbis
              </span>
            </h2>
            <p className="font-mono text-[14px] lg:text-[16px] uppercase max-w-[266px] text-[#EFF4FF] leading-relaxed">
              A DIGITAL OBJECT FIXED BEYOND TIME AND PLACE. AN EXPLORATION OF DISTANCE, FORM, AND SILENCE IN SPACE.
            </p>
          </div>

          <div className="flex justify-between items-end mt-32 lg:mt-0 mb-[5vh]">
            <div className="flex flex-col gap-6">
              <p className="font-mono text-[14px] lg:text-[16px] uppercase max-w-[266px] text-[#010828] md:text-[#EFF4FF]/10 leading-relaxed pointer-events-none">
                A DIGITAL OBJECT FIXED BEYOND TIME AND PLACE. AN EXPLORATION OF DISTANCE, FORM, AND SILENCE IN SPACE.
              </p>
              <p className="font-mono text-[14px] lg:text-[16px] uppercase max-w-[266px] text-[#010828] md:text-[#EFF4FF]/10 leading-relaxed pointer-events-none">
                A DIGITAL OBJECT FIXED BEYOND TIME AND PLACE. AN EXPLORATION OF DISTANCE, FORM, AND SILENCE IN SPACE.
              </p>
            </div>
            
            <div className="hidden lg:flex flex-col gap-6">
              <p className="font-mono text-[14px] lg:text-[16px] uppercase max-w-[266px] text-[#EFF4FF]/10 leading-relaxed pointer-events-none">
                A DIGITAL OBJECT FIXED BEYOND TIME AND PLACE. AN EXPLORATION OF DISTANCE, FORM, AND SILENCE IN SPACE.
              </p>
              <p className="font-mono text-[14px] lg:text-[16px] uppercase max-w-[266px] text-[#EFF4FF]/10 leading-relaxed pointer-events-none">
                A DIGITAL OBJECT FIXED BEYOND TIME AND PLACE. AN EXPLORATION OF DISTANCE, FORM, AND SILENCE IN SPACE.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#010828] py-[96px]">
        <div className="max-w-[1831px] mx-auto px-6 sm:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[72px] gap-16 md:gap-8">
            <h2 className="font-grotesk text-[32px] sm:text-[45px] lg:text-[60px] leading-[1]">
              <span className="uppercase">COLLECTION OF</span><br />
              <div className="ml-12 md:ml-24 lg:ml-32 mt-1 sm:mt-0 flex items-center gap-3">
                <span className="font-condiment text-[#6FFF00] normal-case text-[40px] sm:text-[50px] lg:text-[70px] translate-y-[-8px]">Space</span>
                <span className="uppercase">OBJECTS</span>
              </div>
            </h2>

            <button className="group relative flex flex-col items-start cursor-pointer hover:opacity-90">
              <div className="flex items-end gap-3 mb-3">
                <span className="font-grotesk text-[32px] sm:text-[45px] lg:text-[60px] leading-none uppercase">SEE</span>
                <div className="flex flex-col font-grotesk text-[20px] sm:text-[28px] lg:text-[36px] leading-[0.9] uppercase">
                  <span>ALL</span>
                  <span>CREATORS</span>
                </div>
              </div>
              <div className="h-[6px] lg:h-[10px] w-full bg-[#6FFF00] group-hover:bg-[#EFF4FF] transition-colors duration-300"></div>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {nftCards.map((card, idx) => (
              <div key={idx} className="liquid-glass rounded-[32px] p-[18px] group hover:bg-white/5 transition duration-500">
                <div className="relative w-full pb-[100%] rounded-[24px] overflow-hidden bg-black/50">
                  <video 
                    autoPlay loop muted playsInline 
                    className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-[800ms] group-hover:scale-[1.03]"
                    src={card.video}
                  />
                  <div className="absolute bottom-[24px] left-[24px] right-[24px] liquid-glass rounded-[20px] pl-[20px] pr-[12px] py-[12px] flex justify-between items-center z-10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-wider text-[#EFF4FF] opacity-70 mb-0.5">RARITY SCORE:</div>
                      <div className="font-grotesk text-[16px] tracking-wide text-[#EFF4FF] uppercase">{card.score}</div>
                    </div>
                    <button className="w-[48px] h-[48px] shrink-0 rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform duration-300 group/btn">
                      <ChevronRight className="text-[#EFF4FF] w-[22px] h-[22px] transform translate-x-[1px] group-hover/btn:translate-x-[3px] transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#010828]">
        <video 
          autoPlay loop muted playsInline 
          className="w-full h-auto block"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4"
        />
        
        <div className="absolute inset-0 max-w-[1831px] mx-auto w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute left-[8%] bottom-[12%] sm:bottom-[15%] lg:bottom-[20%] liquid-glass rounded-[0.5rem] md:rounded-[1.25rem] flex flex-col pointer-events-auto">
            {[Mail, Github].map((Icon, i) => (
              <button key={i} className={`
                flex items-center justify-center hover:bg-white/10 transition-colors
                w-[14vw] h-[14vw] sm:w-[14.375rem] sm:h-[14.375rem] md:w-[10.78125rem] md:h-[10.78125rem] lg:w-[16.77rem] lg:h-[16.77rem]
                ${i !== 1 ? 'border-b border-[#EFF4FF]/10' : ''}
              `}>
                <Icon className="w-[4vw] h-[4vw] sm:w-[24px] sm:h-[24px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px] text-[#EFF4FF]" strokeWidth={1.5} />
              </button>
            ))}
          </div>

          <div className="absolute inset-0 flex items-center justify-end pointer-events-auto w-full h-full pb-[10%]">
            <div className="relative text-right w-full lg:pr-[20%] pr-[8%] sm:pr-[12%] lg:pl-[15%] flex justify-end">
              <div className="relative inline-block max-w-[90%] md:max-w-none text-right">
                <span className="absolute -top-6 sm:-top-8 md:-top-12 lg:-top-16 -left-6 sm:-left-12 lg:-left-20 font-condiment normal-case text-[#6FFF00] text-[17px] sm:text-[32px] md:text-[48px] lg:text-[68px] mix-blend-exclusion z-10 whitespace-nowrap rotate-[-3deg] md:rotate-0">
                  Go beyond
                </span>
                
                <h2 className="font-grotesk text-[16px] sm:text-[28px] md:text-[40px] lg:text-[60px] text-[#EFF4FF] uppercase leading-[1.1] md:leading-[1.1] text-right inline-block">
                  <div className="mb-4 md:mb-8 lg:mb-12 tracking-wide">JOIN US.</div>
                  <div className="tracking-wide text-[#EFF4FF]/90">REVEAL WHAT'S HIDDEN.</div>
                  <div className="tracking-wide text-[#EFF4FF]/90">DEFINE WHAT'S NEXT.</div>
                  <div className="tracking-wide text-[#EFF4FF]/90">FOLLOW THE SIGNAL.</div>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

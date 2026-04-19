              <a
                href="#chapter-map"
                className="bg-gradient-to-r from-[#FF0055] to-[#c5003c] text-white font-anime tracking-wider text-lg px-7 h-[58px] flex items-center justify-center gap-3 hover:skew-x-[-8deg] transition-all shadow-[0_0_20px_rgba(255,0,85,0.45)]"
              >
                SEARCH <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#0A0A0F] py-20">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-12 gap-6 border-b border-[#F0F0F5]/10 pb-6">
            <h2 className="font-anime font-bold text-[36px] sm:text-[50px] leading-[1.1]">
              <span className="text-white">SERIES INDEX:</span>
              <br />
              <span className="font-marker font-normal text-[#FF0055] text-[36px] lowercase tracking-wide block -translate-y-2 pl-6">
                Pick your anime
              </span>
            </h2>

            <div className="flex items-center gap-2 border border-[#F0F0F5]/20 px-6 py-2 rounded-sm cyber-glass">
              <span className="font-anime text-[18px] uppercase tracking-wider">
                {filteredAnime.length} result{filteredAnime.length === 1 ? '' : 's'}
              </span>
              <BookOpen className="w-4 h-4 text-[#FF0055]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredAnime.map((card) => (
              <button
                type="button"
                key={card.slug}
                onClick={() => chooseAnime(card.slug)}
                className="cyber-glass text-left p-1 rounded-sm group relative cursor-pointer hover:-translate-y-2 hover:border-l-4 hover:border-l-[#00F0FF] transition-all duration-300"
              >
                <div className="relative w-full pb-[110%] overflow-hidden rounded-[2px] bg-black">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms] opacity-50 group-hover:opacity-100"
                    src={card.video}
                  />

                  <div className="absolute top-0 w-full bg-gradient-to-b from-black/80 to-transparent p-6 z-10">
                    <h3 className="font-anime text-3xl font-bold tracking-wide uppercase drop-shadow-[2px_2px_0px_#FF0055] text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70 max-w-[300px]">{card.synopsis}</p>
                  </div>

                  <div className="absolute bottom-6 left-4 right-4 z-10 grid grid-cols-2 gap-4">
                    <div className="bg-[#0A0A0F]/90 backdrop-blur-md p-3 border-l-2 border-red-500 rounded-sm">
                      <div className="text-[#F0F0F5]/50 font-mono text-[10px] uppercase font-bold tracking-widest flex items-center gap-1 mb-1">
                        <Play className="w-3 h-3 text-red-500 fill-current" /> WATCHED TO:
                      </div>
                      <div className="font-anime font-medium tracking-wide text-lg uppercase text-white">
                        {card.status}
                      </div>
                    </div>
                    <div className="bg-[#FF0055]/90 backdrop-blur-md p-3 border-l-2 border-white rounded-sm shadow-[0_0_15px_#FF0055]">
                      <div className="text-white font-mono text-[10px] uppercase font-bold tracking-widest flex items-center gap-1 mb-1">
                        <BookOpen className="w-3 h-3 text-white" /> READ NEXT:
                      </div>
                      <div className="font-anime font-bold tracking-wider text-xl uppercase text-white">
                        {card.readNext}
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="chapter-map" className="relative w-full overflow-hidden bg-black py-20 border-t-2 border-[#00F0FF]/30">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-10 blur-sm pointer-events-none"
          src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-drawing-a-comic-with-ink-27361-large.mp4"
        />

        <div className="relative z-20 max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
            <div>
              <span className="font-marker text-[#00F0FF] text-[28px] lowercase tracking-wider block -rotate-2">
                Episode chapter map
              </span>
              <h2 className="font-anime font-bold uppercase text-[42px] sm:text-[64px] leading-none mt-2">
                {selectedAnime.title}
              </h2>
              <p className="text-white/60 mt-4 max-w-2xl">
                Choose an episode to see which manga chapters it adapts and the next chapter to read.
              </p>
            </div>

            <label className="cyber-glass rounded px-4 h-[54px] flex items-center gap-3 max-w-[260px]">
              <ChevronDown className="w-5 h-5 text-[#FF0055]" />
              <select
                value={seasonFilter}
                onChange={(event) => setSeasonFilter(event.target.value)}
                className="w-full bg-transparent outline-none font-anime uppercase tracking-wide"
              >
                <option className="bg-black" value="all">All seasons</option>
                {seasons.map((season) => (
                  <option className="bg-black" key={season} value={season}>
                    Season {season}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid gap-4">
            {visibleEpisodes.map((episode) => (
              <article
                key={`${episode.season}-${episode.episode}-${episode.title}`}
                className="cyber-glass rounded-md p-4 sm:p-5 grid sm:grid-cols-[130px_1fr_170px_170px] gap-4 items-center"
              >
                <div className="font-anime text-[#00F0FF] text-xl uppercase">
                  S{episode.season} EP{episode.episode}
                </div>
                <div>
                  <h3 className="font-anime text-2xl uppercase text-white">{episode.title}</h3>
                  <p className="text-white/50 text-sm">Anime episode coverage</p>
                </div>
                <div className="bg-black/40 border border-white/10 rounded p-3">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/45">Covers</div>
                  <div className="font-anime text-2xl text-white">{episode.chapters}</div>
                </div>
                <div className="bg-[#FF0055] rounded p-3 shadow-[0_0_15px_rgba(255,0,85,0.45)]">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/80">Read next</div>
                  <div className="font-anime text-2xl text-white">{episode.next}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

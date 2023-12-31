function Home() {
  return (
    <>
      <h1>Home</h1>

      <div>
        <div className="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">
          <div className="w-2 bg-gray-800"></div>

          <div
            className="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card"
            data-movie-id="438631"
          >
            <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
            <div
              className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info"
              data-lity=""
              href="https://www.youtube.com/embed/aSHs224Dge0"
            >
              <div className="poster__info align-self-end w-full">
                <div classNameName="h-32"></div>
                <div classNameName="space-y-6 detail_info">
                  <div classNameName="flex flex-col space-y-2 inner">
                    <a
                      className="relative flex items-center w-min flex-shrink-0 p-1 text-center text-white bg-red-500 rounded-full group-hover:bg-red-700"
                      data-unsp-sanitized="clean"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div className="absolute transition opacity-0 duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-x-16 text-xl font-bold text-white group-hover:pr-2">
                        Trailer
                      </div>
                    </a>
                    <h3
                      className="text-2xl font-bold text-white"
                      data-unsp-sanitized="clean"
                    >
                      Dune
                    </h3>
                    <div className="mb-0 text-lg text-gray-400">
                      Beyond fear, destiny awaits.
                    </div>
                  </div>
                  <div className="flex flex-row justify-between datos">
                    <div className="flex flex-col datos_col">
                      <div className="popularity">440.052</div>
                      <div className="text-sm text-gray-400">Popularity:</div>
                    </div>
                    <div className="flex flex-col datos_col">
                      <div className="release">2021-09-15</div>
                      <div className="text-sm text-gray-400">Release date:</div>
                    </div>
                    <div className="flex flex-col datos_col">
                      <div className="release">155 min</div>
                      <div className="text-sm text-gray-400">Runtime:</div>
                    </div>
                  </div>
                  <div className="flex flex-col overview">
                    <div className="flex flex-col"></div>
                    <div className="text-xs text-gray-400 mb-2">Overview:</div>
                    <p className="text-xs text-gray-100 mb-6">
                      Paul Atreides, a brilliant and gifted young man born into
                      a great destiny beyond his understanding, must travel to
                      the most dangerous planet in the universe to ensure the
                      future of his family and his people. As malevolent forces
                      explode into conflict over the planet's exclusive supply
                      of the most precious resource in existence-a commodity
                      capable of unlocking humanity's greatest potential-only
                      those who can conquer their fear will survive.
                    </p>
                  </div>
                </div>
                <div
                  data-countdown="2021-09-15"
                  className="absolute inset-x-0 top-0 pt-5 w-full mx-auto text-2xl uppercase text-center drop-shadow-sm font-bold text-white"
                >
                  00 Days 00:00:00
                </div>
              </div>
            </div>
            <img
              className="absolute inset-0 transform w-full -translate-y-4"
              src="http://image.tmdb.org/t/p/w342/s1FhMAr91WL8D5DeHOcuBELtiHJ.jpg"
              style={{ filter: 'grayscale(0)' }}
            />
            <div className="poster__footer flex flex-row relative pb-10 space-x-4 z-10">
              <a
                className="flex items-center py-2 px-4 rounded-full mx-auto text-white bg-red-500 hover:bg-red-700"
                href="http://www.google.com/calendar/event?action=TEMPLATE&amp;dates=20210915T010000Z%2F20210915T010000Z&amp;text=Dune%20%2D%20Movie%20Premiere&amp;location=http%3A%2F%2Fmoviedates.info&amp;details=This%20reminder%20was%20created%20through%20http%3A%2F%2Fmoviedates.info"
                target="_blank"
                data-unsp-sanitized="clean"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <div className="text-sm text-white ml-2">Set reminder</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

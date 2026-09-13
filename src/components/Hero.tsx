export default function Hero() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        
        <div className="flex flex-col-reverse md:flex-row md:gap-10 lg:gap-16 items-center">
          
          {/* Text Area */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="text-area w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                Build Your Ideal{" "}
                <span className="bg-linear-65 from-orange-600 to-purple-600 bg-clip-text text-transparent">
                  Development Stack
                </span>
              </h1>

              <p className="py-5 text-sm sm:text-base lg:text-lg leading-7 text-zinc-600 max-w-xl">
                Explore frontend, backend, database, and tooling options,
                compare them side by side, and build the perfect technology
                stack for your next project.
              </p>
            </div>

            {/* Buttons */}
            <div className="button-area flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="w-full sm:w-auto py-2.5 px-5 rounded-md bg-linear-65 from-orange-600 to-purple-600 text-white font-medium">
                Explore Technologies
              </button>

              <button className="w-full sm:w-auto py-2.5 px-5 rounded-md border border-zinc-300 font-medium">
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/assets/banner-stack.png"
              alt="Development stack"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
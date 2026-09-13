import { use } from "react";

export default function Technologies({ data }) {
  const getData = use(data);
  console.log(getData);
  return (
    <section className="w-full">
        <div className="mb-6 max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900">Explore the <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">Technologies</span></h2>
                <p className="text-[10px] text-gray-400 mt-1">Pick technologies to build your ideal development stack.</p>
            </div>
      <div className="max-w-7xl mx-auto flex gap-5">
        
        <div className="w-[75%]">
            
          <div className="w-full flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {getData.map(({name, icon,slug,badge,description,category,level,rating}) => {
              return (
                <div className="rounded-xl p-4 bg-white transition-all duration-200 border border-gray-200 hover:-translate-y-1 hover:shadow-lg hover:border-pink-300">
                  <div className="flex items-center justify-between">
                        <img src={icon} className="w-7 h-7 object-contain" alt={name} />
                        <span className="text-[9px] px-2 py-1 rounded-full bg-pink-50 text-pink-400">{badge}</span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 mt-3">{name}</h3>
                  <p className="text-[10px] text-gray-500 leading-4 mt-2 min-h-[48px]">{description}</p>
                  <div className="flex items-center justify-between mt-3 gap-1">
                    <span className="text-[8px] bg-gray-100 px-2 py-1 rounded">{category}</span>
                    <span className="text-[8px] text-gray-500">{level}</span>
                    <span className="flex items-center gap-1 text-[9px] text-gray-600">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="text-yellow-500" height="10" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                        {rating}
                    </span>
                  </div>
                  <button className="w-full mt-3 py-2 rounded-md text-[9px] font-medium text-white transition-all duration-200 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 opacity-100 hover:brightness-110 hover:shadow-md hover:-translate-y-[1px] active:translate-y-0">Add to Stack</button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[25%]">
            <aside className="w-full lg:w-[250px] border border-gray-200 rounded-xl p-4 bg-white h-fit lg:sticky lg:top-24">
                <h2 className="text-sm font-bold text-gray-800">Your Stack</h2>
                <p className="text-[9px] text-gray-400 mt-1">0 Technologies Selected</p>
                <div className="border border-dashed border-gray-200 rounded-lg mt-5 p-8 text-center">
                    <p className="text-[10px] text-gray-400">Your stack is empty.</p>
                    <p className="text-[8px] text-gray-300 mt-1">Add technologies to build your stack.</p>
                </div>
            </aside>
        </div>
      </div>
    </section>
  );
}

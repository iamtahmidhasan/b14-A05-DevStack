import { use, useState } from "react";
import { toast } from "react-toastify";

type Tech = {
  name: string;
  slug: string;
  icon: string;
  badge: string;
  description: string;
  category: string;
  level: string;
  rating: number;
};

export default function Technologies({ data }: { data: Promise<Tech[]> }) {
  const getData = use(data);
  const [stack, setStack] = useState<Tech[]>([]);

  const handleAddToStack = (tech: Tech) => {
    if (stack.some((item) => item.slug === tech.slug)) {
      toast.info(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveFromStack = (slug: string) => {
    const item = stack.find((tech) => tech.slug === slug);
    setStack((prev) => prev.filter((tech) => tech.slug !== slug));
    if (item) toast.warn(`${item.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.warn("All technologies removed from your stack.");
  };

  return (
    <section className="w-full">
        <div className="mb-6 max-w-7xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-900">Explore the <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">Technologies</span></h2>
                <p className="text-[10px] text-gray-400 mt-1">Pick technologies to build your ideal development stack.</p>
            </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-5 px-4">
        
        <div className=" w-full md:w-[75%]">
            
          <div className="w-full flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {getData.map(({name, icon,slug,badge,description,category,level,rating}) => {
              const isAdded = stack.some((item) => item.slug === slug);
              return (
                <div key={slug} className={`${isAdded ? "border-2 border-pink-300 opacity-80" : ""} rounded-xl p-4 bg-white transition-all duration-200 border border-gray-200 hover:-translate-y-1 hover:shadow-lg hover:border-pink-300`}>
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
                  <button
                      onClick={() => handleAddToStack({ name, icon, slug, badge, description, category, level, rating })}
                      disabled={isAdded}
                      className={`w-full mt-3 py-2 rounded-md text-[9px] font-medium text-white transition-all duration-200 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 ${isAdded ? "opacity-50 cursor-not-allowed" : "hover:brightness-110 hover:shadow-md hover:-translate-y-[1px] active:translate-y-0"}`}
                    >Add to Stack</button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full md:w-[25%]">
            <aside className="w-full lg:w-[250px] border border-gray-200 rounded-xl p-4 bg-white h-fit lg:sticky lg:top-24">
                <h2 className="text-sm font-bold text-gray-800">Your Stack</h2>
                <p className="text-[9px] text-gray-400 mt-1">{stack.length} Technologies Selected</p>
                {stack.length === 0 ? (
                  <div className="border border-dashed border-gray-200 rounded-lg mt-5 p-8 text-center">
                    <p className="text-[10px] text-gray-400">Your stack is empty.</p>
                    <p className="text-[8px] text-gray-300 mt-1">Add technologies to build your stack.</p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 mt-5">
                    {stack.map((tech) => (
                      <div key={tech.slug} className="flex items-center justify-between border border-gray-200 rounded-lg p-2">
                        <div className="flex items-center gap-2">
                          <img className="w-6 h-6 object-contain" src={tech.icon} alt={tech.name} />
                          <div className="flex flex-col">
                            <span className="text-[10px] font-medium text-gray-700">{tech.name}</span>
                            <span className="text-[8px] font-medium text-gray-500">{tech.category}</span>
                          
                          </div>
                        </div>
                        <button
                          onClick={() => handleRemoveFromStack(tech.slug)}
                          className="text-gray-300 hover:text-red-500 transition-colors duration-200"
                          title={`Remove ${tech.name}`}
                        >
                          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                      </div>
                    ))}
                    <button onClick={handleRemoveAll} className="w-full mt-4 border border-red-200 text-red-500 text-[12px] font-semibold py-2 rounded-md hover:bg-red-50">Remove All</button>
                  </div>
                )}
            </aside>
        </div>
      </div>
    </section>
  );
}

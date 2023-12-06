import React from "react";

const GenericHero = ({ title }) => {
  return (
    <div className="w-full md:bg-black/70 relative overflow-hidden">
      <div className="w-full py-20 h-full bg-gradient-to-r  from-pink-700 to-red-600 relative">
        <div className="max-w-lg mx-auto relative h-full w-full px-4 flex items-center justify-center gap-y-4 md:gap-y-8 flex-col">
          <p className="border-white/40 flex border border-solid text-xs text-white/60 bg-white/10 px-4 py-1 rounded-full">
            News By Categories
          </p>
          {title ? (
            <h2 className="text-white uppercase text-3xl lg:text-4xl xl:text-5xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl tracking-widest font-semibold">
              {title}
            </h2>
          ) : (
            <div className="w-full">
              <h2 className="p-4 bg-white/20 w-1/5 mb-3 rounded-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"></h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenericHero;

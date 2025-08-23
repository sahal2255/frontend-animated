import React from 'react'

const FlavourTitle = () => {
  return (
    <div className="space-y-6 general-title col-center h-full 2xl:gap-32 xl:gap-24 text-center">
      <div className="overflow-hidden py-3">
        <h1 className="sporty-text text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
          WE HAVE 6
        </h1>
      </div>

      <div className="relative inline-block">
        <div
          className="bg-[#8b4513] px-4 py-2 inline-block text-white font-black text-4xl md:text-5xl uppercase tracking-tight skew-x-[-10deg]"
        >
          FREAKING
        </div>
      </div>

      <div>
        <h1 className="sporty-text text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
          DELICIOUS FLAVORS.
        </h1>
      </div>
    </div>
  )
}

export default FlavourTitle

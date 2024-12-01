import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatsSection: React.FC = () => {
    
  const { ref, inView } = useInView({
    // triggerOnce: true, // Trigger only once when the component is visible
    threshold: 0.2, // Adjust the threshold for visibility
  });

  return (
    <div className="mb-24">
      <div
        ref={ref}
        className="relative overflow-hidden border-y border-zinc-700 bg-zinc-900/30"
      >
        <div className="relative z-10 mx-auto max-w-3xl px-4 py-12">
          <h2 className="mx-auto mb-9 block w-fit bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text text-center text-lg text-transparent">
            Have hard stats? Numbers don't lie!
          </h2>
          <div className="flex flex-col items-center justify-center sm:flex-row">
            <div className="flex w-72 flex-col items-center py-8 sm:py-0">
              <p className="mb-2 text-center text-6xl lg:text-7xl font-semibold text-zinc-50">
                <CountUp
                  start={0}
                  end={45}
                  duration={3}
                  suffix="%"
                  redraw={true}
                  enableScrollSpy={false}
                  startOnMount={false}
                  useEasing={true}
                  delay={0}
                />
              </p>
              <p className="max-w-48 text-center text-zinc-500">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
            <div className="h-[1px] w-12 bg-zinc-600 sm:h-12 sm:w-[1px]"></div>
            <div className="flex w-72 flex-col items-center py-8 sm:py-0">
              <p className="mb-2 text-center text-6xl lg:text-7xl font-semibold text-zinc-50">
                <CountUp
                  start={0}
                  end={15.5}
                  duration={3}
                  decimals={1}
                  suffix="K+"
                  redraw={true}
                />
              </p>
              <p className="max-w-48 text-center text-zinc-500">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
            <div className="h-[1px] w-12 bg-zinc-600 sm:h-12 sm:w-[1px]"></div>
            <div className="flex w-72 flex-col items-center py-8 sm:py-0">
              <p className="mb-2 text-center text-6xl lg:text-7xl font-semibold text-zinc-50">
                <CountUp
                  start={0}
                  end={20}
                  duration={3}
                  suffix="B+"
                  redraw={true}
                />
              </p>
              <p className="max-w-48 text-center text-zinc-500">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 z-0 size-72 -translate-x-1/2 translate-y-1/2 rounded-full bg-zinc-900 blur-2xl"></div>
      </div>
    </div>
  );
};

export default StatsSection;

/* eslint-disable import/prefer-default-export */
import { Circle } from "phosphor-react";

export function Loading() {
  return (
    <div className="flex flex-col items-center justify-center text-white animate-pulse">
      <div className="flex gap-2">
        <Circle
          weight="fill"
          className="w-6 h-6 text-primary-800 animate-bounce"
        />
        <Circle
          weight="fill"
          className="w-6 h-6 animate-bounce text-primary-600 animation-delay-300"
        />
        <Circle
          weight="fill"
          className="w-6 h-6 animate-bounce text-primary-400 animation-delay-500"
        />
      </div>
      <span className="mt-2 text-lg">Loading</span>
    </div>
  );
}

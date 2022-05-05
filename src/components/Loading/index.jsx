/* eslint-disable import/prefer-default-export */
import { CircleNotch } from "phosphor-react";

export function Loading() {
  return (
    <div className="flex flex-col items-center justify-center">
      <CircleNotch weight="bold" className="w-6 h-6 animate-spin" />
      <span>Loading...</span>
    </div>
  );
}

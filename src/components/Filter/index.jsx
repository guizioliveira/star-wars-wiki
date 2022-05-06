import { MagnifyingGlass } from "phosphor-react";

export function Filter() {
  return (
    <div className="w-full flex justify-end">
      <div className="relative w-full mt-3 sm:mt-0 sm:w-[225px] flex items-center text-gray-400 focus-within:text-white">
        <MagnifyingGlass weight="bold" className="absolute w-18 h-18 left-3 " />
        <input
          type="text"
          placeholder="Search"
          className="bg-primary-900 py-2 px-2 pl-9 text-sm rounded-2xl w-full"
        />
      </div>
    </div>
  );
}

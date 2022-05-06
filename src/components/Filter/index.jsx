import { useState } from "react";
import { MagnifyingGlass, Funnel } from "phosphor-react";
import { ListBoxFilter } from "./ListBoxFilter";
import { Popup } from "../Commons/Popup";

const filters = [
  { id: 1, name: "name" },
  { id: 2, name: "birth" },
  { id: 3, name: "height" },
  { id: 4, name: "mass" }
];

const order = [
  { id: 1, name: "ascending" },
  { id: 2, name: "descending" }
];

export function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const [filterBy, setFilterBy] = useState(filters[0]);
  const [orderBy, setOrderBy] = useState(order[0]);

  function closeModal() {
    setIsOpen(false);
  }

  function handleFilters() {
    console.log({ filterBy, orderBy });
    closeModal();
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="w-full flex mt-3 sm:mt-0 justify-end">
      <div className="relative w-3/4 sm:w-[225px] flex items-center text-gray-400 focus-within:text-white ">
        <MagnifyingGlass
          weight="bold"
          className="absolute w-[18px] h-[18px] left-3 pointer-events-none"
        />
        <input
          type="text"
          placeholder="Search"
          className="bg-primary-900 py-2 px-2 pl-9 text-sm rounded-2xl w-full focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-900 focus-within:ring-opacity-75 focus-within:ring-offset-2 focus-within:ring-offset-dark-900"
        />
      </div>
      <button
        onClick={openModal}
        className="bg-primary-900 w-1/4 h-9 sm:w-9 ml-3 rounded-full flex justify-center items-center text-gray-400 hover:text-white hover:bg-primary-500 transition focus:outline-none focus-visible:ring-2 focus-visible:hover:ring-primary-500 focus-visible:ring-primary-900 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900"
      >
        <Funnel weight="bold" className="w-[18px] h-[18px]" />
      </button>

      <Popup isOpen={isOpen} title={"Filters"} setIsOpen={setIsOpen}>
        <div className="mt-2 flex flex-col gap-2">
          <ListBoxFilter
            optionsList={filters}
            getter={filterBy}
            setter={setFilterBy}
          />
          <ListBoxFilter
            optionsList={order}
            getter={orderBy}
            setter={setOrderBy}
          />
        </div>

        <div className="mt-4">
          <button
            type="button"
            className="inline-flex justify-center rounded-md bg-primary-500 px-4 py-2 text-sm font-medium hover:bg-primary-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900 sm:text-sm text-white"
            onClick={handleFilters}
          >
            Apply Filters
          </button>
        </div>
      </Popup>
    </div>
  );
}

import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { MagnifyingGlass, Funnel, X } from "phosphor-react";
import { ListBoxFilter } from "./ListBoxFilter";

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

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-gradient-to-b from-primary-900 to-dark-800 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h2"
                    className="text-2xl font-medium text-white"
                  >
                    Filters
                  </Dialog.Title>
                  <button
                    onClick={closeModal}
                    className="absolute top-6 right-6 text-white hover:text-primary-500"
                  >
                    <X weight="bold" className="w-6 h-6" />
                  </button>
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

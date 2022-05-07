import { Fragment } from "react";
import { Transition, Listbox } from "@headlessui/react";
import { Check, CaretDown } from "phosphor-react";
import { capitalize } from "../Commons/Formaters";

export function ListBoxFilter({ optionsList, getter, setter }) {
  return (
    <Listbox value={getter} onChange={setter}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-primary-900 py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-700 sm:text-sm text-white">
          <span className="block truncate">{capitalize(getter.name)}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <CaretDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-primary-900 py-1 text-white text-base shadow-lg focus:outline-none sm:text-sm">
            {optionsList.map((option) => (
              <Listbox.Option
                key={option.id}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active && "bg-primary-500"
                  }`
                }
                value={option}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {capitalize(option.name)}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                        <Check className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}

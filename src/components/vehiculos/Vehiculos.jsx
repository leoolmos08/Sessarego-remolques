import {
  ChevronDownIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

import ListaVehiculosContainer from "./ListaVehiculosContainer";
import { XMarkIcon } from "@heroicons/react/24/outline";

const sortOptions = [
  { name: "Mostrar 6 elementos", value: 6, current: false },
  { name: "Mostrar 12 elementos", value: 12, current: false },
];
const filters = [
  {
    id: "subCategories",
    name: "Vehículos",
    options: [
      { label: "Camiones", value: "vehicleType=camion", checked: false },
      { label: "Remolques", value: "vehicleType=remolque", checked: false },
      { label: "Pick-up", value: "vehicleType=pick-up", checked: false },
      { label: "Utilitario", value: "vehicleType=utilitario", checked: false },
      {
        label: "Maquinaria Vial",
        value: "vehicleType=maquinaria-vial",
        checked: false,
      },
    ],
  },
  {
    id: "remolques",
    name: "Remolques",
    options: [
      { label: "Acoplados", value: "vehicleType=ACOPLADO", checked: false },
      {
        label: "Semi Remolques",
        value: "vehicleType=SEMI-REMOLQUE",
        checked: false,
      },
      { label: "Carrocerías", value: "vehicleType=CARROCERIA", checked: false },
      { label: "Bateas", value: "vehicleType=BATEA", checked: false },
      { label: "Carretones", value: "vehicleType=CARRETON", checked: false },
      { label: "Tolvas", value: "vehicleType=TOLVA", checked: false },
      { label: "Otros", value: "vehicleType=OTROS", checked: false },
    ],
  },
  {
    id: "marca",
    name: "Marca",
    options: [
      { value: "marca=VOLKSWAGEN", label: "Volkswagen", checked: false },
      { value: "marca=FORD", label: "Ford", checked: false },
      { value: "marca=FIAT", label: "Fiat", checked: false },
      { value: "marca=SCANIA", label: "Scania", checked: false },
      { value: "marca=MERCEDES-BENZ", label: "Mercedes Benz", checked: false },
      { value: "marca=IVECO", label: "Iveco", checked: false },
      { value: "marca=TOYOTA", label: "Toyota", checked: false },
      { value: "marca=VOLVO", label: "Volvo", checked: false },
      { value: "marca=OTROS", label: "Otros", checked: false },
    ],
  },
  {
    id: "combustible",
    name: "Combustible",
    options: [
      { value: "combustible=NAFTA", label: "Nafta", checked: false },
      { value: "combustible=DIESEL", label: "Diesel", checked: false },
      { value: "combustible=GNC", label: "GNC", checked: false },
    ],
  },
  {
    id: "transmision",
    name: "Transmisión",
    options: [
      { value: "transmision=MANUAL", label: "Manual", checked: false },
      { value: "transmision=AUTOMATICO", label: "Automático", checked: false },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [otherFilters, setOtherFilters] = useState([]);
  const [otherFiltersString, setOtherFiltersString] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    setOtherFilters([]);
  }, []);

  useEffect(() => {
    setOtherFiltersString(otherFilters.join("&"));
  }, [otherFilters]);

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;
    if (event.target.checked) {
      setOtherFilters([...otherFilters, checkboxValue]);
    } else {
      setOtherFilters(otherFilters.filter((value) => value !== checkboxValue));
    }
  };

  return (
    <>
      <div className="bg-white">
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filtros
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4 border-t border-gray-200">
                      {filters.map((section) => (
                        <Disclosure
                          as="div"
                          key={section.id}
                          className="border-t border-gray-200 px-4 py-6"
                        >
                          {({ open }) => (
                            <>
                              <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">
                                    {section.name}
                                  </span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <PlusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-6">
                                  {section.options.map((option, optionIdx) => (
                                    <div
                                      key={option.value}
                                      className="flex items-center"
                                    >
                                      <input
                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type="checkbox"
                                        defaultChecked={option.checked}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        onChange={handleCheckboxChange}
                                      />
                                      <label
                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                      >
                                        {option.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Vehículos
              </h1>

              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Mostrar
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <div
                                onClick={() => setItemsPerPage(option.value)}
                                className={classNames(
                                  option.current
                                    ? "font-medium text-gray-900"
                                    : "text-gray-500",
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                {option.name}
                              </div>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <h2 className="text-sm font-medium text-gray-700 hover:text-gray-900">
                    Categorías
                  </h2>
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <form className="hidden lg:block">
                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="border-b border-gray-200 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    onChange={handleCheckboxChange}
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>

                {/* Product grid */}
                <div className="lg:col-span-3">
                  <ListaVehiculosContainer
                    otherFiltersString={otherFiltersString}
                    itemsPerPage={itemsPerPage}
                  />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

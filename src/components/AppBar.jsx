import {
  ArrowLeftIcon,
  MapPinIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";

import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Inicio", href: "#", current: false, link: "/" },
  { name: "Vehiculos", href: "#", current: false, link: "/vehiculos" },
  { name: "Financiacion", href: "#", current: false, link: "/financiacion" },
  { name: "Contacto", href: "#", current: false, link: "/contacto" },
];

const options = [
  { label: "Todos", link: "/vehiculos" },
  { label: "Camiones", link: "/vehiculos/categorias/CAMION" },
  { label: "Remolques", onPress: true },
  { label: "Pick-up", link: "/vehiculos/categorias/PICK-UP" },
  { label: "Utilitario", link: "/vehiculos/categorias/UTILITARIO" },
  {
    label: "Maquinaria Vial",
    link: "/vehiculos/categorias/MAQUINARIA-VIAL",
  },
];

const optionsRemolques = [
  { label: "Acoplados", link: "/vehiculos/categorias/ACOPLADO" },
  { label: "Semi-Remolques", link: "/vehiculos/categorias/SEMI-REMOLQUE" },
  { label: "Carrocerías", link: "/vehiculos/categorias/CARROCERIA" },
  { label: "Bateas", link: "/vehiculos/categorias/BATEA" },
  { label: "Carretones", link: "/vehiculos/categorias/CARRETON" },
  { label: "Tolvas", link: "/vehiculos/categorias/TOLVA" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AppBar() {
  const [remolquesIsOpen, setRemolquesIsOpen] = useState(false);

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <h6>Menú</h6>
                  )}
                  {/*<Bars3Icon className="block h-6 w-6" aria-hidden="true" />*/}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link to={item.link}>
                        <a
                          key={item.name}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 max-sm:hidden">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <MapPinIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <p className="font-normal text-sm text-gray-300">
                  Ruta 19 km. 3,33 Córdoba
                </p>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link to="/">
                <Disclosure.Button
                  as="a"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  aria-current={undefined}
                >
                  Inicio
                </Disclosure.Button>
              </Link>
            </div>
            <div className="space-y-1 px-2 pb-3 pt-2">
              {!remolquesIsOpen ? (
                <Disclosure>
                  <Disclosure.Button
                    as="a"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    aria-current={undefined}
                  >
                    Vehiculos
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-6">
                    <div className="space-y-6">
                      {options.map((option, optionIdx) => (
                        <div
                          key={Math.random()}
                          className="flex items-center"
                          onClick={
                            option.onPress
                              ? () => setRemolquesIsOpen(!remolquesIsOpen)
                              : null
                          }
                        >
                          <Link to={option.link ? option.link : null}>
                            <label
                              htmlFor={`filter-mobile-${optionIdx}`}
                              className="ml-7 min-w-0 flex-1 text-white"
                            >
                              {option.label}
                            </label>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </Disclosure>
              ) : (
                <Disclosure>
                  <Disclosure.Button
                    as="a"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium flex-row"
                    aria-current={undefined}
                  >
                    <div className="flex flex-row">
                      <button
                        onClick={() => setRemolquesIsOpen(!remolquesIsOpen)}
                      >
                        <ArrowLeftIcon
                          className="h-6 w-6 mr-2"
                          aria-hidden="true"
                        />
                      </button>
                      Remolques
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="pt-6">
                    <div className="space-y-6">
                      {optionsRemolques.map((option, optionIdx) => (
                        <div key={Math.random()} className="flex items-center">
                          <Link to={option.link}>
                            <label
                              htmlFor={`filter-mobile-${optionIdx}`}
                              className="ml-7 min-w-0 flex-1 text-white"
                            >
                              {option.label}
                            </label>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </Disclosure>
              )}
            </div>
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link to="/financiacion">
                <Disclosure.Button
                  as="a"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  aria-current={undefined}
                >
                  Financiación
                </Disclosure.Button>
              </Link>
            </div>
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link to="/contacto">
                <Disclosure.Button
                  as="a"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  aria-current={undefined}
                >
                  Contacto
                </Disclosure.Button>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

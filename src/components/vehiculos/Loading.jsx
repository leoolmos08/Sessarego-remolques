import {
  CalendarDaysIcon,
  Cog6ToothIcon,
  TruckIcon,
} from "@heroicons/react/20/solid";

import React from "react";

export default function Loading() {
  const array = [1, 2, 3, 4, 5, 6];

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        {array.map((item) => (
          <div className="animate-pulse group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:h-48 xl:w-48">
              <div className="h-full w-full object-cover object-center group-hover:opacity-75 bg-slate-700" />
            </div>
            <div className="space-y-3">
              <h3 className="mt-4 bg-slate-700 rounded"></h3>
              <p className="mt-1  bg-slate-700 rounded"></p>
              <div className="flex flex-row">
                <CalendarDaysIcon className="w-5" />
                <p className="h-2 pl-3 bg-slate-700 rounded"></p>
              </div>
              <div className="flex flex-row">
                <TruckIcon className="w-5" />
                <p className="h-2 pl-3 bg-slate-700 rounded"></p>
              </div>
              <div className="flex flex-row">
                <Cog6ToothIcon className="w-5" />
                <p className="h-2 pl-3 bg-slate-700 rounded"></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

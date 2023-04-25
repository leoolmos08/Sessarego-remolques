import React from 'react'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid"

export default function Footer() {
  return (
    <footer className='bg-gray-900 flex flex-row justify-around h-48 items-center block bottom-0 w-full pt-30 pb-30'>
        <div className='mt-10'>
            <h2 className='text-xl text-slate-300'>Sessarego Remolques</h2>
            <p className='pt-3 text-slate-400'>Toda una vida dedicados a la compra-venta de camiones y remolques.</p>
        </div>
        <div className='mt-10'>
            <h2 className='text-xl text-slate-300'>Contáctenos</h2>
            <div className='flex flex-row pt-3'>
                <MapPinIcon className='w-6' color='#94a3b8'/>
                <p className='text-slate-400 pl-3'>Ruta 19 km 33, Córdoba</p>
            </div>
            <div className='flex flex-row pt-3'>
                <PhoneIcon className='w-6' color='#94a3b8'/>
                <p className='text-slate-400 pl-3'>351353131</p>
            </div>
            <div className='flex flex-row pt-3'>
                <EnvelopeIcon className='w-6' color='#94a3b8'/>
                <p className='text-slate-400 pl-3'>sessarego@gmail.com</p>
            </div>
        </div>
    </footer>
  )
}

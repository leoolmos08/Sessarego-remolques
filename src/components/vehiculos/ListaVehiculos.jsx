import { CalendarDaysIcon, TruckIcon, Cog6ToothIcon } from "@heroicons/react/20/solid"
const products = [
    {
      id: 1,
      name: 'CAMION CARGO',
      year:'2015',
      km:'180.000',
      fuel:'Diesel',
      href: '#',
      price: '$18.060.000',
      imageSrc: 'https://www.bastrucks.com/photos/1280/202346_1.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'MERCEDEZ BENZ 1114',
      year:'1975',
      km:'360.000',
      fuel:'Diesel',
      href: '#',
      price: '$9.060.000',
      imageSrc: 'https://static2.aastatic.com.ar/files/variants/1200/24a4689fea2f4a39b09b3228e60867d4.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 3,
      name: 'IVECO TECTOR',
      year:'2010',
      km:'180.000',
      fuel:'Diesel',
      href: '#',
      price: '$20.060.000',
      imageSrc: 'https://http2.mlstatic.com/D_NQ_NP_630333-MLA45213381805_032021-O.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 4,
      name: 'IVECO CURSOR',
      year:'2022',
      km:'80.000',
      fuel:'GNC',
      href: 'vehiculos/iveco-cursor',
      price: '$16.889.000',
      imageSrc: 'https://i0.wp.com/www.camionesybuses.com.ar/wp-content/uploads/2020/04/iveco-cruso-9-y-11.jpg?resize=1200%2C718',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 5,
      name: 'FORD CARGO 1848',
      year:'2012',
      km:'180.000',
      fuel:'Diesel',
      href: '#',
      price: '$18.060.000',
      imageSrc: 'https://www.bastrucks.com/photos/1280/202346_1.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 6,
      name: 'CAMION CARGO',
      year:'2018',
      km:'180.000',
      fuel:'Diesel',
      href: '#',
      price: '$18.060.000',
      imageSrc: 'https://www.bastrucks.com/photos/1280/202346_1.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    
    // More products...
  ]
  
  export default function ListaVehiculos() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:h-48 xl:w-48">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-green-900">{product.price}</p>
                <div className="flex flex-row">
                    <CalendarDaysIcon className="w-5"/>
                    <p className="text-sm pl-3 font-light">{product.year}</p>
                </div>
                <div className="flex flex-row">
                    <TruckIcon className="w-5"/>
                    <p className="text-sm pl-3 font-light">{product.km}</p>
                </div>
                <div className="flex flex-row">
                    <Cog6ToothIcon className="w-5"/>
                    <p className="text-sm pl-3 font-light">{product.fuel}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
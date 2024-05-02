import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

const navigation = [
  { name: 'About Us', to: '/about', current: true },
  { name: 'Courses', to: '/cources', current: false },
  { name: 'Community', to: '/coumminity', current: false },
  { name: 'Contact Us', to: '/contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-primary">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-button hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-12 w-auto"
                    src="https://s3-alpha-sig.figma.com/img/638c/07df/07f2efd0d6661aebaee7a8ed5fa342ce?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dPsVSdbkj8jHYYh3bDOk79sVsUQO5xgBwLuabtiHi2i2d-aeuQ3NTd66uqB3BSoq-whV~1w4d83qd9gd5SRL6UdB5ZN4LcR67XzaeQWFXztMi2Q~RtRGRGBl7TNewt7I-K9xiMgLOfDRw6hBp0cOCqjA72RE9fDFGTue6f-MatVt2hJB4G-p~pvshGmpyYBjgK8s4ltE~lJytoLyi3c6E-e7HCZnkbGM-h0qClQLIYn7FsRwjT9vqovJFtFlhao8~SWYEs3w6RgGi9F-SpP~4dQR4qj0rjKNQDhm~MnVUeoOyoWTpES-Lym~L-EAZLf1krjh6~6hswdi7oKrRxIhUA__"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className="rounded-md px-3 py-2 text-sm font-medium hover:text-red-500"
                        activeClassName="text-red-500" // Apply a custom class for active NavLink
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="submit"
                  className="rounded-md bg-button px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-button"
                >
                  LOG IN
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    item.current ? 'bg-button text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  activeClassName="text-red-500" // Apply a custom class for active NavLink
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

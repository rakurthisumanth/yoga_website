
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function Bottomnav() {
  return (
    <div className="relative isolate overflow-hidden bg-primary py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <img
              className="h-12 w-auto"
              src="https://s3-alpha-sig.figma.com/img/638c/07df/07f2efd0d6661aebaee7a8ed5fa342ce?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dPsVSdbkj8jHYYh3bDOk79sVsUQO5xgBwLuabtiHi2i2d-aeuQ3NTd66uqB3BSoq-whV~1w4d83qd9gd5SRL6UdB5ZN4LcR67XzaeQWFXztMi2Q~RtRGRGBl7TNewt7I-K9xiMgLOfDRw6hBp0cOCqjA72RE9fDFGTue6f-MatVt2hJB4G-p~pvshGmpyYBjgK8s4ltE~lJytoLyi3c6E-e7HCZnkbGM-h0qClQLIYn7FsRwjT9vqovJFtFlhao8~SWYEs3w6RgGi9F-SpP~4dQR4qj0rjKNQDhm~MnVUeoOyoWTpES-Lym~L-EAZLf1krjh6~6hswdi7oKrRxIhUA__"
              alt="Your Company"
            />            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Clear your thoughts, Focus your mind, and Reduce stress!</h2>

          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">

              <h1 className="mt-4 font-semibold text-black">Quick Links</h1>
              <dd className="mt-2 leading-7 text-black">
                Home<br />Community<br />Courses              </dd>
            </div>


            <div className="flex flex-col items-start">
              <dt className="mt-4 font-semibold text-black">Company</dt>
              <dd className="mt-2 leading-7 text-black">
                Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
              </dd>
            </div>


          </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-primary"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}

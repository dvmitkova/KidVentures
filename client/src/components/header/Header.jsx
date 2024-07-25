const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]

const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]

export default function Header() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-48 sm:py-72">
      <img
        alt=""
        src="public/images/header2.jpg"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-cyan-50 opacity-50"></div>
      
      <div className="flex justify-center items-center h-full">
        <div className="mx-auto max-w-5xl bg-yellow-100 bg-opacity-40 p-6 rounded-lg text-center">
          <h2 className="text-4xl font-bold text-cyan-800 sm:text-6xl">Travel with your kids</h2>
          <p className="text-lg mt-6 font-bold leading-8 text-cyan-900">
            Explore the world with your little ones. Share your travel experiences, discover family-friendly destinations, and find the best activities to keep your kids entertained. Join our community of traveling parents and make every journey an adventure!
          </p>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-cyan-900 sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-cyan-600">
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-cyan-900">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-cyan-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
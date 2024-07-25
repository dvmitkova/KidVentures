export default function Header() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-44 sm:py-72">
      <img
        alt=""
        src="/images/header3.jpg"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-cyan-50 opacity-40"></div>
      
      <div className="flex justify-center items-start h-full">
        <div className="absolute top-20 left-0 right-0 mx-auto max-w-3xl bg-lime-100 bg-opacity-40 rounded-lg text-center">
          <h2 className="text-3xl p-10 font-bold text-cyan-800 sm:text-6xl">Travel with your kids</h2>
          <p className="text-2x1 pb-7 font-bold leading-8 text-cyan-900">
            Explore the world with your little ones. Share your travel experiences, discover family-friendly destinations, and find the best activities to keep your kids entertained. Join our community of traveling parents and make every journey an adventure!
          </p>
        </div>
      </div>
    </div>
  )
}
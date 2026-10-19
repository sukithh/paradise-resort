export default function Navbar() {
  return (
    <nav className="absolute left-0 top-0 z-10 flex w-full items-center justify-between px-8 py-6 text-white">
      
      <h1 className="text-2xl font-bold">
        Paradise Resort
      </h1>

      <div className="flex gap-8">
        <a href="/" className="transition hover:text-gray-300">
          Home
        </a>

        <a href="/rooms" className="transition hover:text-gray-300">
          Rooms
        </a>

        <a href="/experiences" className="transition hover:text-gray-300">
          Experiences
        </a>

       
        <a href="/contact" className="transition hover:text-gray-300">
          Contact
        </a>
      </div>

      
<a
  href="/booking"
  className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
>
  Book Now
</a>


    </nav>
  );
}
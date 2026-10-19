type RoomCardProps = {
  image: string;
  name: string;
  description: string;
  price: string;
};

export default function RoomCard({
  image,
  name,
  description,
  price,
}: RoomCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg">

      <img
        src={image}
        alt={name}
        className="h-64 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-semibold text-black">
          {name}
        </h3>

        <p className="mt-3 text-gray-600">
          {description}
        </p>

        <div className="mt-6 flex items-center justify-between">

          <p className="text-lg font-semibold text-black">
            {price}
          </p>

          <a
  href="/booking"
  className="rounded-full bg-black px-5 py-2 text-white transition hover:bg-gray-800"
>
  View Room
</a>
        </div>

      </div>
    </div>
  );
}
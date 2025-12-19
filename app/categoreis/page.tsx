export default function Categories() {
  const cats = [
    { name: "Mobiles", img: "/cat1.png" },
    { name: "Fashion", img: "/cat2.png" },
    { name: "Electronics", img: "/cat3.png" },
  ];

  return (
    <section className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-semibold mb-6">Categories</h2>

      <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-6 gap-4">
        {cats.map((c, i) => (
          <div
            key={i}
            className="bg-gray-100 p-4 rounded-lg flex flex-col items-center shadow"
          >
            <img src={c.img} className="w-16 h-16 mb-2" />
            <p className="font-medium">{c.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

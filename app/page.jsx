export default function HomePage() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to Artistly.com</h1>
      <p className="mb-6 text-gray-700">Book talented artists for your next event</p>
      <a
        href="/artists"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Explore Artists
      </a>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 px-4">
        {['Singers', 'Dancers', 'Speakers', 'DJs'].map((cat) => (
          <div
            key={cat}
            className="bg-gray-100 p-6 rounded shadow text-lg font-semibold text-gray-800"
          >
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
}



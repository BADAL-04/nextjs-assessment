import artists from '@/data/artists.json';

export default function DashboardPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Manager Dashboard</h1>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="border p-2">Name</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Location</th>
            <th className="border p-2">Fee</th>
          </tr>
        </thead>
        <tbody>
          {artists.map((artist) => (
            <tr key={artist.id} className="border-t">
              <td className="border p-2">{artist.name}</td>
              <td className="border p-2">{artist.category}</td>
              <td className="border p-2">{artist.location}</td>
              <td className="border p-2">{artist.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

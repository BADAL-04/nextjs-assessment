// export default function ArtistCard({ name, category, location, price }) {
//   return (
//     <div className="p-4 border rounded-md shadow-md">
//       <h2 className="text-xl font-bold">{name}</h2>
//       <p className="text-gray-600">Category: {category}</p>
//       <p className="text-gray-600">Location: {location}</p>
//       <p className="text-gray-600">Price: {price}</p>
//       <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
//         Ask for Quote
//       </button>
//     </div>
//   );
// }


export default function ArtistCard({ name, category, location, price }) {
  return (
    <div className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-blue-600">{name}</h2>
      <p className="text-gray-700">Category: {category}</p>
      <p className="text-gray-700">Location: {location}</p>
      <p className="text-gray-700">Price: {price}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Ask for Quote
      </button>
    </div>
  );
}

// import artists from '../data/artists.json'; 
// import ArtistCard from '../components/ArtistCard';

// export default function ArtistListPage() {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Artist Listing</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {artists.map((artist) => (
//           <ArtistCard
//             key={artist.id}
//             name={artist.name}
//             category={artist.category}
//             location={artist.location}
//             price={artist.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


import artists from '../data/artists.json';
import ArtistCard from '../components/ArtistCard';

export default function ArtistListPage() {
  return (
    <div className="px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Artist Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} {...artist} />
        ))}
      </div>
    </div>
  );
}

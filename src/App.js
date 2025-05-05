import React from 'react';
import './App.css';
import ProfileCard from './ProfileCard';
import { useState } from 'react';

function App() {
  const initialPeople = [
    {
        id: 1,
        name: "Thura",
        bio: "Student from Myanmar MM",
        image: "https://scontent-nrt1-2.xx.fbcdn.net/v/t39.30808-1/490916688_668438236050502_1929275624206371102_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=SfgXG25AL6UQ7kNvwHzv7XU&_nc_oc=AdlnYgSiZ-F4YjpK-qTJT58cm3svmmNuVIq4bwersKw1fUFKb63O-cGuNs4bLDTo8-xdLpLiyiYHIc9khZoGYtOZ&_nc_zt=24&_nc_ht=scontent-nrt1-2.xx&_nc_gid=VQza3LsYUnYBuMS_2ZNcgw&oh=00_AfGMGd8WEa1U09l7r6s64g-lDfgWAZHUFXJ6-b0e3iiyqg&oe=681E66B1"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        bio: "First Computer Programmer",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg"
    },
    { 
        id: 3,
        name: "Grace Hopper",
        bio: "Invented the compiler",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh9ExavFXEqadYQbT8UTlNqnOAgibxQbMn2Q&s"
    }
  ];

  const [people, setPeople] = useState(initialPeople);

  function handleRemove(id) {
    setPeople(prev => prev.filter(p => p.id !== id));;
  }

  return (
    <div className="container mx-auto p-6 bg-indigo-50">
      <h1 className="text-3xl font-bold mb-6 text-center underline decoration-indigo-400">Inspirational people</h1>

      {people.length > 0 ? (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {people.map(person => (
      <ProfileCard
        key={person.id}
        name={person.name}
        bio={person.bio}
        image={person.image}
        onRemove={() => handleRemove(person.id)}
      />
    ))}
  </div>
) : (
  <p className="text-gray-600">No profiles left 😢</p>
)}

    </div>
  );
}



export default App;

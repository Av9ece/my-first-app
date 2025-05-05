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
        image: "https://i.pravatar.cc/150?img=1"
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

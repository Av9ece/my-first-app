


function ProfileCard({ name, bio, image, onRemove }) {

    return (
        <div className="max-w-xs bg-white rounded-2xl shadow p-6 m-4 text-center transform transition hover:-translate-y-1 hover:shadow-lg" style={{
            border: "1px solid #ddd",
            padding: "16px",
            borderRadius: "12px",
            maxWidth: "300px",
            margin: "20px auto",
            textAlign: "center"
        }}>
            <h2>{name}</h2>
            <img 
                src={image}
                alt={name}
                style={{
                    borderRadius: "50%",
                    marginBottom: "10px",
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    objectPosition: "top"
                }}
                className="block w-28 h-28 rounded-full mx-auto my-4 object-cover"
            />
            <p className="text-gray-700 leading-relaxed">{bio}</p>
            <button onClick={onRemove} className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
                Remove
            </button>
        </div>
    )

}

export default ProfileCard;
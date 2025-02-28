'use client'

export default function Menu ({ login, senha, username, Logar }) {
    return (
      <div>
        <div className="mb-4">
          <label htmlFor={username} className="block text-sm mb-2">{login}</label>
          <input 
            type="text" 
            id={username} 
            name={username} 
            className="w-full p-2 text-lg border border-gray-300 rounded-md" 
          />
        </div>
  
        <div className="mb-4">
          <label htmlFor={senha} className="block text-sm mb-2">{senha}</label>
          <input 
            type="password" 
            id={senha} 
            name={senha} 
            className="w-full p-2 text-lg border border-gray-300 rounded-md" 
          />
        </div>
  
        <button 
          type="submit" 
          className="w-full p-2 text-lg bg-[#388E3C] text-white rounded-md hover:bg-[#388E3C]"
        >
          {Logar}
        </button>
      </div>
    );
  }
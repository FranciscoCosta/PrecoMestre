'use client'

const SearchBar = () => {
  const handleSubmit =()=>{
    console.log('teste')
  }
  
  
  return (
    <form className='flex flex-wrap gap-4 mt-12' onSubmit={handleSubmit}>

      <input type="text" placeholder="Adicione o link do produto ..." className="searchbar-input"/>
      <button type="submit" className="searchbar-btn">Procurar</button>
    </form>
  )
}

export default SearchBar
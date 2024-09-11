import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'
import { getRandomColor } from '../lib/utils'

const APP_ID = 'ebe76d58'
const APP_KEY = '8c3e2782a6e14e3b44a9b7da40fff960'

const Homepage = () => {
  const [Recipe, setRecipe] = useState([])
  const [Loading, setLoading] = useState(true)

  const fetchRecipes = async (searchquery) => {
    setLoading(true);
    setRecipe([])
    try {
      const res = await fetch(`https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchquery}&type=public`)
      const data = await res.json();
      setRecipe(data.hits);
    } catch (error) {
      console.log(error.message);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRecipes('chicken');
  }, [])

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes(e.target[0].value);
  }
  return (
    <div className='bg-[#000000] p-10 flex-1'>
      <div className='max-w-screen-lg mx-auto'>
        <form onSubmit={handleSearch}>
          <label className='input shadow-md flex items-center gap-2'>
            <Search size={'24'} className='' />
            <input
              type='text'
              className='text-xl md:text-md grow text text-red-500'
              placeholder='What do you want to cook today?' />
          </label>
        </form>

        <p className='font-bold text-3xl md:text-5xl mt-4'>Recommended Recipes</p>
        <p className='text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight'>Popular choices</p>

        <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

          {!Loading && Recipe.map(({ recipe }, index) => <RecipeCard key={index} recipe={recipe} {...getRandomColor()} />)}

          {Loading && [...Array(9)].map((_, index) => (
            <div key={index} className='flex flex-col gap-4 w-full'>
              <div className='skeleton h-32 w-full'></div>
              <div className='flex justify-between'>
                <div className='skeleton h-4 w-28'></div>
                <div className='skeleton h-4 w-24'></div>
              </div>
              <div className='skeleton h-4 w-1/2'></div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Homepage

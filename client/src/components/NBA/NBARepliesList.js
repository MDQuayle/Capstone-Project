import NBARepliesCard from 'NBARepliesCard'
function NBARepliesList({movies, user}) {
  const allMovies = movies.map((movie) => <NBARepliesCard key = {movie.id} id={movie.id} movie={movie} user={user}/> )
  return(
  <div>
      {allMovies}
  </div>
  )
}
export default NBARepliesList;
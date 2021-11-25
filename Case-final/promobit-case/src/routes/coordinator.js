export const HomePage = (history) =>{
    history.push("/")
}
export const goToPopularMovieInDay = (history) =>{
    history.push("/movie")
}

export const goToMovieDetail=(history, id) => {
    history.push(`/movie/${id}`)
}
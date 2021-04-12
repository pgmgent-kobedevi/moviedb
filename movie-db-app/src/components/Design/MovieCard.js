import { Link } from "react-router-dom";
import { route, Routes } from "../../core/routing";
import Like from "../App/Movies/Like/Like";

const MovieCard = ({movie, onUpdate}) => {

    return (
        <div className='movieCard'>
            <Like 
                onUpdate={onUpdate} 
                movieId={movie._id}
                movie={movie}
            />
            <Link to={route(Routes.MoviesDetail, {id: movie._id})}>
                <img src={movie.coverLink} alt='Movie poster'/>
                <section>
                    <p>{movie.title}</p>
                </section>
            </Link>
        </div>
    )
};

export default MovieCard;
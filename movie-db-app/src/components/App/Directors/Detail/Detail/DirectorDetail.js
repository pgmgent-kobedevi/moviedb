import { Link } from "react-router-dom";
import { route, Routes } from "../../../../../core/routing"
import AdminContainer from "../../../../Shared/Admin/AdminContainer";
import MoviesOverview from "./Movies/Overview/MoviesOverview";

const DirectorDetail = ({director}) => {

    return (
        <>
            <h1>{director.name}</h1>
            <AdminContainer>
                <Link to={route(Routes.DirectorsEdit, {id: director._id})}>
                    Edit director
                </Link>
            </AdminContainer>

            <h2>Movies</h2>
            <MoviesOverview directorId={director._id}/>
        </>
    )
}

export default DirectorDetail;
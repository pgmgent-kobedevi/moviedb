import { Link } from 'react-router-dom';
import { Routes } from '../../../core/routing';

const items = [{
    'label': 'Movies',
    'route': Routes.Movies,
    'icon': null,
}, {
    'label': 'Directors',
    'route': Routes.Directors,
    'icon': null,
}, {
    'label': 'Liked movies',
    'route': Routes.LikedMovies,
    'icon': null,
}, {
    'label': 'User',
    'route': Routes.UsersEdit,
    'icon': null,
}]

const Sidebar = () => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    {
                        items.map((item) => (
                            <li key={item.route} className="nav-item">
                                <Link className="nav-link" to={item.route}>{item.label}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );

};

export default Sidebar;

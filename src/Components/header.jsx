import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Container>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <div
                   className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-black text-decoration-none">
                    <Link to='/'>
                        <span className="fs-4 logo">Cat Api</span>
                    </Link>
                </div>
                <ul className="nav col-md-4 justify-content-end text-dark text-decoration-none">
                    <li className="nav-item">
                        <Link to='/'>
                            <span className="nav-link px-2 text-muted">Home</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/api'>
                            <span className="nav-link px-2 text-muted">Fact</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/photo'>
                            <span className="nav-link px-2 text-muted">Photo</span>
                        </Link>
                    </li>
                </ul>
            </header>
        </Container>
    )
}
export default Header
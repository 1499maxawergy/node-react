import { Container } from 'react-bootstrap'
const Footer = (props) => {
    return (
        <Container>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="text-muted">© 2023 <b>Cat Api</b></span>
                </div>
                <span className="text-muted text-end">Enter time: <b>{props.time}</b></span>
            </footer>
        </Container>
    )
}
export default Footer


import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

const APIBody = (props) => {
    return (
        <Container>
            <div className="form-floating mb-3">
                <div onClick={async function () {
                    const final = document.querySelector('#final');
                    final.innerHTML = await props.getFact();
                }} className='btn btn-outline-warning' id="input"> Get fact
                </div>
            </div>
            <div id="final" className="decorated">
            </div>
        </Container>
    );
}
export default APIBody
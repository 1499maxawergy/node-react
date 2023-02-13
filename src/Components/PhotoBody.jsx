import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

const PhotoBody = (props) => {
    return (
        <Container>
            <img className="img-fluid" src="https://kartinkin.net/pics/uploads/posts/2022-09/1662966579_6-kartinkin-net-p-kotik-shlepa-koti-6.jpg"
                 onClick={async function () {
                     document.querySelector('#photo').src = await props.catLink();
                 }} id="photo" height={'400em'} width={'400em'} alt="cat"/>
            <div>
                To reload new photo just click on it!
            </div>

        </Container>
    );
}
export default PhotoBody
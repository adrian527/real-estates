import Container from "react-bootstrap/Container"
import { Facebook, Instagram, Pinterest } from "react-bootstrap-icons"

export function SocialMedia() {
    return <Container className="text-white mb-4 py-4 text-center">
        <div className="row justify-content-center">
            <h2 className="fs-1 my-5">Zobacz moje social media</h2>
            <div className="col-md-4 my-5">
                <Facebook width='160' height='160' />
            </div>
            <div className="col-md-4 my-5">
                <Instagram width='160' height='160' />
            </div>
            <div className="col-md-4 my-5">
                <Pinterest width='160' height='160' />
            </div>
        </div>
    </Container>
}
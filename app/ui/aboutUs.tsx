import { PeopleFill } from 'react-bootstrap-icons';
import Container from "react-bootstrap/Container"

export default function AboutUs() {
    return <Container fluid className="bg-white p-5 text-center my-5">
        <PeopleFill width='100' height='100' className="mb-2" />
        <h2 className="mb-4">
            O mnie
        </h2>
        <div className="text-start">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam earum necessitatibus officiis accusamus ex totam quam neque alias accusantium, delectus magnam iste molestias ut! Quibusdam voluptatibus pariatur autem optio?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam earum necessitatibus officiis accusamus ex totam quam neque alias accusantium, delectus magnam iste molestias ut! Quibusdam voluptatibus pariatur autem optio?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam earum necessitatibus officiis accusamus ex totam quam neque alias accusantium, delectus magnam iste molestias ut! Quibusdam voluptatibus pariatur autem optio?
            </p>
        </div>
    </Container>

}
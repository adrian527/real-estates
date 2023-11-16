import Container from "react-bootstrap/Container"
import ContactForm from "./forms/contactForm"

export default function ContactDetails() {
    return <Container fluid className="text-black bg-white mb-4 py-4 text-center">
        <div className="row">
            <div className="col-md-6">
                <h2 className="p-5">Nie znalazłeś oferty dla siebie, a może chcesz ze mną podjąć stałą wspłółpracę? Napisz!</h2>
                <ContactForm />
            </div>
            <div className="col-md-6">
                <img src="https://i.etsystatic.com/21854381/r/il/1fda90/3030822717/il_570xN.3030822717_b9zn.jpg" className="rounded w-100 mx-auto ratiox7-16 object-fit-cover p-2" style={{ objectPosition: 'top' }} alt="..." />
            </div>
        </div>
    </Container>
}

import Image from "react-bootstrap/Image"
import MainCarousel from "./ui/carousel"
import Offers from "./ui/offers"
import Container from "react-bootstrap/Container"
import AboutUs from "./ui/aboutUs"
import { SocialMedia } from "./ui/socialMedia"
import ContactDetails from "./ui/contactDetails"
import Footer from "./ui/footer"

export default function Home() {
  return (
    <main>
      {/* Sekcje mogą być opcjonalne więc można zrobić divy z marginesem */}
      {/* <Image src='/example.jpg' className="w-100 ratio object-fit-cover ratiox16-7" alt='sad' loading="lazy" /> */}
      {/* Dodać bootstrap karuzele */}
      <MainCarousel />
      <Container className="my-5" fluid>
        <Offers />
      </Container>
      <AboutUs />
      <SocialMedia />
      <ContactDetails />
      <Footer />
    </main>
  )
}

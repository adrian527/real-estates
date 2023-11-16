import Container from "react-bootstrap/Container";
import Image from "next/image";
import Link from "next/link";
import { HouseDoor } from 'react-bootstrap-icons';

// Dobre Kombo białe tło nagłówka czarny napis
export default function Header() {
    return <header className="bg-black bg-gradient py-2" data-bs-theme="dark">
        <Container>
            <Link href="/" className="py-2 text-white text-decoration-none w-100 d-flex flex-wrap justify-content-center  justify-content-lg-start">
                {/* <Image
                    alt=""
                    src="/test2.png"
                    width="60"
                    height="60"
                    className="mb-2 mb-lg-0 d-block d-lg-inline align-top"
                /> */}
                <HouseDoor color="white" className="mb-2 mb-lg-0 d-block d-lg-inline align-top" width="55"
                    height="55"
                />
                <span className="fs-1 d-lg-inline d-block text-center text-lg-start">
                    Grzegorz Brzęczyszczykiewicz Nieruchomości
                </span>
            </Link>
        </Container>
    </header>
}
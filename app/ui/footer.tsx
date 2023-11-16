import Container from "react-bootstrap/esm/Container"

export default function Footer() {
    return <Container fluid className="mt-5 p-0">
        <footer className=" text-white bg-black bg-gradient p-5 pb-3">
            <div className="row justify-content-center">
                <div className="col-md-3 mb-5">
                    <p>Copyright &copy; wszelkie prawa zastrzeżone 2021-2023</p>
                </div>
                <div className="col-md-3 mb-5">
                    <h2>Strony</h2>
                    <ul className="list-group list-group-flush bg-transparent text-white">
                        <li className="list-group-item bg-transparent text-white border-0" >Regulamin</li>
                        <li className="list-group-item bg-transparent text-white border-0" >Polityka prywatności</li>
                        <li className="list-group-item bg-transparent text-white border-0" >FAQ</li>
                    </ul>
                </div>
                <div className="col-md-3 mb-5">
                    <h2>Dane firmy</h2>
                    <ul className="list-group list-group-flush bg-transparent text-white">
                        <li className="list-group-item bg-transparent text-white border-0" >Nazwa firmy: nowa firma nieruchomości</li>
                        <li className="list-group-item bg-transparent text-white border-0" >Telefon: +48 537 476 789</li>
                        <li className="list-group-item bg-transparent text-white border-0" >Email: testowyemail@email.com</li>
                        <li className="list-group-item bg-transparent text-white border-0" >Adres: ul. Zygmunta Krasidzkiego 18, Wrocław</li>
                    </ul>
                </div>

            </div>
        </footer>
    </Container>
}
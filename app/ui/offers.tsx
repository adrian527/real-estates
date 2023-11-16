import Image from "react-bootstrap/Image"

interface Estate {
    title: string;
    img: string
}

export default function Offers() {
    const estates: Array<Estate> = [{ title: 'test 1', img: '/example.jpg' }, { title: 'test 2', img: '/example.jpg' }, { title: 'test 3', img: '/example.jpg' }, { title: 'test 4', img: '/example.jpg' }, { title: 'test 5', img: '/example.jpg' }, { title: 'test 6', img: '/example.jpg' }]

    return <div className="py-5">
        <h1 className="text-white">Work</h1>
        <p className="text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum id natus ducimus ab cupiditate nemo eligendi animi corporis dolorum mollitia nam laborum, sequi voluptates beatae repellendus, iste officiis sunt odio!
        </p>
        <div className="row">
            {estates.map(({ title, img }) => <div key={title} className="mb-4 col-lg-4 col-md-6 col-xs-12">
                <div className="card">
                    <Image src={img} className="card-img-top object-fit-cover" alt='sad' loading="lazy" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item  d-flex justify-content-between"><span>Cena:</span><span>250zł</span></li>
                        <li className="list-group-item  d-flex justify-content-between"><span>Powierzchnia:</span><span>35m2</span></li>
                        <li className="list-group-item d-flex justify-content-between"><span>Dostępność:</span><span>01-02-2024</span></li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="btn btn-dark">Go somewhere</a>
                    </div>
                </div>
            </div>)}

        </div>
    </div>;
}
export default function ContactForm() {
    return <form className="row">
        <div className="form-group col-8 mx-auto my-4 mt-2">
            <label>Imię i nazwisko</label>
            <input type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group col-8 mx-auto my-4">
            <label>Adres email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group col-8 mx-auto my-4">
            <label>Telefon</label>
            <input type="tel" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group col-8 mx-auto my-4">
            <label>Treść wiadomości</label>
            <textarea maxLength={200} className="form-control" rows={10} style={{ resize: 'none' }} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group col-8 mx-auto my-4">
            <button type="submit" className="btn btn-dark">Wyślij</button>
        </div>
    </form>
}
import Banner from "../components/Banner/Banner";
import Header from "../components/header/Header";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/footer/Footer";

function Contact() {
    return ( 
        <>
            <Header />
            <Banner title="Contact" image="Contact.jpg" />
            <div className="container">
                <ContactForm /> 
            </div>
            <Footer />
        </>
    )
}


export default Contact;
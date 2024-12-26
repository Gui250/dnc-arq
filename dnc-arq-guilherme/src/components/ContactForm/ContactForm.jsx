import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './ContactForm.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isFormValid, setIsFormValid] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isFormValid) {
            // Aqui você pode enviar os dados para um servidor ou fazer outra ação.
            console.log("Formulário enviado:", formData);
        }
    };

    useEffect(() => {
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        const isValid = formData.name.trim() && formData.email.trim() && isValidEmail(formData.email) && formData.message.trim();
        setIsFormValid(isValid);
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="container">
            <div className="contact-form d-flex fd-column al-center">
                <h2>We love meeting new people and helping them.</h2>
                <form onSubmit={handleSubmit}>
                    <div className="d-flex form-group">
                        <input
                            className="form-input"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name *"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            className="form-input"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email *"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="contact-form d-flex fd-column al-center">
                        <textarea
                            className="form-input"
                            id="message"
                            name="message"
                            placeholder="Mensagem *"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="al-center d-flex jc-end form-group">
                        <Button type="submit" buttonStyle="secondary" disabled={!isFormValid}>
                            Enviar
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;

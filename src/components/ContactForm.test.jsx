import { render, screen } from '@testing-library/react'
import ContactForm from './ContactForm'

test ( 'rend les champs du formulaire ', () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText('Nom')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Numero de telephone')).toBeInTheDocument();
})



import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contat Page',
    description: 'Esta es la pagina de contacto de la empresa',
    keywords: ['Contact', 'Contact Page', 'Page for Contact']
};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}
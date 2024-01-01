import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About Page',
 description: 'Esta pagina habla sobre la empresa',
 keywords: ['About Page', 'Informacion' , 'Pagina Sobre Samuel']
};

export default function AboutPage(){
    return (
        <span className="text-7xl">About Page</span>
    )
}
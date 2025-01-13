import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Property Pulse',
    keyword: 'rental, property, real state',
    description: 'Property Pulse is a platform for buying and selling properties. We provide a wide range'
}
const MainLayout = ({children}) => {
    return (
        <html>
            <body>
                <Navbar />
                <main>
                   {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}

export default MainLayout;
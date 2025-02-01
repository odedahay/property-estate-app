import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { GlobalProvider } from '@/context/GlobalContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'photoswipe/dist/photoswipe.css';

export const metadata = {
    title: 'Property Pulse',
    keyword: 'rental, property, real state',
    description: 'Property Pulse is a platform for buying and selling properties. We provide a wide range'
}
const MainLayout = ({ children }) => {
    return (
        <AuthProvider>
            <GlobalProvider>
               <html>
                <body>
                    <Navbar />
                    <main>
                        {children}
                    </main>
                    <Footer />
                    <ToastContainer />
                </body>
            </html> 
            </GlobalProvider>
        </AuthProvider>
    );
}

export default MainLayout;
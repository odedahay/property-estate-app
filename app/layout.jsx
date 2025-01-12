import '@/assets/styles/globals.css'

export const metadata = {
    title: 'Property Pulse',
    keyword: 'rental, property, real state',
    description: 'Property Pulse is a platform for buying and selling properties. We provide a wide range'
}
const MainLayout = ({children}) => {
    return (
        <html>
            <body>
                <main>
                   {children}
                </main>
            </body>
        </html>
    );
}

export default MainLayout;
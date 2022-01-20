import Header from "./Header"
import Footer from "../Footer"


interface LayoutProps {
   children: React.ReactNode;
}

export default function MainLayout({ children } : LayoutProps) {
    return <div className="max-w-7xl mx-auto px-4">
        <Header />
            <>
                {children}
            </>
        <Footer />
    </div>
}
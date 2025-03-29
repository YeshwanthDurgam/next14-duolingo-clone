import { Footer } from "./footer";
import { Header } from "./header";

type props = {
    children: React.ReactNode;
}

const Layout=({children}: props)=>{
    return (
        <div className="min-h-screen flex flex-col">
            <Header></Header>
            <main className="flex-1 flex flex-col justify-center items-center">
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;
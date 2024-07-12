
import { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"

const RootLayout = ({children} : { children: ReactNode}) => {

    return (
        <>
            <main>{children}</main>
            <Footer/>
        </>
    )

}

export default RootLayout;
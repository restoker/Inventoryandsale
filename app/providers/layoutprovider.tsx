'use client'

import { HeroUIProvider, ToastProvider } from "@heroui/react"
import { SessionProvider } from "next-auth/react"


const Layoutprovider = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            {/* <SessionProvider> */}
            <HeroUIProvider locale='es-PE'>
                <ToastProvider placement='top-right' />
                {children}
            </HeroUIProvider>
            {/* </SessionProvider> */}
        </div>
    )
}

export default Layoutprovider;
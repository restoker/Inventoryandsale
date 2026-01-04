'use client'

import { HeroUIProvider } from "@heroui/react"


const Layoutprovider = ({ children }: { children: React.ReactNode }) => {
    return (
        <HeroUIProvider locale="es-PE">
            {children}
        </HeroUIProvider>
    )
}

export default Layoutprovider
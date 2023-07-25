import { Flex, Title } from "@tremor/react"
import { SocialNet } from "./SocialNet"

export const NavBar = () => {
    return (
        <Flex justifyContent="between" alignItems="center" className='py-8'>
            <h2 className="font-bold bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent text-xl md:text-2xl animate-pulse">{`<QuotesApp/>`}</h2>
            <SocialNet />
        </Flex >
    )
}

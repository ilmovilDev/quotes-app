import { Flex, Title } from "@tremor/react"
import { SocialNet } from "./SocialNet"

export const NavBar = () => {
    return (
        <Flex justifyContent="between" alignItems="center" className='py-8'>
            <Title>{`<QuotesApp/>`}</Title>
            <SocialNet />
        </Flex >
    )
}

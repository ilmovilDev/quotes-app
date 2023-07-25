import { Button, Flex } from "@tremor/react"

export const MenuButton = ({ handleNextQuote, loading }) => {

    return (
        <Flex className="gap-2" justifyContent="end">
            <Button disabled variant="secondary" color="yellow">Translate</Button>
            <Button disabled={loading} onClick={handleNextQuote}>Next</Button>
        </Flex>
    )
}

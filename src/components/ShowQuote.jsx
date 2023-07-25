import { Card, Title, Text, Flex } from "@tremor/react"
import { SkeletonLoader } from "./SkeletonLoader";

export const ShowQuote = ({ author, category, quote, loading }) => {

    const capitalizedCategory = category ? category.charAt(0).toLocaleUpperCase() + category.slice(1) : "";

    return (
        <Card className="animate__animated animate__fadeIn" decoration="left" decorationColor="yellow">
            {loading ? (
                <SkeletonLoader />
            ) : (
                <Flex className="gap-2" flexDirection="col" alignItems="start">
                    <Text>Category: {capitalizedCategory}</Text>
                    <Title>"{quote}"</Title>
                    <Text>- {author}</Text>
                </Flex>
            )}
        </Card>
    )
}

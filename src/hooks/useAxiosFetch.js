import { useEffect, useState } from "react"
import axios from "axios"

export const useAxiosFetch = (category, isMounted, toggleNextQuote, apyKey, baseUrl) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get(baseUrl, {
                    params: { category },
                    headers: { 'X-Api-Key': apyKey }, // Reemplaza 'YOUR_API_KEY' con tu clave de API válida
                });
                setData(response.data[0]);
            } catch (error) {
                setHasError('Error:', error.response.data);
            } finally {
                setLoading(false)
            }
        };

        if (isMounted) {
            fetchData();
        }
    }, [category, isMounted, toggleNextQuote]);

    return {
        data,
        loading,
        hasError
    }
}

import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const refreshData = () => setLoading(true)

    useEffect(() => {

        if (loading) {

            setTimeout(() => {

                (async () => {

                    try {
                        const res = await fetch(url)
                        const json = await res.json()
                        setData(json)
                    }
                    catch (err) { setData({ error: 1 }) }
                    finally { setLoading(false) }
                })();

            }, 1500);
        }
    }, [loading])

    return { loading, data, refreshData }
}
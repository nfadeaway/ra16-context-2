import React, {useEffect, useState} from 'react';

function UseJsonFetch(URL, opts) {
  const [data, setData] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setError] = useState(null)

  async function fetchData() {
    setIsLoading(true)
    try {
      let response = await fetch(URL)
      if (!response.ok) {throw new Error(response.statusText)}
      response = await response.json()
      setData(response)
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return [data.status, isLoading, hasError]
}

export default UseJsonFetch;
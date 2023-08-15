import { useState } from 'react'

export const Chatbot = () => {
  const [response, setResponse] = useState('')

  const handleGenerate = async (prompt) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_COHERE_KEY}`
      },
      body: JSON.stringify({
        model: 'c9623a32-850b-44f7-b983-a5868099dc4a-ft', // Replace 'x' with the actual model you want to use
        prompt
      })
    }

    try {
      const response = await fetch('https://api.cohere.ai/generate', requestOptions)
      const data = await response.json()
      console.log(data.text)
      setResponse(data.text)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return {
    response,
    handleGenerate
  }
}

import { useState } from 'react'

import { Chatbot } from '../hooks/useChat'

export default function ChatBot () {
  const [prompt, setPrompt] = useState('')
  const { response, handleGenerate } = Chatbot()

  return (
    <div>
      <h1>ChatBot</h1>
      <h2>Do you have any doubt? Ask here</h2>

      <div>
        <input type='text' value={prompt} onChange={(e) => setPrompt(e.target.value)} className='text-black' />
        <button onClick={() => handleGenerate(prompt)}>Send</button>
      </div>

      <div>
        <h2>Response</h2>
        <p>{response}</p>
      </div>

    </div>
  )
}

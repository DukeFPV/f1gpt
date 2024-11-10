'use client'
import Image from 'next/image'
import f1GPTLogo from './assets/f1logo.png'
import { useChat } from 'ai/react'
import { Message } from 'ai'
import Bubble from './components/Bubble'
import LoadingBubble from './components/LoadingBubble'
import PromtSuggestionsRow from './components/PromptSuggestionsRow'


const Home = () => {
  
  const { append, isLoading, messages, input, handleInputChange, handleSubmit } = useChat()

  const noMessages = !messages || messages.length === 0

  const handlePrompt = ( promptText) => {
    const msg: Message = {
      id: crypto.randomUUID(),
      content: promptText,
      role: "user"
    }
    append(msg)
  }

  return (
    <main>
      <Image src={f1GPTLogo} width='250' alt='F1GPT Logo' />
      <section className={noMessages ? "" : "populated"}>
        { noMessages ? (
          <>
            <p className='starter-text'>
              The ultimate place for Formula One super fans!
              Ask F1GPT anything about the fantastic topic of F1 racieng
              and it will respond with the most accurate information.
              We hope you enjoy!
            </p>
            <br />
            <PromtSuggestionsRow 
              onPromptClick={handlePrompt}
            />
          </>
        ) : (
          <>
            {messages.map((message, index) => <Bubble key={`message-${index}`} message={message}/>)}
            {isLoading && <LoadingBubble />}
          </>
        )}
      </section>
      <form onSubmit={handleSubmit}>
        <input className='question-box' onChange={handleInputChange} value={input} placeholder='Ask me anything about F1...' />
        <input type='submit'/>
      </form>
    </main>
  )
}

export default Home
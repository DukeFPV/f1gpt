//import { index } from "langchain/indexes"
import PromptSuggestionButton from "./PromptSuggestionButton"

const PromtSuggestionRow= ({ onPromptClick }) => {

const prompts = [
    "Who is heaad of racing for Aston Martin's F1 Academy team?",
    "Who is the highest paid F1 driver?",
    "Who will be the newest driver for Ferrari?",
    "Who is the current Formula One World Drivers' Champion?",
]
  return (
    <div className="prompt-suggestions-row">
      {prompts.map((prompt, index) => 
        <PromptSuggestionButton 
          key={`suggestion-${index}`}
          text={prompt}
          onClick={() => onPromptClick(prompt)}
        />)}
    </div>
  )

}

export default PromtSuggestionRow
import { useEffect, useState, useRef } from 'react';
import { OpenAI } from 'openai';
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
/**
 * 
 * @param {*} submitState: boolean that triggers the api fetch
 * @param {*} messages: history of messages with chatbot 
 * @param {*} setMessages: adds a new message to the history after every api fetch 
 * @summary This hook is used to fetch a sentence from the openai api 
 */
export default function useFetchSentence(
  submitState,
  messages,
  setMessages,
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [sentence, setSentence] = useState('');
  const isMounted = useRef(false);

  useEffect(() => {
    async function fetchData() {
      if (!messages.length) return;
      const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
      setIsLoading(true);
      try {
        const data = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo-0125', 
          messages,
          max_tokens: 30,
        });
        const responseText = data.choices[0].message.content;
        setSentence(responseText);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            role: 'assistant',
            content: responseText,
          },
        ]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    //prevents from api fetching on initial mount
    if (isMounted.current) fetchData();
    else isMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitState]);
  return { sentence, setSentence, isLoading, error, isMounted };
}

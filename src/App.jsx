import { useEffect, useState } from 'react';
import { useAxiosFetch } from './hooks/useAxiosFetch';
import { Footer, FormSelect, HasError, MenuButton, NavBar, ShowQuote } from './components'
const apyKey = import.meta.env.VITE_NINJAS_API_KEY;
const baseUrl = 'https://api.api-ninjas.com/v1/quotes';

import './App.css'

function App() {

  const [selectdValue, setSelectdValue] = useState("");
  const [toggleNextQuote, setToggleNextQuote] = useState(false)
  const [isMounted, setIsMounted] = useState(false); // Estado para controlar si el componente está montado
  const { data, loading, hasError } = useAxiosFetch(selectdValue, isMounted, toggleNextQuote, apyKey, baseUrl);

  useEffect(() => {
    setIsMounted(true); // Cuando el componente se monte, establecer el estado isMounted a true
    return () => {
      setIsMounted(false); // Cuando el componente se desmonte, establecer el estado isMounted a false
    };
  }, []);

  function handleNextQuote() {
    setToggleNextQuote(!toggleNextQuote)
  }

  return (
    <div className='container mx-auto px-6 max-w-4xl flex flex-col h-screen justify-between'>
      <NavBar />
      <main className='flex flex-col items-start gap-4'>
        <FormSelect
          selectdValue={selectdValue}
          setSelectdValue={setSelectdValue}
        />
        {hasError ? <HasError error={hasError} /> : <ShowQuote loading={loading} {...data} />}
        <MenuButton handleNextQuote={handleNextQuote} loading={loading} />
      </main>
      <Footer />
    </div>
  )
}

export default App



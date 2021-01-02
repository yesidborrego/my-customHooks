import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: false
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, []);

  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: false
    });

    fetch(url)
    .then(res => res.json())
    .then(data => {
      if(isMounted.current) {
        setState({
          data,
          loading: false,
          error: false
        });
      }
    })
    .catch( () => {
      setState({
        data: null,
        loading: false,
        error: 'No se pudo cargar la información'
      });
    });
  }, [url])

  return state;
}

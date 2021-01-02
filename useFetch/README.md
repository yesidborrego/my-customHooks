# useFetch Hook

Ejemplo de uso:
```
  const url = 'endpoint de una API';
  const { state } = useFetch(url);

  useFetch --> devuelve un objeto con el state: { data, loading, error }
  donde por defecto es:
    {
      data: null;
      loading: true,
      error: false
    }
```
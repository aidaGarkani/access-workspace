import { useEffect, useRef, useState } from "react";

function useFetch(api) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const cancelRequest = useRef(false);

  useEffect(() => {
    if (!api) return;
    cancelRequest.current = false;

    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await api();

        if (cancelRequest.current) return;

        setData(response);
      } catch (error) {
        if (cancelRequest.current) return;

        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      cancelRequest.current = true;
    };
  }, []);

  return { data, loading, error };
}

export default useFetch;

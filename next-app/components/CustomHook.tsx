import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((data) => data.json())
      .then((data) => setData(data))
      .catch((error) => setError(error ?? "error Occured"))
      .finally(() => setIsLoading(false));
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;

import useLoadingStore from '@/stores/useLoadingStore';
import { useState, useEffect } from 'react';

const useAsync = (asyncFunction, initialData, initialExecution = true) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState(initialData);
  const { startLoading, stopLoading } = useLoadingStore();

  const execute = async () => {
    setIsLoading(true);
    startLoading();
    setIsError(false);

    try {
      const res = await asyncFunction();
      setData(res.data);
    } catch (e) {
      setIsError(true);
      setError(e);
      console.error('[API ERROR] NOT FOUND FETCH DATA', e);
    } finally {
      setIsLoading(false);
      stopLoading();
    }
  };

  useEffect(() => {
    if (!initialExecution) return;
    execute();
  }, []);

  return { isLoading, isError, data, error, execute };
};

export default useAsync;

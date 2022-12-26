import React, { useState } from "react";

const useFetching = (callback) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async () => {
    try {
      setLoading(true);
      await callback();
      setError("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return [fetching, isLoading, error];
};

export default useFetching;

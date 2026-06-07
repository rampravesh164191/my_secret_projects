import { useEffect, useState } from "react";

export default function UseEffectTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup when component unmounts
    return () => clearInterval(interval);
  }, []);

  return <p>Timer: {seconds} seconds</p>;
}

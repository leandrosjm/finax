import { useEffect, useState } from 'react';
import { getUTCDatetime } from '../helper/get-utc-datetime';

export default function useUtc(): string {
  const [utcState, setUtcState] = useState<string>(getUTCDatetime({ format: 'B' }));

  useEffect(() => {
    const timer = setInterval(() => setUtcState(getUTCDatetime({ format: 'B' })), 1000);
    return () => clearInterval(timer);
  }, []);

  return utcState;
}

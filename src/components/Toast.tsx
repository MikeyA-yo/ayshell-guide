import { useEffect, useState } from 'react';

export default function Toast({ message, duration = 3000 }:{message:string, duration?:number}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), duration);
      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  return (
    <div className={`fixed bottom-4 right-4 p-4 bg-green-500 text-white rounded-lg shadow-lg transition-opacity ${visible ? 'opacity-100' : 'opacity-0'}`}>
      {message}
    </div>
  );
}
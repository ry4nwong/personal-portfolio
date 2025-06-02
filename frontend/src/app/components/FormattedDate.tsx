'use client';

import { useEffect, useState } from 'react';

export default function FormattedDate({ start, end, className }: { start: string; end?: string, className?: string }) {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    const range = `${start} ${end ? `- ${end}` : ''}`;
    setDisplay(range);
  }, [start, end]);

  return <h2 className={className}>{display}</h2>;
}

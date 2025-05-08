'use client';

import { useEffect, useState } from 'react';

export default function FormattedDate({ start, end, className }: { start: string; end?: string, className?: string }) {
	const [display, setDisplay] = useState('');

	useEffect(() => {
		const format = (d: string) =>
			new Date(d).toLocaleDateString(undefined, {
				year: 'numeric',
				month: 'long',
			});

		const range = `${format(start)} – ${end ? format(end) : 'Present'}`;
		setDisplay(range);
	}, [start, end]);

	return <h2 className={className}>{display}</h2>;
}

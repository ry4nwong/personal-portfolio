import Image from 'next/image';
import { getStackDetails } from '../utils/getStackDetails';
import stackItems from '@/app/json/stackItems.json';

export default async function StackItemList({ stack }: { stack: string[] }) {
  const filteredStack = await getStackDetails(stack, stackItems);

  return (
    <ul className="flex flex-wrap gap-2 pb-2">
      {filteredStack.map((item, index) => (
        <li key={index}>
          <button
            type="button"
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--card-bg)] border border-[var(--border)] text-[var(--foreground)] text-sm font-bold"
          >
            {item.icon && (
              <Image
                src={item.icon}
                alt={item.name}
                width={20}
                height={20}
                className="w-5 h-5"
              />
            )}
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
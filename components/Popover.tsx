import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/popover.module.sass';

type Position = 'top' | 'right' | 'bottom' | 'left';

type PopoverContent = {
  html: string;
  x: number;
  y: number;
};

export default function Popover() {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState<PopoverContent | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setVisible(false);
      }
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  useEffect(() => {
    const handleEvent = (e: CustomEvent<PopoverContent>) => {
      setContent(e.detail);
      setVisible(true);
    };
    window.addEventListener('show-popover', handleEvent as EventListener);
    return () => window.removeEventListener('show-popover', handleEvent as EventListener);
  }, []);

  if (!visible || !content) return null;

  return (
    <div
      ref={ref}
      className={`${styles.popover} ${styles.visible}`}
      style={{
        transform: `translate3d(${content.x}px, ${content.y}px, 0)`,
      }}
      dangerouslySetInnerHTML={{ __html: content.html }}
    />
  );
}

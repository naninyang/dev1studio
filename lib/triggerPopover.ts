type Position = 'top' | 'right' | 'bottom' | 'left';

export function triggerPopover(target: HTMLElement, html: string, direction: Position = 'bottom') {
  const rect = target.getBoundingClientRect();
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  let x = 0;
  let y = 0;

  switch (direction) {
    case 'bottom':
      x = rect.left + scrollX - 240;
      y = rect.bottom + scrollY + 8;
      break;
    case 'right':
      x = rect.right + scrollX + 8;
      y = rect.top + scrollY;
      break;
    case 'top':
      x = rect.left + scrollX;
      y = rect.top + scrollY - 48;
      break;
    case 'left':
      x = rect.left + scrollX - 160;
      y = rect.top + scrollY;
      break;
  }

  const event = new CustomEvent('show-popover', {
    detail: { html, x, y },
  });
  window.dispatchEvent(event);
}

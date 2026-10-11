import { useLayoutEffect, useRef, type ReactNode } from "react";
import Icon from "./Icon";
import styles from "../cv.module.css";

export default function Dialog({ children, labelId, onClose, compact = false }: { children: ReactNode; labelId: string; onClose: () => void; compact?: boolean }) {
  const ref = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
    };
  }, []);

  return (
    <dialog ref={ref} className={`${styles.dialog} ${compact ? styles.commandDialog : ""}`} aria-labelledby={labelId} onCancel={(event) => { event.preventDefault(); onClose(); }} onClick={(event) => {
      if (event.target !== event.currentTarget) return;
      const rect = event.currentTarget.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose();
    }}>
      <button type="button" className={styles.dialogClose} onClick={onClose} aria-label="Cerrar ventana"><Icon name="close" size={18} /></button>
      {children}
    </dialog>
  );
}

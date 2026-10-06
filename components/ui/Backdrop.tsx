import { cn } from "@/lib/cn";

type BackdropProps = {
  label: string;
  visible: boolean;
  onClose: () => void;
  className?: string;
};

export default function Backdrop({ label, visible, onClose, className }: BackdropProps) {
  return (
    <button
      type="button"
      aria-label={label}
      tabIndex={visible ? 0 : -1}
      onClick={onClose}
      className={cn(
        "fixed inset-0 z-50 cursor-default bg-black/50 transition-opacity",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
        className,
      )}
    />
  );
}

import clsx from "clsx";

interface Props {
  onClick: (event?: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  children?: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  className,
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <button
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={clsx("cursor-pointer z-10", className)}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {children}
    </button>
  );
};

export default Button;

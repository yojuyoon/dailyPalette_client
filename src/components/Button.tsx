import clsx from "clsx";

type Props = Partial<{
  type: "button" | "submit" | "reset" | undefined;
  onClick: (event?: React.MouseEvent<HTMLElement>) => void;
  className: string;
  children: React.ReactNode;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onFocus: () => void;
  onBlur: () => void;
}>;

const Button: React.FC<Props> = ({
  type = "button",
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
      type={type}
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

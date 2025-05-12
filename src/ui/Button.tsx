import type { ReactNode } from "react";

interface ButtonProps {
  text?: string;
  type?: string;
  className?: string;
  onClick?: any;
  children?: ReactNode;
}

const BaseButton = ({ onClick, className, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={
        "cursor-pointer rounded-md px-8 py-2 bg-black hover:bg-black/85 text-white tracking-wide text-center transition-colors " +
        className
      }
    >
      {children}
    </button>
  );
};

const PrimaryButton = ({ onClick, className, children }: ButtonProps) => {
  return (
    <BaseButton
      onClick={onClick}
      className={"bg-blue-700 hover:bg-blue-700/95 " + className}
    >
      {children}
    </BaseButton>
  );
};

const SecondaryButton = ({ onClick, className, children }: ButtonProps) => {
  return (
    <BaseButton
      onClick={onClick}
      className={"bg-gray-600 text-white/85 hover:bg-gray-600/90 " + className}
    >
      {children}
    </BaseButton>
  );
};

const TertiaryButton = ({ onClick, className, children }: ButtonProps) => {
  return (
    <BaseButton
      onClick={onClick}
      className={
        "bg-gray-100 hover:bg-gray-50 text-[black!important] " + className
      }
    >
      {children}
    </BaseButton>
  );
};

const OutlineButton = ({ onClick, className, children }: ButtonProps) => {
  return (
    <BaseButton
      onClick={onClick}
      className={
        "bg-white hover:bg-gray-300 border border-gray-300 text-[black!important] " +
        className
      }
    >
      {children}
    </BaseButton>
  );
};

const Button = ({
  text = "Click here",
  type = "default",
  className,
  onClick = () => {
    console.log("Button clicked");
  },
  children,
}: ButtonProps) => {
  children = children ?? text;

  switch (type) {
    case "primary":
      return (
        <PrimaryButton onClick={onClick} className={className}>
          {children}
        </PrimaryButton>
      );

    case "secondary":
      return (
        <SecondaryButton onClick={onClick} className={className}>
          {children}
        </SecondaryButton>
      );

    case "tertiary":
      return (
        <TertiaryButton onClick={onClick} className={className}>
          {children}
        </TertiaryButton>
      );

    case "outline":
      return (
        <OutlineButton onClick={onClick} className={className}>
          {children}
        </OutlineButton>
      );

    default:
      return (
        <BaseButton onClick={onClick} className={className}>
          {children}
        </BaseButton>
      );
  }
};

export default Button;

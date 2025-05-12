import type { ReactNode } from "react";

export const Section = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export const Heading = ({ children }: { children: ReactNode }) => {
  return <h2 className="text-2xl font-black my-3 text-gray-100">{children}</h2>;
};

export const Heading2 = ({ children }: { children: ReactNode }) => {
  return <h3 className="text-xl font-black my-2 text-gray-200">{children}</h3>;
};

export const Content = ({
  className,
  children,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <p className={"text-gray-300 " + className}>{children}</p>;
};

export const ListItem = ({
  className,
  children,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-gray-300 w-1.5 h-1.5 rounded-full ml-1"></div>
      <p className={"text-gray-300 " + className}>{children}</p>
    </div>
  );
};

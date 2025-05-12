import type { ReactElement, ReactPortal } from "react";

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;
type ReactFragment = Iterable<ReactNodeLike>;

type ReactNodeLike =
  | ReactChild
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined;

export type { ReactNodeLike as ReactNode };

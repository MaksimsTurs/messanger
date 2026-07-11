import type { JSX } from "react";

export type InputDefaultProps<T = unknown> = {
  name: string
} & T & Exclude<JSX.IntrinsicElements["input"], "type" | "className">;

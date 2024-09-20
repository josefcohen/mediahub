"use client";

import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: string;
}

export default function Alert({ children }: Props) {
  return <div className="bg-error-900 p-4 rounded">{children}</div>;
}

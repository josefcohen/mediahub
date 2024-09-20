"use client";

import Alert from "@/app/_components/Alert";

interface Props {
  url: string;
  status: number;
  statusText: string;
}

export default function ErrorResponseAlert({ url, status, statusText }: Props) {
  return <Alert>{`${url} | ${status} ${statusText}`}</Alert>;
}

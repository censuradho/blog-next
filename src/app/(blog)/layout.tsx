import { PropsWithChildren } from "react";
import { Footer } from "../components";

export default function Layout ({ children }: PropsWithChildren<any>) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
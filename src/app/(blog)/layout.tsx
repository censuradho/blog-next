import { PropsWithChildren } from "react";
import { Footer, Header } from "../components";

export default function Layout ({ children }: PropsWithChildren<any>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
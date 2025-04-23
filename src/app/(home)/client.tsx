"use client"

import { trpc } from "@/trpc/client";
import { useEffect } from "react";

export const PageClient = () =>{
  const [data]=trpc.hello.useSuspenseQuery({text: "jasser"}); 
  useEffect(()=>{})
  return(
    <>
      Page client says:{data.greeting}
    </>
  )
}
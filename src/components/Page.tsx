import React, { ReactNode } from "react"

interface PageProps {
  children: ReactNode
}

const Page: React.FC<PageProps> = ({ children }) => {
  return <div className="prose">{children}</div>
}

export default Page

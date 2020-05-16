import React from "react"
import Hero from "components/Hero"
import Content from "components/Content"

interface AboutPageProps {
  title: string
}

const AboutPage: React.FC<AboutPageProps> = ({ title }) => {
  return (
    <div>
      <Hero title={title} />
      <Content>Hey there, this is just a filler page for Terror Apps at the moment.</Content>
    </div>
  )
}

export default AboutPage

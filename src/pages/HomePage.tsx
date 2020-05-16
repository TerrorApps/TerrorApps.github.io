import React from "react"
import Hero from "components/Hero"
import Carousel from "components/Carousel"

interface HomePageProps {
  title: string
  subTitle: string
  description: string
}

const HomePage: React.FC<HomePageProps> = ({ title, subTitle, description }) => {
  return (
    <div>
      <div className="aaron-fullscreen">
        <div className="row mx-0 aaron-fullscreen justify-content-center align-items-center">
          <Hero title={title} subTitle={subTitle} description={description} />
        </div>
      </div>
      <div className="row h-100 justify-content-center align-items-center">
        <Carousel />
      </div>
    </div>
  )
}

export default HomePage

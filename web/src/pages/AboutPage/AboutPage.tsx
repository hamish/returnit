import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <Metadata title="About" description="About page" />



        <p>About Us. We do stuff</p>
        <Link to={routes.home()}>Return home</Link>

    </>
  )
}

export default AboutPage

import { Link, routes } from '@redwoodjs/router'

type SiteLayoutProps = {
  children?: React.ReactNode
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return <>
    <header>
      <h1>Return It!</h1>
      <nav>
        <ul>
          <li><Link to={routes.about()}>About</Link></li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
  </>
}

export default SiteLayout

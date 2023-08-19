import * as React from "react"
import {Link} from 'gatsby'
import {useLocation} from '@reach/router'


const Navigator = () => {
  const location = useLocation()

  const links = [
    {
      name: 'Articles',
      link: '/'
    },
    {
      name: 'weekly',
      link: '/weekly/'
    }
  ]

  console.log(location.pathname)

  return (
    <>
      {links.map(link => {
        return (
          <Link className={`blog-links ${location.pathname === link.link ? 'blog-link-matched' : undefined}`}
                to={link.link}>
            {link.name}
          </Link>
        )
      })}
    </>
  )
}

export default Navigator

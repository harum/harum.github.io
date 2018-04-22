import Typography from 'typography'
import githubTheme from 'typography-theme-github'

githubTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h1': {
    marginTop: rhythm(0.5),
  }
})

const typography = new Typography(githubTheme)

export default typography;

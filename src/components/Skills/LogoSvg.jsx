import { Logo } from './Logo';

export const LogoSvg = ({ svg, name }) => {
  return (
    <>
      <Logo name={ name } >
        { svg }
      </Logo>
    </>
  )
}

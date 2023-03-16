import { Logo } from "./Logo";

export const LogoSvg = ({ svg, alt }) => {
  return (
    <>
      <Logo>
        <img src={ svg } alt={ alt } className="logo" />
      </Logo>
    </>
  )
}

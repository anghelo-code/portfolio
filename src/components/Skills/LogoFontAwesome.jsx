import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Logo } from "./Logo";

export const LogoFontAwesome = ({ classLogo }) => {
  return (
    <>
      <Logo>
        <FontAwesomeIcon icon={ classLogo } className="logo" />
      </Logo>
    
    </>
  )
}

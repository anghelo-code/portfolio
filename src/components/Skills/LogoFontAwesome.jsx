import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Logo } from './Logo';

export const LogoFontAwesome = ({ classLogo, name }) => {
  return (
    <>
      <Logo name={ name }>
        <FontAwesomeIcon icon={ classLogo } className="logo" />
      </Logo>
    
    </>
  )
}

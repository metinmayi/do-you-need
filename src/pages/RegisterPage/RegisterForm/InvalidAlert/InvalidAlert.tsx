import { StyledWrapper } from './styledWrapper';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type InvalidAlertProps = {
  type: 'name' | 'password' | 'repeat';
  id: 'uidnote' | 'pwdnote';
};
export const InvalidAlert: React.FC<InvalidAlertProps> = ({ type, id }) => {
  return (
    <>
      {type === 'name' ? (
        <StyledWrapper id={id}>
          <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon> 4 to 24
          characters. <br />
          Must begin with a letter. <br />
          Letters, numbers, underscores, hyphens allowed
        </StyledWrapper>
      ) : type === 'password' ? (
        <StyledWrapper id={id}>
          <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon> 8 to 24
          characters. <br />
          Must include uppercase and lowercase letters, a number and a special
          character. <br />
          Allowed special characters:
          <span aria-label="exclamation mark"> !</span>
          <span aria-label="at symbol">@</span>
          <span aria-label="hashtag">#</span>
          <span aria-label="dollar sign">$</span>
          <span aria-label="percent">%</span>
        </StyledWrapper>
      ) : (
        <StyledWrapper id={id}>
          <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon> Does not match
          the password
        </StyledWrapper>
      )}
    </>
  );
};

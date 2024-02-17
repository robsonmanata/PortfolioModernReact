import "./scrollToTop.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'

function ScrollToTopButton() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button className="scrollb" onClick={handleClick}>
      <FontAwesomeIcon icon={faAnglesUp} />
      
      
    </button>
  );
}

export default ScrollToTopButton;
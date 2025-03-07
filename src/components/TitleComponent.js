import './TitleComponent.css';
import logoImg from '../images/main-logo.png'

function TitleComponent() {
  return (
    <div className="title-component">
        <img 
          src={logoImg}
          className='main-logo'
          width={'195'}
          height={'150'}
          alt='RJL Home Improvements Logo'
        />
    </div>
  );
}

export default TitleComponent;

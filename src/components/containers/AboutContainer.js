import './AboutContainer.css';
import worksiteImg from '../../images/worksite.png';

function AboutContainer() {
  return (
    <section className="about-container side-margins">
      <p>
        Robert J Lutz Home Improvements has been a trusted contractor dedicated to providing top-quality home improvement services since 2006.
        Owned and operated by a lifelong Orange County resident, we pride ourselves on delivering high-quality craftsmanship and personalized service. We are
        fully licensed contractors proudly serving the communities of Orange, Rockland, Dutchess, and Westchester counties. Whether it's a small
        repair or a major renovation, we ensure that each job is completed with the utmost attention to detail and customer satisfaction. Let us help you
        transform your home with our expertise and commitment to customer satisfaction.
      </p>
      <img src={worksiteImg} alt='Our crew framing a roof on a new build' />
    </section>
  );
}

export default AboutContainer;
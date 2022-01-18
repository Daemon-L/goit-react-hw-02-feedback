import PropTypes from 'prop-types';
import { SectionTitle, Container } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Container>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Section;
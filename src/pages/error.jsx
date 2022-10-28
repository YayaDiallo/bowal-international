import React from 'react';
import styled from 'styled-components';
import img from '../images/page_not_found.svg';
import { Button } from '../components/ButtonElements';

function Error() {
  const primary = true;
  const dark = false;
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not-found' />
        <h3>Ohh! Page non trouvée</h3>
        <p>Nous n'arrivons pas à trouver la page que vous recherchez</p>
        <Button
          to='/'
          smooth='true'
          duration={500}
          exact='true'
          primary={primary ? 1 : 0}
          dark={dark ? 1 : 0}
        >
          Retour à l'accueil
        </Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  text-align: center;
  img {
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }
`;

export default Error;

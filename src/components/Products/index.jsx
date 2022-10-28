import React from 'react';
import Icon1 from '../../images/connected_world.svg';
import Icon2 from '../../images/factory.svg';
import Icon3 from '../../images/lightbulb.svg';
import {
  ProductsContainer,
  ProductsH1,
  ProductsH2,
  ProductsWrapper,
  ProductsCard,
  ProductsIcon,
  ProductsP,
} from './ProductsElements';

function Products() {
  return (
    <ProductsContainer id='products'>
      <ProductsH1>Nos Produits</ProductsH1>
      <ProductsWrapper>
        <ProductsCard>
          <ProductsIcon src={Icon1} />
          <ProductsH2>Reduce expensive</ProductsH2>
          <ProductsP>
            We help reduce your fess and increase your overall revenue.
          </ProductsP>
        </ProductsCard>
        <ProductsCard>
          <ProductsIcon src={Icon2} />
          <ProductsH2>Vitual Offices</ProductsH2>
          <ProductsP>
            You can access our platform online anywhere in the world.
          </ProductsP>
        </ProductsCard>
        <ProductsCard>
          <ProductsIcon src={Icon3} />
          <ProductsH2>Appareillage tertiaire</ProductsH2>
          <ProductsP>
            Unlock our special membership card that returns 5% cash back.
          </ProductsP>
        </ProductsCard>
      </ProductsWrapper>
    </ProductsContainer>
  );
}

export default Products;

import React from 'react';
import Icon1 from '../../images/factory.svg';
import Icon2 from '../../images/town.svg';
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
          <ProductsH2>Appareilage industriel</ProductsH2>
          <ProductsP>
            Contrôle industriel, automatisme, réseaux et informatique
            industrielle, instrumentation, atmosphère explosive.
          </ProductsP>
        </ProductsCard>
        <ProductsCard>
          <ProductsIcon src={Icon2} />
          <ProductsH2>Appareillage tertiaire</ProductsH2>
          <ProductsP>
            Prises, branchement de comptage, appareillage modulaire, boites
            d'encastrement et dérivations, appareillage terminal, divers
            tertiaire.
          </ProductsP>
        </ProductsCard>
        <ProductsCard>
          <ProductsIcon src={Icon3} />
          <ProductsH2>Luminaire</ProductsH2>
          <ProductsP>
            Eclairage intérieur, eclairage extérieur alimentations, sources,
            eclairage industriel. <br />
            <br />
          </ProductsP>
        </ProductsCard>
      </ProductsWrapper>
    </ProductsContainer>
  );
}

export default Products;

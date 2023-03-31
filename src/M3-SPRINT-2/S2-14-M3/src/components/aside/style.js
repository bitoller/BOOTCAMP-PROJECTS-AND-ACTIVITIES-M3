import styled from "styled-components";

export const StyledAside = styled.aside`
  height: auto;
  width: 22.813rem;

  .aside-title-container {
    width: 100%;
    height: 4.063rem;
    background-color: var(--color-primary-1);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: flex;
    align-items: center;
  }

  .aside-title-container > h1 {
    color: #ffffff;
    font-size: 1.125rem;
    font-weight: 700;
    padding-left: 1.25rem;
  }

  .aside-empty-cart-container {
    width: 100%;
    height: 9.875rem;
    background-color: var(--color-gray-4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.938rem;
  }

  .aside-empty-cart-container > h1 {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--color-gray-1);
  }

  .aside-empty-cart-container > p {
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--color-gray-2);
  }

  .aside-full-cart-container {
    width: 100%;
    height: 21.25rem;
    background-color: var(--color-gray-4);
  }

  .aside-full-cart-container > ul {
    height: 100%;
    overflow-y: auto;
  }

  .aside-full-cart-container > ul::-webkit-scrollbar {
    width: 0.688rem;
  }

  .aside-full-cart-container > ul::-webkit-scrollbar-thumb {
    background: var(--color-primary-1);
  }

  .aside-full-cart-container > ul::-webkit-scrollbar-track {
    background: var(--color-gray-3);
  }

  .aside-full-cart-container > ul > li {
    width: 20.875rem;
    height: 5rem;
    margin: 1.25rem 0.625rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .cart-product-img-info {
    display: flex;
    gap: 0.625rem;
  }

  .cart-product-img {
    width: 5rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-gray-3);
    border-radius: 5px;
  }

  .cart-product-img > img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }

  .cart-product-info {
    padding-top: 0.625rem;
    width: 10.625rem;
  }

  .cart-product-info p:nth-of-type(1) {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--color-gray-1);
    margin-bottom: 1.063rem;
  }

  .cart-product-info p:nth-of-type(2) {
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--color-gray-2);
  }

  .cart-product-remove-button {
    padding-top: 0.625rem;
    font-size: 0.75rem;
    font-weight: 500;
    color: #bdbdbd;
    cursor: pointer;
    background: none;
  }

  .cart-product-remove-button:hover {
    color: var(--color-gray-1);
    text-decoration: underline;
  }

  .total-value-container {
    width: 100%;
    height: 7.625rem;
    background-color: var(--color-gray-4);
    border-top: 2px solid var(--color-gray-3);
    display: flex;
    flex-direction: column;
    padding: 1.25rem 0.625rem;
    gap: 1.375rem;
  }

  .total-value-info-container {
    display: flex;
    justify-content: space-between;
  }

  .total-value-info-container p:nth-of-type(1) {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-gray-1);
  }

  .total-value-info-container p:nth-of-type(2) {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-gray-2);
  }

  .total-value-container > button {
    width: 100%;
    height: 3.75rem;
    background-color: var(--color-gray-3);
    border-radius: 8px;
    font-weight: 600;
    color: var(--color-gray-2);
    cursor: pointer;
  }

  .total-value-container > button:hover {
    background-color: var(--color-gray-2);
    color: var(--color-gray-3);
  }

  @media (max-width: 1023px) {
    width: 100%;

    .aside-full-cart-container {
      width: 100%;
    }

    .aside-full-cart-container > ul {
      width: 100%;
    }

    .aside-full-cart-container > ul > li {
      width: 90%;
    }

    .cart-product-info {
      width: auto;
    }
  }
`;

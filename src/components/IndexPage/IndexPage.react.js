import React from 'react';
import SEO from 'components/seo';
import {
  GatsbyIcon,
  StorybookIcon,
  TailwindIcon,
  GithubIcon,
  StyledComponentsIcon,
} from 'components/icons';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Wrapper = styled.div`
  ${tw`flex flex-col items-center justify-center h-screen`}
`;

const Main = tw.div`
  p-6 bg-gray-100 rounded-lg shadow-2xl
`;

const Heading = tw.h1`
  text-2xl text-gray-500 uppercase mt-5
`;

const Text = tw.p`
  text-xl text-gray-700 my-4
`;

const Logos = styled.div`
  ${tw`flex items-center justify-around`}
  svg,
  img {
    width: 64px;
  }
`;

const Footer = styled.footer`
  ${tw`flex justify-center`}
  svg {
    width: 30px;
    path {
      &:hover {
        fill: palevioletred;
      }
    }
  }
`;

const IndexPage = () => (
  <Wrapper>
    <SEO title="Tema Goods | Sneakers and Fashion Clothing" />
    <Main>
      <Logos>
        <GatsbyIcon />
        <TailwindIcon />
        <StyledComponentsIcon />
        <StorybookIcon />
      </Logos>
      <Heading>Hello, Dennis!</Heading>
      <Text>Welcome to the Gatsby Tailwind CSS + Styled-Components + Storybook Starter theme for TemaGoods.com.</Text>
      <Footer>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer">
          <GithubIcon />
        </a>
      </Footer>
    </Main>
  </Wrapper>
);

export default IndexPage;

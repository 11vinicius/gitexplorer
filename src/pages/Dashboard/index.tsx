import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/Logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/49975090?s=460&u=42993162ef57b132e2fc2cfde7a8d4503ea139fe&v=4"
            alt="Vinicius"
            srcSet=""
          />
          <div>
            <strong>Rocketseat</strong>
            <p>Easy peasy highly scalable Reactjs & React Native forms!</p>
          </div>
          <FiChevronRight />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/49975090?s=460&u=42993162ef57b132e2fc2cfde7a8d4503ea139fe&v=4"
            alt="Vinicius"
            srcSet=""
          />
          <div>
            <strong>Rocketseat</strong>
            <p>Easy peasy highly scalable Reactjs & React Native forms!</p>
          </div>
          <FiChevronRight />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/49975090?s=460&u=42993162ef57b132e2fc2cfde7a8d4503ea139fe&v=4"
            alt="Vinicius"
            srcSet=""
          />
          <div>
            <strong>Rocketseat</strong>
            <p>Easy peasy highly scalable Reactjs & React Native forms!</p>
          </div>
          <FiChevronRight />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

import React, { PureComponent } from 'react';
import styled from 'styled-components';

class Footer extends PureComponent {
  render() {
    return <Container className="footer">
    <a href="https://github.com/dzmitrynz" target="_blank" rel="noopener noreferrer">dzmitryNz</a>
    <a className='footer__school' href="https://rs.school/js/">
      <img src="https://rollingscopes.com/images/logo_rs2.svg" alt="rsschool" />
    </a>
    </Container>
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0;
  width: 425px;
  align-items: center;
  text-decoration: none;
  transition: all 0.5s;
  img{
    height: 70px;
    weight: 70px;
    transition: all 0.5s;
  }
  img:hover {
    transform: rotate(45deg);
  }

  a{
    color: chocolate;
    text-decoration: none;
    vertical-align: middle;
    margin: 0 10px;
    transition: all 0.3s;
  }
  a:hover {
  color: green;
  }

`
export default Footer

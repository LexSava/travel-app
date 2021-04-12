import styled from 'styled-components'

const Button = styled.button`
  background-color: green;
  border-radius: 10px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  outline: none;
  padding: 10px 10px;
  text-transform: capitalize;
  align-items: center;
  margin: 10px auto;
  transition: all 0.3s;
  .material-icons{
    vertical-align: middle;
  }
  :hover{
  background-color: brown;
  }
  :active{
  background-color: grey;
  }
`

export default Button

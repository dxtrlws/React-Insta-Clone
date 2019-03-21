import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  margin-bottom: 30px;
`;

const LogoContent = styled.div`
  display: flex;
  align-items: baseline;
  align-content: center;
  position: relative;
`;

const LogoImage = styled.img`
  width: 200px;
  position: absolute;
  left: 70px;
  top: -10px;
`;
const Search = styled.input`
  width: 200px;
  height: 20px;
  border: 1px solid lightgray;
  background-color: #fafafa;
  margin-left: 150px;
  text-align: center;
`;

export {Search, LogoImage, Header, LogoContent}
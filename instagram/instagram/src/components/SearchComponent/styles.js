import styled from 'styled-components'

const HeaderContent = styled.div`
display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: 1000px;

`

const Header = styled.div`
  background=color: #ffffff;
  
`;

const LogoContent = styled.div`
  display: flex;
  align-items: baseline;
  align-content: center;
  position: relative;
`;

const LogoImage = styled.img`
  width: 120px;
  position: absolute;
  left: 70px;
  top: 0;
`;
const Search = styled.input`
  width: 200px;
  height: 25px;
  border: 1px solid lightgray;
  background-color: #fafafa;
  margin-left: 150px;
  text-align: center;
  border-radius: 3px;
`;

export {Search, LogoImage, Header, LogoContent, HeaderContent}
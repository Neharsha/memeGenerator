// Style your components here
import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`

export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
  padding-right: 24px;
  padding-left: 24px;
`

export const Heading = styled.h1`
color:#35469c;
font-size:24px;
font-family:"Opens Sans";
font-weight:bold;
text-align:center
margin-bottom:20px;`

export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  height: 300px;
`

export const TextContent = styled.p`
  font-size: ${props => props.activeFontSizeId}px;
  font-family: 'Opens Sans';
  color: #fff;
`
export const MemeGeneratorForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CustomLabelElement = styled.label`
  color: #7e858e;
  font-family: 'Opens Sans';
  line-height: 1.4;
  margin-bottom: 0px;
  font-size: 12px;
`

export const CustomInput = styled.input`
  color: #5a7184;
  background-color: #fff;
  height: 40px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  outline: none;
`
export const SelectEle = styled.select`
  color: #1e293b;
  background-color: #fff;
  font-family: 'Opens Sans';
  height: 40px;
  border: 1px solid #d7dfe9;
  outline: none;
  margin-top: 10px;
`

export const CustomOption = styled.option`
  font-size: 16px;
  color: ;
  padding-right: 14px;
  padding-left: 14px;
  padding-top: 12px;
  padding-bottom: 12px;
`

export const Button = styled.button`
  color: #fff;
  font-family: 'Opens Sans';
  background-color: #0b69ff;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
`

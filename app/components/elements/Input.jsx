import styled from 'styled-components'

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  font-weight: 700;
  padding: 13px 16px;
  border: 1px solid var(--primary-button);
  border-radius: 8px;
  color: white;

  &::placeholder {
    color: var(--light-text);
    font-size: 16px;
  }
`

export default Input

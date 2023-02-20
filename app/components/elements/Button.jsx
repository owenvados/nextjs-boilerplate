import styled from 'styled-components'

export const button = styled.button`
  background: var(--primary-button);
  cursor: pointer;
  color: white;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;

  padding: 8px 51px;
  border: none;
  border-radius: 16px;
  transition: 0.3s;

  &:hover {
    filter: brightness(1.2);
  }
`

export default button

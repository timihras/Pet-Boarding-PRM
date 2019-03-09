import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  padding: ${props => props.theme.sizeXM} ${props => props.theme.sizeM};
  outline: none;
  width: 100%;

  &::placeholder {
    color: ${props => props.theme.disabledTextColor};
    font-family: ${props => props.theme.generalFont};
    font-size: ${props => props.theme.fontSizeGeneral};
  }
`;

export const TextArea = styled.textarea`
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  font-family: ${props => props.theme.generalFont};
  padding: ${props => props.theme.sizeXM} ${props => props.theme.sizeM};
  outline: none;
  width: 100%;

  &::placeholder {
    color: ${props => props.theme.disabledTextColor};
    font-family: ${props => props.theme.generalFont};
    font-size: ${props => props.theme.fontSizeGeneral};
  }
`;

export const Form = styled.form`
  > input {
    margin-bottom: ${props => props.theme.sizeXS};
  }
  > div {
    margin-bottom: ${props => props.theme.sizeXS};
  }

  .slider {
    touch-action: manipulation;
  }
`;

export const InputFloat = styled.div`
  position: relative;

  > input {
    display: block;
    margin: 0;
    padding: ${props => props.theme.sizeM} ${props => props.theme.sizeS};
    width: 100%;
    font-size: ${props => props.theme.fontSizeGeneral};
    line-height: 1.8;
    border: none;
    border-radius: 0.4rem;
    transition: box-shadow 0.3s;
    box-shadow: 0.2rem 0.8rem 1.6rem ${props => props.theme.lightBgColor};

    &::placeholder {
      color: ${props => props.theme.disabledTextColor};
    }

    &:focus {
      outline: none;
      box-shadow: ${props => props.theme.boxShadow};
    }
  }

  > span {
    display: block;
    position: absolute;
    bottom: 50%;
    left: 1rem;
    color: ${props => props.theme.disabledTextColor};
    line-height: 1.8;
    opacity: 0;
    transform: translate3d(0, 50%, 0) scale(1);
    transform-origin: 0 0;
    transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      visibility 0ms 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      z-index 0ms 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  > input:placeholder-shown + span {
    visibility: hidden;
    z-index: -1;
  }

  > input:not(:placeholder-shown) + span,
  input:focus:not(:placeholder-shown) + span {
    visibility: visible;
    z-index: 1;
    opacity: 1;
    transform: translate3d(0, calc((50%) - (0.8rem * 0.3) - (1rem * 1.8)), 0)
      scale(0.8);
    transition: transform 0.3s, visibility 0ms, z-index 0ms;
  }
`;

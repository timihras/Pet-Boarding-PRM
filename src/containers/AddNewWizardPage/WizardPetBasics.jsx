import React, { useContext } from 'react';
import styled from 'styled-components';

import { WizardCtx, initialPetType } from './index';

import { Heading1, Heading4 } from '../../components/styles/headings';
import { Input } from '../../components/styles/form';
import { Flex } from '../../components/styles/page';

import DogIllustration from '../../components/icons/dog-illustration';
import CatIllustration from '../../components/icons/cat-illustration';
import RodentIllustration from '../../components/icons/rabbit-illustration';
import FishIllustration from '../../components/icons/fish-illustration';

const WizardPetBasics = ({ state }) => {
  const dispatch = useContext(WizardCtx);
  return (
    <div>
      <Heading1>Name</Heading1>
      <Input
        placeholder="Type the name of your pet"
        value={state.petName}
        onChange={e =>
          dispatch({ type: 'edit', payload: { petName: e.target.value } })
        }
      />
      <Heading1>Type</Heading1>
      <Flex>
        <WizardTypeRadioButton
          type="dog"
          icon={<DogIllustration />}
          checked={state.petType.dog}
          all={state.petType.all}
        />
        <WizardTypeRadioButton
          type="cat"
          icon={<CatIllustration />}
          checked={state.petType.cat}
          all={state.petType.all}
        />
        <WizardTypeRadioButton
          type="rodent"
          icon={<RodentIllustration />}
          checked={state.petType.rodent}
          all={state.petType.all}
        />
        <WizardTypeRadioButton
          type="other"
          icon={<FishIllustration />}
          checked={state.petType.other}
          all={state.petType.all}
        />
      </Flex>
    </div>
  );
};

const LabelButton = styled.label`
  height: 16rem;
  flex: 1 0 40%;
  margin-top: ${props => props.theme.sizeS};
  margin-bottom: ${props => props.theme.sizeS};

  div {
    justify-content: space-between;
    background: white;
    border: 0;
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: ${props => props.theme.boxShadow};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: ${props => props.theme.sizeM};
    text-align: center;
    width: 100%;
    min-width: 150px;
  }

  &:nth-child(even) {
    margin-left: ${props => props.theme.sizeS};
  }

  &:nth-child(odd) {
    margin-right: ${props => props.theme.sizeS};
  }

  &:checked ~ div {
    border: 5px solid green;
  }

  svg {
    margin: auto;
  }

  h4 {
    margin-top: ${props => props.theme.sizeS};
  }

  input[type='radio'] {
    position: fixed;
    opacity: 0;
  }

  .checked-button {
    box-shadow: inset 0px 0px 0px 2px ${props => props.theme.accentPrimaryColor};
    box-sizing: border-box;
  }

  .unchecked-button {
    opacity: 0.5;
  }
`;

const WizardTypeRadioButton = ({ icon, type, checked, all }) => {
  const dispatch = useContext(WizardCtx);
  let className = null;
  if (!all) {
    className = checked ? 'checked-button' : 'unchecked-button';
  }

  return (
    <LabelButton htmlFor={`pet-type-${type}`}>
      <div className={className}>
        <input
          type="radio"
          id={`pet-type-${type}`}
          name="pet-type"
          value={type}
          checked={checked}
          onChange={() =>
            dispatch({
              type: 'edit',
              payload: { petType: { ...initialPetType, [type]: !!type } }
            })
          }
        />
        {icon}
        <Heading4>{type[0].toUpperCase() + type.substring(1)}</Heading4>
      </div>
    </LabelButton>
  );
};

export default WizardPetBasics;

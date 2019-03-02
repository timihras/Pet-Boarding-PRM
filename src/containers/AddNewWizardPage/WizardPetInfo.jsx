import React, { useContext } from 'react';
// import Slider, { createSliderWithTooltip } from 'rc-slider';
import styled from 'styled-components';
// import 'rc-slider/assets/index.css';

import { WizardCtx } from './index';

import { Heading1, Heading4 } from '../../components/styles/headings';
import { Flex, Grid } from '../../components/styles/page';
import { Input } from '../../components/styles/form';

import DogIllustration from '../../components/icons/dog-illustration-bw';
import MaleIcon from '../../components/icons/male-icon';
import FemaleIcon from '../../components/icons/female-icon';

// function percentFormatter(v) {
//   return `${v} kg`;
// }

const GridBreed = styled(Grid)`
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: ${props => props.theme.sizeL};
  margin: ${props => props.theme.sizeL} ${props => props.theme.sizeXS} 0;
  div {
    align-self: center;
  }
  span:first-child {
    svg {
      padding: 5px;
    }
  }
`;

const GridDob = styled(Grid)`
  grid-template-columns: 2fr 3fr 2fr;
  grid-gap: ${props => props.theme.sizeM};
`;

// const SliderWithTooltip = createSliderWithTooltip(Slider);

const WizardPetInfo = ({ state }) => {
  const dispatch = useContext(WizardCtx);
  return (
    <div>
      <Heading1>Breed / Size</Heading1>
      <Input
        placeholder="Type the breed of your pet"
        value={state.petBreed}
        onChange={e =>
          dispatch({ type: 'edit', payload: { petBreed: e.target.value } })
        }
      />
      <GridBreed>
        <span style={{ opacity: 1 - state.petSize / 100 + 0.2 }}>
          <DogIllustration />
        </span>
        {/* <div>
          <SliderWithTooltip
            tipFormatter={percentFormatter}
            onChange={value =>
              dispatch({ type: 'edit', payload: { petSize: value } })
            }
            defaultValue={state.petSize}
            min={1}
          />
        </div> */}
        <span style={{ opacity: state.petSize / 100 + 0.2 }}>
          <DogIllustration />
        </span>
      </GridBreed>
      <Heading1>Gender</Heading1>
      <Flex>
        <WizardSmallRadioButton
          type="petGender"
          value="male"
          icon={<MaleIcon />}
          checked={state.petGender === 'male'}
          all={state.petGender === 'all'}
        />
        <WizardSmallRadioButton
          type="petGender"
          value="female"
          icon={<FemaleIcon />}
          checked={state.petGender === 'female'}
          all={state.petGender === 'all'}
        />
      </Flex>
      <Heading1>Date of birth / Age</Heading1>
      <GridDob>
        <Input
          placeholder="Day"
          value={state.petDOB.day}
          onChange={e =>
            dispatch({
              type: 'edit',
              payload: { petDOB: { ...state.petDOB, day: e.target.value } }
            })
          }
        />
        <Input
          placeholder="Month"
          value={state.petDOB.month}
          onChange={e =>
            dispatch({
              type: 'edit',
              payload: { petDOB: { ...state.petDOB, month: e.target.value } }
            })
          }
        />
        <Input
          placeholder="Year"
          value={state.petDOB.year}
          onChange={e =>
            dispatch({
              type: 'edit',
              payload: { petDOB: { ...state.petDOB, year: e.target.value } }
            })
          }
        />
      </GridDob>
    </div>
  );
};

const LabelButton = styled.label`
  height: 8rem;
  flex: 1 0 40%;
  margin-top: ${props => props.theme.sizeS};
  /* margin-bottom: ${props => props.theme.sizeS}; */

  div {
    align-items: center;
    background: white;
    border: 0;
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: ${props => props.theme.boxShadow};
    cursor: pointer;
    display: flex;
    height: 100%;
    justify-content: space-around;
    padding: ${props => props.theme.sizeM};
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

  h4 {
    margin-right: ${props => props.theme.sizeS};
  }

  input[type='radio'] {
    position: fixed;
    opacity: 0;
  }

  .checked-button {
    box-shadow: inset 0px 0px 0px 2px ${props =>
      props.theme.accentPrimaryColor};
    box-sizing: border-box;
  }

  .unchecked-button {
    opacity: 0.5;
  }
`;

export const WizardSmallRadioButton = ({ value, icon, type, checked, all }) => {
  const dispatch = useContext(WizardCtx);
  let className = null;
  if (!all) {
    className = checked ? 'checked-button' : 'unchecked-button';
  }

  return (
    <LabelButton htmlFor={`petGender-${value}`}>
      <div className={className}>
        <input
          type="radio"
          id={`${type}-${value}`}
          name={type}
          value={value}
          checked={checked}
          onChange={() =>
            dispatch({
              type: 'edit',
              payload: { [type]: value }
            })
          }
        />
        {icon}
        <Heading4>{value[0].toUpperCase() + value.substring(1)}</Heading4>
      </div>
    </LabelButton>
  );
};

export default WizardPetInfo;

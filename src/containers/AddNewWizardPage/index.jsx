import React, { useState, useReducer } from 'react';
import styled from 'styled-components';

import WizardPetBasics from './WizardPetBasics';
import WizardPetInfo from './WizardPetInfo';
import WizardPetOptional from './WizardPetOptional';
import WizardPetOwner from './WizardPetOwner';
import WizardPetSummary from './WizardPetSummary';

import {
  PrimaryButton,
  SecondaryButton
} from '../../components/styles/buttons';
import { Heading1 } from '../../components/styles/headings';
import { Input } from '../../components/styles/form';
import { Flex } from '../../components/styles/page';

const ButtonWrapper = styled(Flex)`
  width: calc(100vw - 30px);
  justify-content: space-around;
  margin: ${props => props.theme.sizeXL} 0;
`;

export const WizardCtx = React.createContext();

export const initialPetType = {
  all: false,
  dog: false,
  cat: false,
  rodent: false,
  other: false
};

const initialState = {
  petName: '',
  petType: {
    ...initialPetType,
    all: true
  },
  petBreed: '',
  petSize: 10,
  petGender: 'all',
  petDOB: {
    day: '',
    month: '',
    year: ''
  },
  petNeutered: 'all',
  petAggresive: 'all',
  petNotes: '',
  owner: {
    idSpecified: false,
    id: null,
    firstName: '',
    lastName: '',
    address: '',
    postCode: '',
    city: '',
    phoneNumber: '',
    email: ''
  }
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'edit':
      return { ...state, ...action.payload };

    case 'submit':
      console.log(state);
      return { ...state, ...initialState };

    default:
      return state;
  }
};

const AddNewWizardPage = () => {
  const [page, setPage] = useState(1);
  const [state, dispatch] = useReducer(appReducer, initialState);

  const valid = () => {
    if (page === 1) return state.petName && !state.petType.all;
    if (page === 2)
      return (
        state.petBreed &&
        state.petGender !== 'all' &&
        (state.petDOB.year || state.petDOB.month || state.petDOB.day)
      );
    if (page === 3) return true;
    if (page === 4)
      return (
        (state.owner.firstName || state.owner.firstName) &&
        (state.owner.phoneNumber || state.owner.email)
      );

    return false;
  };

  return (
    <WizardCtx.Provider value={dispatch}>
      {page === 1 && <WizardPetBasics state={state} />}
      {page === 2 && <WizardPetInfo state={state} />}
      {page === 3 && <WizardPetOptional state={state} />}
      {page === 4 && <WizardPetOwner state={state} />}
      {page === 5 && <WizardPetSummary state={state} />}
      {page === 6 && <WizardPetExistingOwner />}
      {page === 7 && <WizardPetEmergencyContact />}
      <ButtonWrapper>
        <SecondaryButton
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          ←prev
        </SecondaryButton>
        {page === 5 ? (
          <PrimaryButton onClick={() => dispatch({ type: 'submit' })}>
            Submit
          </PrimaryButton>
        ) : (
          <PrimaryButton disabled={!valid()} onClick={() => setPage(page + 1)}>
            next →
          </PrimaryButton>
        )}
      </ButtonWrapper>
    </WizardCtx.Provider>
  );
};

const WizardPetExistingOwner = () => (
  <div>
    <Heading1>Owner</Heading1>
    <Input placeholder="Search customers" />
  </div>
);

const WizardPetEmergencyContact = () => (
  <div>
    <Heading1>Owner</Heading1>
    <Input placeholder="Search customers" />
  </div>
);

export default AddNewWizardPage;

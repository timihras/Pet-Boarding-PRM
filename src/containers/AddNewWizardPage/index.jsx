import React, { useState } from 'react';
import styled from 'styled-components';

import {
  PrimaryButton,
  SecondaryButton
} from '../../components/styles/buttons';
import { Heading1, Heading4 } from '../../components/styles/headings';
import { Input } from '../../components/styles/form';
import { Flex } from '../../components/styles/page';

import DogIllustration from '../../components/icons/dog-illustration';
import CatIllustration from '../../components/icons/cat-illustration';
import RodentIllustration from '../../components/icons/rabbit-illustration';
import FishIllustration from '../../components/icons/fish-illustration';

const AddNewWizardPage = () => {
  const [page, setPage] = useState(1);

  return (
    <div>
      {page === 1 && <WizardPetBasics />}
      {page === 2 && <WizardPetInfo />}
      {page === 3 && <WizardPetOptional />}
      {page === 4 && <WizardPetOwner />}
      {page === 5 && <WizardPetSumary />}

      <SecondaryButton onClick={() => setPage(page - 1)} disabled={page === 1}>
        ←prev
      </SecondaryButton>
      {page === 5 ? (
        <PrimaryButton onClick={() => console.log('Submit')}>
          Submit
        </PrimaryButton>
      ) : (
        <PrimaryButton onClick={() => setPage(page + 1)}>next →</PrimaryButton>
      )}
    </div>
  );
};

const WizardPetBasics = () => (
  <div>
    <Heading1>Name</Heading1>
    <Input placeholder="Type the name of your pet" />
    <Heading1>Type</Heading1>
    <Flex>
      <WizardTypeRadioButton type="dog" icon={<DogIllustration />} />
      <WizardTypeRadioButton type="cat" icon={<CatIllustration />} />
      <WizardTypeRadioButton type="rodent" icon={<RodentIllustration />} />
      <WizardTypeRadioButton type="other" icon={<FishIllustration />} />
    </Flex>
  </div>
);

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
`;

const WizardTypeRadioButton = ({ icon, type }) => (
  <LabelButton htmlFor={`pet-type-${type}`}>
    <input type="radio" id={`pet-type-${type}`} name="pet-type" value={type} />
    <div>
      {icon}
      <Heading4>{type[0].toUpperCase() + type.substring(1)}</Heading4>
    </div>
  </LabelButton>
);

const WizardPetInfo = () => (
  <div>
    <Heading1>Breed / Size</Heading1>
    <Input placeholder="Type the breed of your pet" />
    <Heading1>Gender</Heading1>
    <Heading1>Date of birth / Age</Heading1>
  </div>
);

const WizardPetOptional = () => (
  <div>
    <Heading1>Neutered</Heading1>
    <Heading1>Aggressive</Heading1>
    <Heading1>Notes</Heading1>
  </div>
);

const WizardPetOwner = () => (
  <div>
    <Heading1>Owner</Heading1>
    <Input placeholder="First Name" />
    <Input placeholder="Last Name" />
    <Input placeholder="Address" />
    <Input placeholder="Type the name of your pet" />
    <Input placeholder="Phone Number" />
    <Input placeholder="Email" />
    <p>or connect to existing user →</p>
  </div>
);

const WizardPetSumary = () => (
  <div>
    <Heading1>Dog</Heading1>
    <Heading1>Owner</Heading1>
  </div>
);

export default AddNewWizardPage;

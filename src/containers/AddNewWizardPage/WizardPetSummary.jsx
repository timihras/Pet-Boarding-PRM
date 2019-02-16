import React from 'react';
import styled from 'styled-components';
import MaterialIcon from 'material-icons-react';
import moment from 'moment';

import { Flex, MoreLink, FakeLink, Card } from '../../components/styles/page';
import { Heading1, Heading4 } from '../../components/styles/headings';

const WizardPetSummary = ({ state }) => {
  const SummaryCard = styled(Card)`
    padding-top: ${props => props.theme.sizeM};

    .notes {
      margin-top: ${props => props.theme.sizeM};
    }
    .flex80 {
      flex: 1 0 80%;
    }
  `;

  const Details = styled.div`
    margin-top: ${props => props.theme.sizeM};
    font-size: ${props => props.theme.fontSizeXS};
    p {
      margin-top: 0;
    }
  `;

  const IconWrapper = styled.div`
    flex: 1 0 20%;
    padding-left: ${props => props.theme.sizeXS};
    padding-right: ${props => props.theme.sizeM};
  `;

  const generateLabel = type => {
    if (type.dog) return 'dog';
    if (type.cat) return 'cat';
    if (type.rodent) return 'rodent';
    return 'other';
  };

  const generateSize = size => {
    let sizeLabel = 'Small';
    if (size > 10) {
      sizeLabel = 'Medium';
    }
    if (size > 25) {
      sizeLabel = 'Large';
    }
    if (size > 50) {
      sizeLabel = 'Extra Large';
    }

    return `${sizeLabel} size. · ${size} kg`;
  };

  const generateDOB = dob => {
    const dobDate = {
      year: dob.year === '' ? '1900' : dob.year,
      month: dob.month === '' ? '01' : dob.month,
      day: dob.day === '' ? '01' : dob.day
    };
    return `${dobDate.year}-${dobDate.month}-${dobDate.day}`;
  };

  const generateAge = dob => {
    const dateOfBirth = moment(generateDOB(dob));
    const age = dateOfBirth.diff(moment(), 'years');

    return `Born on ${dateOfBirth.format('DD.MM.YYYY')}. App. ${Math.abs(
      age
    )} years old.`;
  };

  const { owner } = state;

  return (
    <div>
      <Heading1>Dog</Heading1>
      {state && (
        <SummaryCard>
          <Flex>
            <IconWrapper>
              <MaterialIcon icon="pets" color="rgba(125, 167, 219, 1)" />
            </IconWrapper>
            <div className="flex80">
              <Heading4>
                {state.petName} <span>, {generateLabel(state.petType)}</span>
              </Heading4>
              <Details>
                <p>{state.petBreed}</p>
                <p>{generateSize(state.petSize)}</p>
                <p>{generateAge(state.petDOB)}</p>
                <p>
                  {state.petGender === 'all'
                    ? 'No information about gender.'
                    : state.petGender}
                </p>
                <p>
                  {state.petNeutered === 'all'
                    ? 'No information if neutered.'
                    : state.petNeutered}
                </p>
                <p>
                  {state.petAggresive === 'all'
                    ? 'No information if aggresive.'
                    : state.petAggresive}
                </p>
                <p className="notes">
                  {state.petNotes ? state.petNotes : 'No notes for this pet.'}
                </p>
              </Details>
            </div>
          </Flex>
        </SummaryCard>
      )}
      <Heading1>Owner</Heading1>
      {owner && (
        <SummaryCard>
          <Flex>
            <IconWrapper>
              <MaterialIcon icon="person" color="rgba(221, 163, 66, 1)" />
            </IconWrapper>
            <div className="flex80">
              <Heading4>
                {owner.firstName} {owner.lastName} <span>, customer</span>
              </Heading4>
              <Details>
                <p>
                  <span>Address:</span> {owner.address}, {owner.postCode}{' '}
                  {owner.city}
                </p>
                <p>
                  <span>Tel. No.:</span> {owner.phoneNumber}
                </p>
                <p>
                  <span>Email:</span> {owner.email}
                </p>
              </Details>
            </div>
          </Flex>
        </SummaryCard>
      )}
      <MoreLink>
        <FakeLink>add emergency contact →</FakeLink>
      </MoreLink>
    </div>
  );
};

export default WizardPetSummary;

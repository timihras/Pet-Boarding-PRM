import React, { useContext } from 'react';

import { WizardCtx } from './index';

import { WizardSmallRadioButton } from './WizardPetInfo';
import { Heading1 } from '../../components/styles/headings';
import { Flex } from '../../components/styles/page';
import { TextArea } from '../../components/styles/form';

import YesIcon from '../../components/icons/yes-icon';
import NoIcon from '../../components/icons/no-icon';

const WizardPetOptional = ({ state }) => {
  const dispatch = useContext(WizardCtx);
  return (
    <div>
      <Heading1>Neutered</Heading1>
      <Flex>
        <WizardSmallRadioButton
          type="petNeutered"
          value="yes"
          icon={<YesIcon />}
          checked={state.petNeutered === 'yes'}
          all={state.petNeutered === 'all'}
        />
        <WizardSmallRadioButton
          type="petNeutered"
          value="no"
          icon={<NoIcon />}
          checked={state.petNeutered === 'no'}
          all={state.petNeutered === 'all'}
        />
      </Flex>
      <Heading1>Aggressive</Heading1>
      <Flex>
        <WizardSmallRadioButton
          type="petAggresive"
          value="yes"
          icon={<YesIcon />}
          checked={state.petAggresive === 'yes'}
          all={state.petAggresive === 'all'}
        />
        <WizardSmallRadioButton
          type="petAggresive"
          value="no"
          icon={<NoIcon />}
          checked={state.petAggresive === 'no'}
          all={state.petAggresive === 'all'}
        />
      </Flex>
      <Heading1>Notes</Heading1>
      <TextArea
        rows="5"
        placeholder="Write anything important, such as: pets likes, pets dislikes, pets triggers, ..."
        value={state.petNotes}
        onChange={e =>
          dispatch({ type: 'edit', payload: { petNotes: e.target.value } })
        }
      />
    </div>
  );
};

export default WizardPetOptional;

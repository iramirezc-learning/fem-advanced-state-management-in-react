import React from 'react';

import Title from './Title';
import {
  NumberOfPeopleInputContainer,
  ResetButtonContainer,
  ResultContainer,
  SlicesPerPersonInputContainer
} from '../containers'

const Application = () => (
  <div className="Application">
    <Title />
    <NumberOfPeopleInputContainer />
    <SlicesPerPersonInputContainer />
    <ResultContainer />
    <ResetButtonContainer />
  </div>
);

export default Application;

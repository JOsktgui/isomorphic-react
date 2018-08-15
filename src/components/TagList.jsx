import React from 'react';
import { map } from 'lodash';

export default ({ tags }) => (
  <div>
    { map(tags, tag => <code key={tag}>{ tag }</code>) }
  </div>
);
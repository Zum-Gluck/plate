import React from 'react';
import { RenderElementProps } from 'slate-react';
import styled from 'styled-components';
import { getElement } from '../utils';
import { HeadingType, RenderElementHeadingOptions } from './types';

const Heading = styled.div`
  font-weight: 600;
`;

const StyledH1 = styled(Heading)`
  margin-top: 32px;
  margin-bottom: 4px;
  font-size: 30px;
`;

const StyledH2 = styled(Heading)`
  margin-top: 16px;
  margin-bottom: 1px;
  font-size: 24px;
`;

const StyledH3 = styled(Heading)`
  margin-top: 8px;
  margin-bottom: 1px;
  font-size: 20px;
`;

export const renderElementHeading = ({
  levels = 6,
  H1 = StyledH1,
  H2 = StyledH2,
  H3 = StyledH3,
  H4 = getElement('h4'),
  H5 = getElement('h5'),
  H6 = getElement('h6'),
}: RenderElementHeadingOptions = {}) => (props: RenderElementProps) => {
  const {
    element: { type },
  } = props;

  if (levels >= 1 && type === HeadingType.H1) return <H1 {...props} />;
  if (levels >= 2 && type === HeadingType.H2) return <H2 {...props} />;
  if (levels >= 3 && type === HeadingType.H3) return <H3 {...props} />;
  if (levels >= 4 && type === HeadingType.H4) return <H4 {...props} />;
  if (levels >= 5 && type === HeadingType.H5) return <H5 {...props} />;
  if (levels >= 6 && type === HeadingType.H6) return <H6 {...props} />;
};

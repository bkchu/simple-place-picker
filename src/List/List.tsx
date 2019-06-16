import React from 'react';
import { connect } from 'react-redux';
import { Choice } from '../redux/choice/types';
import { RootState } from '../redux/choice/store';
import ListItem from './ListItem/ListItem';
import styled from '@emotion/styled';

interface ListProps {
  choices: Choice[];
}

class List extends React.Component<ListProps> {
  render() {
    const { choices } = this.props;

    const choicesDisplay = choices.map((choice, index) => <ListItem key={index} choice={choice} index={index} />);

    return <StyledDiv>{choicesDisplay}</StyledDiv>;
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    choices: state.choice.choices
  };
};

export default connect(mapStateToProps)(List);

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

import React from 'react';
import { connect } from 'react-redux';
import { Choice } from '../../redux/choice/types';
import { deleteChoice } from '../../redux/actions';
import styled from '@emotion/styled';

interface ListItemProps {
  choice: Choice;
  index: number;
  deleteChoice: any;
}

const ListItem: React.FC<ListItemProps> = (props: ListItemProps) => {
  const { choice, index } = props;

  return (
    <StyledDiv>
      <p className="list-item__name">{choice}</p>
      <button className="list-item__button" onClick={() => props.deleteChoice(index)} />
    </StyledDiv>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteChoice: (index: number) => dispatch(deleteChoice(index))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ListItem);

const StyledDiv = styled.div`
  min-width: 40rem;
  width: 100%;
  padding: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 2px 4px 0 rgba(14, 30, 37, 0.12);
  margin-bottom: 2rem;

  .list-item {
    &__name {
      font-size: 3rem;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      margin: 0;
    }

    &__button {
      width: 3rem;
      height: 1rem;
      font-size: 2rem;
      background: #ff4757;
      appearance: none;
      border: none;
      border-radius: 2px;
      box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.3), 0 2px 4px 0 rgba(14, 30, 37, 0.36);

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

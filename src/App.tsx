import styled from '@emotion/styled';
import React, { FormEvent, useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Button from './Button/Button';
import List from './List/List';
import { addChoice, goSomewhere, goBack } from './redux/actions';
import { RootState } from './redux/choice/store';

const App: React.FC = (props: any) => {
  const [choice, setChoice] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!!choice) {
      props.addChoice(choice);

      setChoice('');

      const input = e.currentTarget.querySelector('input');
      if (!!input) {
        input.focus();
      }
    }
  };

  const GoSomewhereButton =
    props.choices.length > 1 ? (
      <Button onClick={props.goSomewhere} cta>
        Go Somewhere!
      </Button>
    ) : null;

  const display = !!props.chosenPlace ? (
    <div className="app__result-container">
      <p>We are going to eat at</p>
      <p className="app__result">{props.chosenPlace}</p>
      <p>today!</p>
      <Button onClick={props.goBack} cta>Go Back</Button>
    </div>
  ) : (
    <>
      <form className="app__form" onSubmit={onSubmit}>
        <input className="app__form-input" placeholder="A potential choice" onChange={e => setChoice(e.target.value)} value={choice} type="text" name="" id="" />
        <Button>Add</Button>
      </form>
      {GoSomewhereButton}
      <div className="app__list-container">
        <List />
      </div>
    </>
  );

  return (
    <AppContainer>
      <header className="app__header">Let's Just Go Somewhere - Please.</header>
      {display}
    </AppContainer>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    choices: state.choice.choices,
    chosenPlace: state.choice.chosenPlace
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addChoice: (choice: string) => dispatch(addChoice(choice)),
    goSomewhere: () => dispatch(goSomewhere()),
    goBack: () => dispatch(goBack())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50%;
  margin: 0 auto;

  .app {
    &__header {
      margin: 15rem auto 10rem;
      font-size: 5rem;
      text-align: center;
    }

    &__form {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      min-width: 40rem;
      margin-bottom: 2rem;
    }

    &__form-input {
      font-size: 3rem;
      height: 10rem;
      width: 100%;
      padding: 0 4rem;
      border: 0;
      border-radius: 4px;
      box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 2px 4px 0 rgba(14, 30, 37, 0.12);

      &:focus {
        outline: none;
      }
    }

    &__list-container {
      width: 100%;
      margin: 0 auto;
    }

    &__result-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p {
        font-size: 2rem;

      }
    }

    &__result {
      font-size: 5rem !important;
    }
  }
`;

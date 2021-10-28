import styled from "styled-components";
import UICardList from "./UICardList";
import { UIButton } from "../form/UIButton";
import { connect } from "react-redux";
import { handleToggle, handlePingToZero } from "../../_redux/actions";
// import { useMemo } from "react";
// import { useAppContext } from "../../context/AppContext";

const UICard = (props) => {
  // const ctx = useAppContext();
  // const UIProps = useMemo(() => {
  //   return {
  //     toggle: ctx.toggle,
  //     handleToggle: ctx.handleToggle,
  //   };
  // }, [ctx.handleToggle, ctx.toggle]);

  return (
    <StyledCard>
      <StyledCardHeader>
        <h4>
          {props.title} <span>{props.ping}</span>
        </h4>
        <div>
          <UIButton
            onClick={props.handlePingToZero}
            color="primary"
            text="ping zero"
          />
          <UIButton
            color="secondary"
            text="Toggle"
            onClick={props.handleToggle}
          />
        </div>
      </StyledCardHeader>
      {props.toggle && (
        <StyledCardBody>
          {props.lists.map((list) => (
            <UICardList text={list.text} id={list.id} />
          ))}
        </StyledCardBody>
      )}
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 60%;
  height: auto;
  border: 1px solid var(--primary-color);
  padding: 1rem;
  border-radius: 8px;
`;

const StyledCardHeader = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  border: 1px solid var(--primary-color-light);
  background: var(--primary-color);
  border-radius: 4px;
  color: white;
  padding: 1.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

function mapStateToProps(state) {
  return { toggle: state.app.toggle, ping: state.app.ping };
}
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    handleToggle: () => dispatch(handleToggle("hello my friend")),
    handlePingZero: () => dispatch(handlePingToZero()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UICard);

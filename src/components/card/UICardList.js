import styled from "styled-components";
import { lighten } from "polished";
import { Form } from "react-bootstrap";
import { UIButton } from "../form/UIButton";

const UICardList = (props) => {
  return (
    <StyledCardList key={props.id}>
      <Form.Group className="input_div" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" />
      </Form.Group>
      <span>{props.text}</span>
      <div className="button_div">
        <UIButton color="danger" text="Delete" />
      </div>
    </StyledCardList>
  );
};

const StyledCardList = styled.div`
  width: 100%;
  height: 8rem;
  border: 1px solid #334756;
  padding: 0.5rem 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #334756;
  margin: 8px auto;
  :hover {
    background: ${lighten(0.7, "#334756")};
  }
  span {
    align-self: center;
  }

  & .input_div {
    align-self: center;
    input {
      height: 1.5rem;
      width: 1.5rem;
    }
  }

  & .button_div {
    align-self: center;
  }
`;

export default UICardList;

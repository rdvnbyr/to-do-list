import { useEffect } from "react";
import styled from "styled-components";
import UICardList from "./UICardList";
import { UIButton } from "../form/UIButton";
import { useDispatch, useSelector } from "react-redux";
import {
  handleToggle,
  handlePingToZero,
  fetchProducts,
} from "../../_redux/actions";

const UICard = (props) => {
  const dispatch = useDispatch();
  const { toggle, ping, _toggle, _ping, products, fetchLoading, error } =
    useSelector((state) => ({
      toggle: state.app.toggle,
      ping: state.app.ping,
      _toggle: state.other.toggle,
      _ping: state.other.ping,
      products: state.app.products,
      fetchLoading: state.app.fetchLoading,
      error: state.app.error,
    }));

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, ping]);

  return (
    <StyledCard>
      <StyledCardHeader>
        <h4>
          {props.title} <span>ping: {ping}</span> <span>_ping: {_ping}</span>
        </h4>
        <div>
          <UIButton
            onClick={() => dispatch(handlePingToZero())}
            color="primary"
            text="ping zero"
          />
          <UIButton
            color="secondary"
            text="Toggle"
            onClick={() => dispatch(handleToggle())}
          />
        </div>
      </StyledCardHeader>
      <StyledCardBody>
        {!fetchLoading &&
          products.length > 0 &&
          products.map((list) => <UICardList text={list.title} id={list.id} />)}
      </StyledCardBody>
    </StyledCard>
  );
};

export default UICard;

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

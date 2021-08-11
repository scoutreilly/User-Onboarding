import StyledDiv from "./StyledForm";
import StyledLabel from "./StyledLabel";
import StyledButton from "./StyledButton";
import styled from "styled-components";

const StyledHeader = styled.h1`
  color: #0a0f2c;
`;

const StyledP = styled.p`
  color: #0a0f2c;
  font-style: italic;
`;
function Form(props) {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    props.submit();
  };
  const onChange = (e) => {
    const { checked, name, type, value } = e.target;
    if (type === "checkbox") {
      props.change(name, checked);
    } else {
      props.change(name, value);
    }
    console.log("this is changing");
  };

  return (
    <StyledDiv>
      <form onSubmit={onSubmit}>
        <StyledHeader>Add a new user!</StyledHeader>
        <StyledLabel>
          Name ~
          <input
            type="text"
            value={props.values.username}
            name="username"
            onChange={onChange}
          />
          <StyledP>{props.errors.username}</StyledP>
        </StyledLabel>
        <StyledLabel>
          Email ~
          <input
            type="email"
            value={props.values.email}
            name="email"
            onChange={onChange}
          />
          <StyledP>{props.errors.email}</StyledP>
        </StyledLabel>
        <StyledLabel>
          Password ~
          <input
            type="text"
            value={props.values.password}
            name="password"
            onChange={onChange}
          />
          <StyledP>{props.errors.password}</StyledP>
        </StyledLabel>
        <StyledP>
          Terms of service state you must like cats in order to proceed.
        </StyledP>
        <StyledLabel>
          Terms of Service ~
          <input
            type="checkbox"
            checked={props.values.terms}
            name="terms"
            onChange={onChange}
          />
          <StyledP>{props.errors.terms}</StyledP>
        </StyledLabel>
        <StyledButton disabled={props.disabled}>Submit</StyledButton>
      </form>
    </StyledDiv>
  );
}

export default Form;

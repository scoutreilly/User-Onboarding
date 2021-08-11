import StyledDiv from "./StyledForm";
import StyledLabel from "./StyledLabel";
import StyledButton from "./StyledButton";

function Form() {
  return (
    <StyledDiv>
      <form>
        <StyledLabel>
          Name ~
          <input type="text" />
        </StyledLabel>
        <StyledLabel>
          Email ~
          <input type="email" />
        </StyledLabel>
        <StyledLabel>
          Password ~
          <input type="text" />
        </StyledLabel>
        <StyledLabel>
          Terms of Service ~
          <input type="checkbox" />
        </StyledLabel>
        <StyledButton>Submit</StyledButton>
      </form>
    </StyledDiv>
  );
}

export default Form;

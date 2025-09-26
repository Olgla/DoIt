import styled from 'styled-components';
import { forwardRef } from 'react';

const StyledLabel = styled.label`
  padding: 0.5rem;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
`;

const TextInputWithLabel = forwardRef(function TextInputWithLabel(
  { elementId, labelText, onChange, value },
  ref
) {
  return (
    <>
      <StyledLabel htmlFor={elementId}>{labelText}</StyledLabel>
      <StyledInput
        type="text"
        id={elementId}
        ref={ref}
        onChange={onChange}
        value={value}
      />
    </>
  );
});

export default TextInputWithLabel;

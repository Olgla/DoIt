import { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 1rem 0;
`;

const StyledLabel = styled.label`
  padding: 0.5rem;
`;

const StyledSelect = styled.select`
  padding: 0.5rem;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
`;

const StyledButton = styled.button`
  padding: 0.5rem;
`;

function TodosViewForm({
  sortField,
  setSortField,
  sortDirection,
  setSortDirection,
  queryString,
  setQueryString,
}) {
  const [localQueryString, setLocalQueryString] = useState(queryString);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setQueryString(localQueryString);
    }, 500);

    return () => clearTimeout(debounce);
  }, [localQueryString, setQueryString]);

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <StyledLabel>
        Sort by:
        <StyledSelect
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="createdTime">Time added</option>
        </StyledSelect>
      </StyledLabel>

      <StyledLabel>
        Direction:
        <StyledSelect
          value={sortDirection}
          onChange={(e) => setSortDirection(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </StyledSelect>
      </StyledLabel>

      <StyledLabel>
        Search todos:
        <StyledInput
          type="text"
          value={localQueryString}
          onChange={(e) => setLocalQueryString(e.target.value)}
        />
        <StyledButton
          type="button"
          onClick={() => setLocalQueryString('')}
          disabled={!localQueryString}
        >
          Clear
        </StyledButton>
      </StyledLabel>
    </StyledForm>
  );
}
export default TodosViewForm;

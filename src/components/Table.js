import styled from 'styled-components'

// table table-striped table-bordered
export const Table = styled.table`
  background-color: #ddd;
  color: #333;
  width: 100%;
  border-collapse: collapse;

  thead {
    background-color: #333;
    color: #ddd;
  }

  td {
    padding: 0.2rem;
  }
`

// Title, TitleName, TitleAdd
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`

export const TitleName = styled.h2`
  color: darkblue;
`

export const TitleAdd = styled.button`
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 50%;
  background-color: green;
  color: white;
  font-size: 1.5rem;
`

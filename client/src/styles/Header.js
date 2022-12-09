import styled from '@emotion/styled'

const Wrapper = styled.section`
  padding: 0.4% 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;

  @media screen and (max-width: 480px) {
    padding: 0.4% 2%;
  }

  .search {
    width: 60%;
    /* height: 52px; */
  }
`

export default Wrapper

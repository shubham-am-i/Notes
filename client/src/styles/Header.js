import styled from '@emotion/styled'

const Wrapper = styled.section`
  padding: 0.7% 8%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;

  .search {
    width: 50%;
    height: 42px;
    padding: 3px 8px;
    margin-left: 5%;
    font-size: 16px;
    border-radius: 6px;
    border-style: none;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
  .logo {
    width: 40px;
    margin-right: 5px;
  }
  .date {
    margin-left: 20%;
  }

  @media screen and (max-width: 480px) {
    padding: 1% 3%;
    .main-heading {
      font-size: 16px;
    }
    .search {
      margin-left: auto;
    }
    span {
      display: none;
    }
  }
`

export default Wrapper

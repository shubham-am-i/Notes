import styled from '@emotion/styled'

const Wrapper = styled.section`
  .theme-selector {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  .theme-buttons div {
    display: inline-block;
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-left: 15px;
    border-radius: 50%;
  }

  .mode-toggle {
    margin-right: auto;
  }

  .mode-toggle img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`

export default Wrapper

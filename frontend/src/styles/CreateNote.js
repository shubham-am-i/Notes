import styled from '@emotion/styled'

const Wrapper = styled.section`
  margin-top: 20px;
  .form {
    position: relative;
    width: 40%;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    /* todo - background color */
  }
  Input {
    margin-bottom: 10px;
  }
  .pin-box {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .button-container {
    display: flex;
    flex-direction: row-reverse;
  }
`

export default Wrapper

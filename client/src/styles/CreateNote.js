import styled from '@emotion/styled'

const Wrapper = styled.section`
  .form {
    position: relative;
    width: 42%;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    /* todo - background color */
  }
  .form-modal {
    width: 100%;
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
    align-items: center;
  }
  .delete-icon {
    margin-right: 15px;
  }
`

export default Wrapper

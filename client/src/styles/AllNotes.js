import styled from '@emotion/styled'

const Wrapper = styled.section`
  margin-top: 50px;
  .notes-container {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 1.2em;
    column-gap: 1.2em;
  }
  .paper {
    padding: 15px;
    width: 280px;
    overflow: hidden;
    border-radius: 6px;
  }
  .modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal {
    background: #fff;
    width: 80vw;
    transform: translateY(-10%);
    max-width: 500px;
    border-radius: 8px;
    text-align: center;
  }
`

export default Wrapper

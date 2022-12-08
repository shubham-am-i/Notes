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
    transition: 1s linear;
  }

  .modal {
    background: #fff;
    width: 80vw;
    max-width: 400px;
    border-radius: 3px;
    padding: 2rem 1rem;
    text-align: center;
  }
`

export default Wrapper

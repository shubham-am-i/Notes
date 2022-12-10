import styled from '@emotion/styled'

const Wrapper = styled.section`
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 0 50px;
  .heading-title {
    margin-left: 13px;
    margin-bottom: 8px;
  }
  .notes-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 1.5em;
    column-gap: 1.5em;
  }
  .paper {
    position: relative;
    padding: 15px !important;
    min-width: 250px;
    max-width: 310px;
    height: fit-content;
    max-height: 260px;
    overflow: hidden;
    border-radius: 7px;
    box-shadow: none;
    border: 1px solid lightgrey;
  }
  .title {
    word-wrap: break-word;
    overflow-wrap: break-word;
    overflow: hidden;
    margin-bottom: 8px;
  }
  .body {
    word-wrap: break-word;
    overflow-wrap: break-word;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    color: #808080;
  }
  .pin-box {
    position: absolute;
    right: 10px;
    top: 10px;
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
    margin-top: -250px;
    max-width: 500px;
    max-height: 300px;
    overflow-y: scroll;
    border-radius: 8px;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    padding: 0;
    .notes-container {
      grid-template-columns: 1fr 1fr;
    }
    .paper {
      min-width: 150px;
      max-width: 310px;
      height: fit-content;
      max-height: 260px;
      overflow: hidden;
      border-radius: 7px;
      box-shadow: none;
      border: 1px solid lightgrey;
    }
  }
`

export default Wrapper

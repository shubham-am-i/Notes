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
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        /* todo - background color */
    }
    .form-modal {
        width: 100%;
        height: 100%;
    }
    .date {
        color: #6495ed;
        text-align: start;
        margin-bottom: 8px;
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

    /* dark mode */
    .form.dark {
        background: #545456;
    }

    .form.dark .pin-box,
    .form.dark .input,
    .form.dark .input,
    .form.dark .button {
        color: #fff;
    }

    .paper.dark .pin-box,
    .paper.dark .title,
    .paper.dark .body {
    }

    @media screen and (max-width: 480px) {
        .form {
            width: 100%;
        }
    }
`

export default Wrapper

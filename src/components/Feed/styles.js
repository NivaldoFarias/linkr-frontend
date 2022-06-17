import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    gap: 18px;
    padding: 16px 18px;
    width: 100%;
    background-color: #ffffff;
    border-radius: 16px;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
`;

export const PostForm = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: 5px;
    gap: 5px;

    h3 {
        margin-bottom: 8px;
        font-family: Lato;
        font-weight: 300;
        font-size: 20px;
    }

    input {
        display: flex;
        background-color: #EFEFEF;
        border-radius: 5px;
        border: none;
        padding: 8px 12px;
    }

    input:nth-child(3) {
        padding-bottom: 40px;
    }
    
    button {
        margin: 0 0 0 auto;
        padding: 8px 33px;
        border: none;
        border-radius: 5px;
        color: white;
        font-size: 14px;
        font-weight: 700;
        background-color: #1877F2;
    }
`;

import React from 'react'
import styled from 'styled-components'
import { GlobalWrapper } from '../GlobalWrapper';
import thumb from "../img/photo-base.png";
import clickDel from "../img/delete.svg"

const PostFeed = ({id, name, text}) => {
  return (
    <div>
        <GlobalWrapper>
        <li key={id}>
            <PostDiv>
            <button
                className="btn-del"
            >
                <img src={clickDel} alt="delete button"></img>
            </button>
            <img src={thumb} alt="text" className="img_post"/>
            <div className="core_post">
                <div className="p_post">
                    <p>{text}</p>
                </div>
                <div>
                    
                    <h6 className="h_post">Enviado por</h6>
                    <p>{name}</p>
                </div>
            </div>
            </PostDiv>
        </li>
        </GlobalWrapper>
    </div>
  )
}

const PostDiv = styled.div`
    display:flex;
    position:relative;
    width: 516px;
    height: auto;
    margin: 8px auto 16px;
    padding: 12px 12px 32px 24px;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;   

    .btn-del{
        position:absolute;
        top:12px;
        right:12px;
        background:transparent;
        border:none;
        cursor:pointer;
    }

    .img_post{
        max-width: 88px;
        height: 88px;
        margin: 40px 32px 16px 0;
        object-fit: contain;
        border-radius: 36px;
    }

    .core_post{
        margin-top: 40px;

        .p_post{
            padding-right: 8%;
            margin-bottom: 18px;
        }
    }
`;

export default PostFeed
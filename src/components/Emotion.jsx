/** @jsxRuntime classic */
/** @jsx jsx */ // これだけでエラーが出る場合は上文を追加する

import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  // inline 名は文字列で囲む。　,で区切る
  const tytleStyle = css({
    margin: 0,
    color: "#db84a8"
  });

  return (
    <div css={containerStyle}>
      <p css={tytleStyle}> -Emotion- </p>
      <SButton>FIGHT</SButton>
    </div>
  );
};

const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;

  &:hover {
    background-color: #abedd8;
    color: #fff;
    cursor: pointer;
  }
`;

export const InlineStyle = () => {
  // CSS 値は文字列記述　　接続詞は大文字
  const containnerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    margin: 0,
    color: "#3b84a8"
  };
  const buttonStyle = {
    backgroundColor: " #abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };
  return (
    <div style={containnerStyle}>
      <p style={titleStyle}>-InlineStyle-</p>
      <button style={buttonStyle}>FIGHT</button>
    </div>
  );
};

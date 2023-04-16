import React, { memo } from "react";

const Title = () => {
  console.log("title re-render");

  return (
    <div>
      <h1>useCallback dan React Memo</h1>
    </div>
  );
};

export default memo(Title);

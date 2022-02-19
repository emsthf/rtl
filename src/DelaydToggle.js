import React, { useCallback, useState } from "react";

function DelaydToggle() {
  const [toggle, setToggle] = useState(false);
  const onToggle = useCallback(() => {
    setTimeout(() => {
      setToggle((toggle) => !toggle);
    }, 1000);
  }, []);

  return (
    <div>
      <button onClick={onToggle}>토글</button>
      <div>
        상태 : <span>{toggle ? "ON" : "OFF"}</span>
      </div>
      {toggle && <div>haha</div>}
    </div>
  );
}

export default DelaydToggle;

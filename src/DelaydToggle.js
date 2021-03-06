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
      <button onClick={onToggle}>ν κΈ</button>
      <div>
        μν : <span>{toggle ? "ON" : "OFF"}</span>
      </div>
      {toggle && <div>haha</div>}
    </div>
  );
}

export default DelaydToggle;

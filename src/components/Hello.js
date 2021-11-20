// import { useState } from "react";

import { useState,useEffect } from "react";

export function Hello({ contract}) {

    const [text,setText] = useState([]);


    useEffect(() => {
        // TODO: don't just fetch once; subscribe!
        contract.say_hi({"arg_name":""}).then(text => {
            setText(text)});
      }, []);

      console.log(text);

  return (
    <>
      <p>
        {text} 
      </p>
    </>
  );
}

export default Hello;
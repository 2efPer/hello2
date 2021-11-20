// import { useState } from "react";

export function Hello({ contract}) {
//   const [checked, setChecked] = useState(done);

    // const text =contract.say_hi({"arg_name":""},300000000000000);

    // console.log('fuck ', text);

    const x = () => {
        contract.say_hi(
            {"arg_name":""}
        );
    }

    // console.log('fuck ', x);
//   const complete = ({ target }) => {
//     setChecked(target.checked);
//     contract.update({ id, updates: { task, done: target.checked } });
//   };

//   const del = () => {
//     // on clicking the delete button invoke the del method on
//     // the smart contract
//     contract.del({ id });
//   };

  return (
    <>
      <p>
        {x} 
      </p>
    </>
  );
}

export default Hello;
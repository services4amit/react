import React, { useRef } from "react";
import Recaptcha from "react-google-invisible-recaptcha";

const RecaptchaPOC = () => {
  const recaptcha = useRef();
  
  function handleSubmit() {
    recaptcha.current.execute();
  }

  const onResolved = () => {
    const data = {
      reCaptchaToken: recaptcha.current.getResponse(),
    };
    recaptcha.current.reset();
    console.log("data", data);
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <br />
        <button onClick={handleSubmit} variant="contained" color="primary">
          Submit
        </button>
      </div>

      <Recaptcha
        ref={recaptcha}
        sitekey="6Ld-obYUAAAAAFmMtcFwnZHxpm5DvqmAk_gpc4zv"
        render="explicit"
        onResolved={onResolved}
      />
    </div>
  );
};

export default RecaptchaPOC;

import React from "react";

const Form = (props) => {
  return (
    <div>
      <form className="flex flex-col mx-auto justify-around text-sm">
        <div>
          <label>Link Url</label>
          <input
            className="shadow-sm border-gray-500"
            type="text"
            name="linkUrl"
          />
        </div>

        <div>
          <label>Vanity Url (optional)</label>
          <input
            className="shadow-sm border-gray-500"
            type="text"
            name="vanityUrl"
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};
export default Form;

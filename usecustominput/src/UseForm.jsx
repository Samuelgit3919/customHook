
import UseInput from "./UseInput";

function UseForm() {
  const [firstName, bindFirstName, resetFirstName] =  UseInput("")
  const [lastName, bindLastName, resetLastName] =  UseInput("")

  function submitHandler(e) {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName()
    resetLastName()
  }
  return (
    <div className="center">
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="">FirstName</label>
          <input
            type="text"
            {...bindFirstName}
          />
        </div>
        <div>
          <label htmlFor="">LastName</label>
          <input
            type="text"
            {...bindLastName}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UseForm;

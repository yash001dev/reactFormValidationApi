const LoginForm = (props) => {
  return (
    <form {...getFormProps()}>
      <label>
        Username
        <br />
        <input {...getFieldProps("username")} />
        {errors.username && <div className="error">{errors.username}</div>}
      </label>
      <label>
        Password
        <br />
        <input {...getFieldProps("password")} />
        {errors.password && <div className="error">{errors.password}</div>}
      </label>
      <button type="submit">Submit my form</button>
    </form>
  );
};

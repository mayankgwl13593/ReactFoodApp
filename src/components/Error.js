import { useRouteError } from "react-router";

const ErrorComponent = () => {
  const error = useRouteError();
  return (
    <div>
      <h2>
        {error.status}: {error.statusText}
      </h2>
    </div>
  );
};

export default ErrorComponent;

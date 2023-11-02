const disableNavbar = ["/auth/login", "/auth/register", "/404"];

const AppShell = (props) => {
  const { children } = props;
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default AppShell;

import React from "react";
import { ButtonLink } from "../../components";

export const TaskItem = ({ id, title }: Task) => {
  const handleClick = React.useCallback(() => console.log(id), [id]);

  return (
    <ButtonLink variant="link" size="lg" active={id === 2} onClick={handleClick}>
      {title}
    </ButtonLink>
  );
};

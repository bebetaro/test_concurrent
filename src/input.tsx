import React from "react";

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.VFC<Props> = React.memo(function Input(props) {
  return <input value={props.value} onChange={props.onChange} />;
});

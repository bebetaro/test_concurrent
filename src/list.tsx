/// <reference types="react/experimental" />
import React from "react";
import { UtilsType } from "./utils";

type Props = {
  list: UtilsType;
};

export const ListComponent: React.VFC<Props> = React.memo(
  function ListComponent(props) {
    return (
      <div>
        {props.list.read().map((item, key) => {
          return (
            <div key={key}>
              <p>name: {item.name}</p>
              <p>age: {item.age}</p>
            </div>
          );
        })}
      </div>
    );
  }
);

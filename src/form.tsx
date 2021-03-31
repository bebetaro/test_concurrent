/// <reference types="react/experimental" />
import React, {
  Suspense,
  unstable_useTransition,
  useCallback,
  useState,
} from "react";
import { Input } from "./input";
import { ListComponent } from "./list";
import { sampleList } from "./constants";
import { listFilter, UtilsType } from "./utils";

export const FormComponent: React.VFC = () => {
  const [word, setWord] = useState<string>("");
  const [list, setList] = useState<UtilsType>({ read: () => sampleList });
  const [startTransition, isPending] = unstable_useTransition();

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
    startTransition(() => {
      setList(listFilter(event.target.value));
    });
  }, []);

  return (
    <div>
      <Input value={word} onChange={onChange} />
      {isPending && <span>Loading...</span>}
      <Suspense fallback={<p>Loading...</p>}>
        <ListComponent list={list} />
      </Suspense>
    </div>
  );
};

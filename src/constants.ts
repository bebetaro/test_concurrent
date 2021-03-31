import {
  uniqueNamesGenerator,
  Config,
  names,
  starWars,
} from "unique-names-generator";

const config: Config = {
  dictionaries: [names, starWars],
  separator: " ",
  length: 2,
};

export const sampleList = Array(10_000)
  .fill(null)
  .map(() => {
    return {
      name: uniqueNamesGenerator(config),
      age: Math.floor(Math.random() * 80),
    };
  });

export type ListType = typeof sampleList;

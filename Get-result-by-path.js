function getResultByPath(path, obj) {
  return path.split(".").reduce((current, part) => {
    if (current === undefined) return undefined;
    const match = part.match(/(\w+)|(?:\[(\d+)\]?)/);
    console.log(match);
    if (!match) return undefined;
    const key = match[1];
    const index = match[2];
    const value = current[key];
    return index !== undefined ? value?.[index] : value;
  }, obj);
}
const path = "data.results.status";
const obj = {
  data: {
    results:
      // [
      {
        status: "completed",
        error: "",
      },
    //   {
    //     status: [{ type: "done" }, { type: "start" }],
    //     error: "",
    //   },
    // ],
  },
};
console.log(getResultByPath(path, obj));

import Master from "../models/Master";

interface IMasterGlobals {
  masterProcess: NodeJS.Process;
  masterCluster: Master
}

export {IMasterGlobals}

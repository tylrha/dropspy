import { totalmem, freemem } from "os";
import nodeos from "node-os-utils";
const { cpu } = nodeos

export default async function getOsUsageData() {

  const totalRAM = totalmem();
  const freeRAM = freemem();
  const usedRAM = Number(totalRAM - freeRAM)
  const usedCpu = Number(await cpu.usage()).toFixed(2)
  const freeCpu = (100 - Number(usedCpu)).toFixed(2)

  const formatNumber = (nb) => {
    const memoryInMb = Number(nb / (1024 * 1024))
    if (memoryInMb > 1000) {
      return Number(memoryInMb / 1024).toFixed(2) + " GB"
    } else {
      return memoryInMb.toFixed(2) + " MB"
    }
  }

  const osObj = {
    usedCpu: usedCpu.replace(".", ","),
    freeCpu: freeCpu.replace(".", ","),
    usedRAM: formatNumber(usedRAM),
    freeRAM: formatNumber(freeRAM),
    totalRAM: formatNumber(totalRAM)
  }

  return osObj
}

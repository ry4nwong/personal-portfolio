export async function getStackDetails(stackIds: string[], allStacks: any[]) {
  const stackMap = Object.fromEntries(allStacks.map(s => [s.name, s]));
  return stackIds.map(id => stackMap[id]).filter(Boolean);
}
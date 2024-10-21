export function getMonthsBetweenDates(date1: string, date2: string): number {
  let d1 = new Date(date1);
  let d2 = new Date(date2);

  if (d1 > d2) {
    [d1, d2] = [d2, d1];
  }

  return (
    (d2.getFullYear() - d1.getFullYear()) * 12 + (d2.getMonth() - d1.getMonth())
  );
}

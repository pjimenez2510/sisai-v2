export function addMonths(date: string, months: number): Date {
    const dateOriginal = new Date(date);
    dateOriginal.setMonth(dateOriginal.getMonth() + months);
    return dateOriginal;
}
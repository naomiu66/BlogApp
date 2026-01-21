export function formatDateTime(dateTimeString?: string | null): string | null {
    if (!dateTimeString) return null;

    const date = new Date(dateTimeString);

    return date.toLocaleString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
}
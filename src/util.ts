export const getDateDiff = (today: Date, post_date: Date) => {
    const diff = Math.abs(today.getTime() - post_date.getTime());
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));

    if (diffDays > 1) {
        return diffDays + " days ago"
    }
    const diffHours = Math.ceil(diff / (1000 * 3600));

    if (diffHours > 1) {
        return diffHours + " hours ago"
    }

    const diffMinutes = Math.ceil(diff / (1000 * 60));

    if (diffMinutes > 1) {
        return diffMinutes + " minutes ago"
    }

    const diffSeconds = Math.ceil(diff / (1000))
    return diffSeconds + " seconds ago";

}
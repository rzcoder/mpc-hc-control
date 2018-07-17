import * as _ from "lodash";

export function millisecondsToDuration(ms: number): string {
    if (ms <= 0) {
        return "00:00:00";
    }

    let duration = Math.floor(ms / 1000);
    const hours = Math.floor(duration / 3600);
    duration = duration % 3600;

    const minutes = Math.floor(duration / 60);
    duration =  duration % 60;

    return _.padStart(hours.toString(), 2, "0") + ":" + _.padStart(minutes.toString(), 2, "0") + ":" + _.padStart(duration.toString(), 2, "0");
}
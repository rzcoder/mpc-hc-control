import * as _ from "lodash";
import {IPlayerVariables} from "./commands/commands";

export function variableParser(variablePageHtml: string): IPlayerVariables {
    const reg = /\<p id="(\w+)"\>(.*)\<\/p\>/ig;
    const fields = {};

    let result;
    while((result = reg.exec(variablePageHtml)) !== null) {
        fields[result[1]] = result[2];
    }

    return {
        version: fields["version"],
        file: fields["file"],
        filepath: fields["filepath"],
        filedir: fields["filedir"],
        size: fields["size"],
        state: parseInt(fields["state"]),
        statestring: fields["statestring"],
        position: parseFloat(fields["position"]),
        positionstring: fields["positionstring"],
        duration: parseFloat(fields["duration"]),
        durationstring: fields["durationstring"],
        volumelevel: parseFloat(fields["volumelevel"]),
        muted: fields["muted"] !== "0"
    }
}
import * as _ from "lodash";
import axios from "axios";
const querystring = require("querystring");
import {MpcCommands, MpcCommandsList} from "./commands/mpcCommands";
import {Dictionary} from "./types";
import {IPlayerVariables, AbstactPlayerController} from "./commands/commands";
import {variableParser} from "./variableParser";

export class MpcControl extends AbstactPlayerController {
    private host: string;
    private port: number;

    constructor(host: string, port: number) {
        super();
        this.host = host;
        this.port = port;
    }

    get apiHost(): string {
        return "http://" + this.host + ":" + this.port;
    }

    /**
     * @commandId - any supported command from commands/mpcCommands.ts
     * @data - additional data provided in to api call
     */
    execute(commandId: MpcCommands, data?: Dictionary<any>): Promise<any> {
        const url = this.apiHost + "/command.html";
        return axios.get(url, {
            params: _.merge({
                wm_command: MpcCommandsList[commandId].value
            }, data)
        });
    }

    /**
     * @filePath - path to video file
     */
    openFile(filePath: string): Promise<any> {
        const url = this.apiHost + "/browser.html?path=" + filePath;

        return axios.get(url);
    }

    getVariables(): Promise<IPlayerVariables> {
        const url = this.apiHost + "/variables.html";
        return axios.get(url).then((res) => {
            return variableParser(res.data);
        });
    }
}
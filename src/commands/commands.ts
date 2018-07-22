import {MpcCommands, MpcCommandsList} from "./mpcCommands";
import {Dictionary} from "../types";
import {millisecondsToDuration} from "../utils/timeConvert";

export interface IPlayerVariables {
    version: string;

    file: string;
    filepath: string;
    filedir: string;
    size: string;

    state: number;
    statestring: string;

    position: number;
    positionstring: string;
    duration: number;
    durationstring: string;

    volumelevel: number;
    muted: boolean;
}

export interface IPositionInfo {
    duration: number;
    position: number;
}

export abstract class AbstractPlayerController {
    abstract execute(commandId: MpcCommands, data?: Dictionary<any>): Promise<any>;
    abstract getVariables(): Promise<IPlayerVariables>;

    async isPlaying(): Promise<boolean> {
        const variables = await this.getVariables();
        return variables.state === 2;
    }

    async isPaused(): Promise<boolean> {
        const variables = await this.getVariables();
        return variables.state === 1;
    }

    async isStopped(): Promise<boolean> {
        const variables = await this.getVariables();
        return variables.state === 0;
    }

    async isMuted(): Promise<boolean> {
        const variables = await this.getVariables();
        return variables.muted;
    }

    async getVolume(): Promise<number> {
        const variables = await this.getVariables();
        return variables.volumelevel;
    }

    async getPosition(): Promise<IPositionInfo> {
        const variables = await this.getVariables();
        return {
            duration: variables.duration,
            position: variables.position
        }
    }

    play(): Promise<void> {
        return this.execute("PLAY");
    }

    pause(): Promise<void>{
        return this.execute("PAUSE");
    }

    togglePlay(): Promise<void>{
        return this.execute("PLAY_PAUSE");
    }

    stop(): Promise<boolean>{
        return this.execute("STOP");
    }

    toggleFullscreen(): Promise<void>{
        return this.execute("FULLSCREEN");
    }

    /**
     * @position - new position in ms
     */
    seek(position: number): Promise<void>{
        return this.execute("SEEK", {
            position: millisecondsToDuration(position)
        });
    }

    /**
     * @delta - delta from current position in ms
     */
    async jump(delta: number): Promise<void>{
        const variables = await this.getVariables();
        return this.execute("SEEK", {
            position: millisecondsToDuration(variables.position + delta)
        });
    }

    skipBack(): Promise<void>{
        return this.execute("PREVIOUS");
    }

    skipForward(): Promise<void>{
        return this.execute("NEXT");
    }

    /**
     * @volume - new volume in percents
     */
    setVolume(volume: number): Promise<void>{
        return this.execute("SET_VOLUME", {
            volume: volume
        });
    }

    toggleMute(): Promise<void> {
        return this.execute("VOLUME_MUTE");
    }

    nextAudioTrack(): Promise<void> {
        return this.execute("NEXT_AUDIO");
    }

    prevAudioTrack(): Promise<void> {
        return this.execute("PREV_AUDIO");
    }

    nextSubtitles(): Promise<void> {
        return this.execute("NEXT_SUBTITLE");
    }

    prevSubtitles(): Promise<void> {
        return this.execute("PREV_SUBTITLE");
    }
}
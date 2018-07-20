# MPC-HC Control

Basic control over [Media Player Classic - Home Cinema](https://mpc-hc.org/) via http api.

## Setup
Enable web interface in mpc-hc settings.
 
`npm i mpc-hc-control`

## Usage
 
```ts
const {MpcControl} = require("mpc-hc-control");
 
const mpcApi = new MpcControl("localhost", 13579);
mpcApi.openFile("c:\\video.mkv"));
mpcApi.setVolume(75);
```

## Methods list

Basic methods list:
```ts
/**
 * @filePath - path to video file
 */
openFile(filePath: string): Promise<any>;
```

```ts
isPlaying(): Promise<boolean>
```

```ts
isPaused(): Promise<boolean>
```

```ts
isStopped(): Promise<boolean>
```

```ts
isMuted(): Promise<boolean>
```

```ts
getVolume(): Promise<number>
```

```ts
getPosition(): Promise<IPositionInfo>

interface IPositionInfo {
    duration: number;
    position: number;
}
```

```ts
play(): Promise<void>
```

```ts
pause(): Promise<void>
```

```ts
togglePlay(): Promise<void>
```

```ts
stop(): Promise<boolean>
```

```ts
toggleFullscreen(): Promise<void>
```

```ts
/**
 * @position - new position in ms
 */
seek(position: number): Promise<void>
```

```ts
/**
 * @delta - delta from current position in ms
 */
async jump(delta: number): Promise<void>
```

```ts
skipBack(): Promise<void>
```

```ts
skipForward(): Promise<void>
```

```ts
/**
 * @volume - new volume in percents
 */
setVolume(volume: number): Promise<void>
```

```ts
toggleMute(): Promise<void>
```

```ts
getVariables(): Promise<IPlayerVariables>

interface IPlayerVariables {
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
```

Also you can use:

```ts
/**
 * @commandId - any mpc-hc supported command from commands/mpcCommands.ts
 * @data - additional data provided in to api call
 */
execute(commandId: MpcCommands, data?: Dictionary<any>): Promise<any>
```  
 
 


 


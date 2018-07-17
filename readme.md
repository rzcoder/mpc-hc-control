#MPC-HC Control

Basic control over [Media Player Classic - Home Cinema](https://mpc-hc.org/) via http api.

## Setup
Enable web interface in mpc-hc settings.
 
`npm i mpc-hc-control`

## Usage
 
```
const {MpcControl} = require("../lib/index");
 
const mpcApi = new MpcControl("localhost", 13579);
mpcApi.openFile("c:\\video.mkv"));
mpcApi.setVolume(75);
```

## Methods list

Basic methods list:
```
/**
 * @filePath - path to video file
 */
openFile(filePath: string): Promise<any>;
```

```
isPlaying(): Promise<boolean>
```

```
isPaused(): Promise<boolean>
```

```
isStopped(): Promise<boolean>
```

```
isMuted(): Promise<boolean>
```

```
getVolume(): Promise<number>
```

```
getPosition(): Promise<IPositionInfo>
```

```
play(): Promise<void>
```

```
pause(): Promise<void>
```

```
togglePlay(): Promise<void>
```

```
stop(): Promise<boolean>
```

```
toggleFullscreen(): Promise<void>
```

```
/**
 * @position - new position in ms
 */
seek(position: number): Promise<void>
```

```
/**
 * @delta - delta from current position in ms
 */
async jump(delta: number): Promise<void>
```

```
skipBack(): Promise<void>
```

```
skipForward(): Promise<void>
```

```
/**
 * @volume - new volume in percents
 */
setVolume(volume: number): Promise<void>
```

```
toggleMute(): Promise<void>
```

Also you can use:

```
/**
 * @commandId - any mpc-hc supported command from commands/mpcCommands.ts
 * @data - additional data provided in to api call
 */
execute(commandId: MpcCommands, data?: Dictionary<any>): Promise<any>
```  
 
 


 


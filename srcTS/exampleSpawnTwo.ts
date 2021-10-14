/**
 * Using spawn in typescript nodejs
 */

import * as child_process from 'node:child_process'
import * as fs from 'fs-extra'
import { homedir, totalmem } from 'node:os'
import * as minimist from 'minimist'

const myHomedir: string = homedir()
const myMemory: number = totalmem()

const myHomedirContents: string[] = fs.readdirSync(myHomedir)


const fs = require('fs')
const sh = require('shelljs')
sh.pwd()
sh.config
sh.config.verbose = true;
sh.cat('package.json')
const yallist = require('yallist')
let myList = yallist.create([1, 2, 3])
myList
myList.toArray()
myList.get(1)
let moduleList = sh.ls('node_modules')
moduleList
const immutable = require('immutable')
const { List, Set, Map, Seq, Collection, isList, isMap } = require('immutable')
let myIList = List([1, 2, 3])
myIList.get(1)
Collection.Set([1, 2, 3])
const { spawn, spawnSync } = require('child_process')
let nodeExecutable = process.execPath
nodeExecutable
const { execSync } = require('child_process')
let output = execSync(
`"${process.execPath}" -e "console.error('subprocess stdio output')"`
)
console.log(output.toString())
let o = {}
o.spawn = ['-e', `console.log('subprocess stdio output')`]
let nodeE = nodeExecutable
let result;
result = spawnSync(
nodeE, o.spawn
)
result = spawnSync(
nodeE, o.spawn
).stdout.toString()
let results = {}
results.description = "testing pwsh thru node"
results.one = spawnSync('pwsh.exe', ['-nop', '-c', `"Get-ChildItem"`])
results.one.stdout.toString()
results.one = spawnSync('pwsh.exe', ['-nop', '-c', "Get-ChildItem"]).stdout.toString()
results.result = "It works!"
spawnSync('npm.exe', ['search', 'npm'])
sh.which('npm')
let notes;
notes = {
'description': "This notes object will be the de facto location of notes taken while inside the repl."}
let oneDrive = process.env.OneDrive
oneDrive = path.parse(oneDrive)
let nodeModules = fs.readdirSync('./node_modules')
function pwshExec(...args) {
let output = spawnSync('pwsh.exe', [...args])
return output.stdout.toString()
}
pwshExec('ls')
pwshExec(['ls'])
pwshExec(['-c', 'ls'])
notes.pwshExec = "Its not working"
let sp = spawn(
process.execPath,
[`-e`, `console.log('subprocess stdio output')`]
)
console.log('pid is: ', sp.pid)
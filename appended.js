function getJSFiles (glb="*.js") {
if (glb) {
return Array.from(fGlob.sync(glb));
} else {
throw new Error("Need argument to this function")
}
/** 
 * Get files from a glob
 * By default, gets *.js files
 */
}
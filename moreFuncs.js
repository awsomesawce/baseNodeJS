function ls (dir) {
if (!dir) {
console.log(fs.readdirSync("."));
} else {
return fs.readdirSync(dir);
}
}
import * as FileAPI from "fs";
import PathAPI from "path";

const Index = FileAPI.readFileSync("release/dist/template/index.html", {encoding: "utf8"});
const NewIndex = Index.replace(/.\/monacoeditorwork/g, '"monacoeditorwork');
FileAPI.writeFileSync("release/dist/template/index.html", NewIndex);

const icons = FileAPI.readdirSync("tools/icons", {withFileTypes: true});
FileAPI.mkdirSync("release/dist/icons", {recursive: true});
for (let item of icons) {
    let srcPath = PathAPI.join("tools/icons", item.name);
    let destPath = PathAPI.join("release/dist/icons", item.name);
    FileAPI.copyFileSync(srcPath, destPath);
}

FileAPI.mkdirSync("release/dist/network", {recursive: true});
const nets = FileAPI.readdirSync("tools/net", {withFileTypes: true});
for (let item of nets) {
    let srcPath = PathAPI.join("tools/net", item.name);
    let destPath = PathAPI.join("release/dist/network", item.name);
    FileAPI.copyFileSync(srcPath, destPath);
}
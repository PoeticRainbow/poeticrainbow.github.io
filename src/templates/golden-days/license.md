## License

Golden Days is All Rights Reserved. This means you are not allowed to redistribute, repackage, modify, or edit any original assets from the pack without using official download links or getting explicit permission from the copyright holder, PoeticRainbow. This is included but not limited to: resource packs, server resource packs, data packs, mods, and mod packs.

All Minecraft assets are owned my Mojang and are not subject to this license. This does not include recreations of Minecraft assets for modern versions like block models or animated textures.

### Mod Pack Policy:

Golden Days may be included in mod packs through **officially maintained downloads** links by PoeticRainbow. This currently includes Modrinth, CurseForge, and GitHub. In order to include Golden Days in your mod pack, you must ensure that the pack is **not redistributed inside any overrides**. This means that Golden Days is not being redistributed whole inside your mod pack but is instead **downloaded dynamically** by your users on install.

### Mod Pack Guide

It is against the rules of both [CurseForge](https://support.curseforge.com/support/solutions/articles/9000197279-moderation-policies#General-CurseForge-Moderation-Policies) and [Modrinth](https://modrinth.com/legal/rules) to reupload copyrighted content. Below are the files for the official platform mod pack formats that contain the references to dynamic assets. Golden Days must show up in this file with a link pointing to official content delivery networks owned by CurseForge, Modrinth, or the official [Golden Days GitHub](https://github.com/PoeticRainbow/golden-days/) repo. 

If the content specified within the code blocks below is not present within the files of your exported mod pack then you have most likely set up your mod pack incorrectly and are in violation of my license.


### Modrinth: 
`/modrinth.index.json`
```
{
  ...
  "files": [
    {
      "downloads": [
        "https://cdn.modrinth.com/data/[...]/versions/[...]/golden-days-..."
      ],
      ...
      "path": "resourcepacks/golden-days-[...].zip"
    }
  ],
  ...
}
```

### CurseForge:
Project IDs:
- [Golden Days Base](https://www.curseforge.com/minecraft/texture-packs/golden-days): `384081`
- [Golden Days Alpha](https://www.curseforge.com/minecraft/texture-packs/golden-days-alpha): `1131686`

`manifest.json`
```
{
  ...
  "files": [{"fileID": ..., "projectID": 384081, ...}],
  ...
}
```

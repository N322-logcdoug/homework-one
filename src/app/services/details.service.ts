import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  public mods = [
    {
      id: '0',
      modIcon: 'assets/quark.png',
      modTitle: 'Quark',
      modAuthor: 'Vazkii',
      modShort:
        'A Quark is a very small thing. This mod is a collection of small things...',
      modInfo:
        'Quark is a fully modular minecraft mod, named after the subatomic particle. In simpler terms, its a large mod with lots of small features, aimed at improving the vanilla game. Every feature can be turned on and off individually at your will, and most features contain further options to tweak the game just how you like it.',
    },
    {
      id: '1',
      modIcon: 'assets/supplementaries.gif',
      modTitle: 'Supplementaries',
      modAuthor: 'MehVahdJukaar',
      modShort:
        'Vanilla+ additions: Jars, signposts, faucets, weather vanes spring launchers, sconces, planters, lights, decoration and automation',
      modInfo:
        'Supplementaries is a highly configurable Forge mod focused on adding valuable content which fills the gaps vanilla has. Its features are tailored to be functional, aesthetically viable, and complementary to preexisting content and provide many new ways to enhance your Vanilla+ experience.',
    },
    {
      id: '2',
      modIcon: 'assets/thermal-foundation.png',
      modTitle: 'Thermal Foundation',
      modAuthor: 'TeamCoFH',
      modShort: 'The Foundation of a Thermally Expanding World!',
      modInfo:
        "The Foundation of a Thermally-enhanced world!\
        For nearly a decade, the Thermal Series mods have been a cornerstone of modded gameplay. They've pioneered gameplay innovations and optimizations used in practically every modern mod in existence. The Forge Energy system was built from Redstone Flux, and many common modded features - side reconfiguration, advanced redstone control, blue/orange input coloring - all started with the Thermal Series.",
    },
    {
      id: '3',
      modIcon: 'assets/twilight.png',
      modTitle: 'The Twilight Forest',
      modAuthor: 'Benimatic',
      modShort:
        'A realm basked in mystery and eerie twilight, you will overpower terrifying creatures and secure... ',
      modInfo:
        '"Imagine stepping through a portal into a twilight realm, filled with trees as far as the eye can see. Breathtaking vistas and amazing discoveries await you around every corner. But beware! Not all denizens of the forest respond to your intrusion lightly." Twilight Forest is a dimension exploration mod focused on adventure that will take you on a journey to meet strange creatures, exploring dungeons, and much more.',
    },
    {
      id: '4',
      modIcon: 'assets/farmers-delight.png',
      modTitle: "Farmer's Delight",
      modAuthor: 'vectorwing',
      modShort: 'A lightweight expansion to farming and cooking!',
      modInfo:
        "Farmer's Delight is a mod that gently expands upon farming and cooking in Minecraft. Using a simple cooking system and a few familiar ingredients, you'll be able to prepare a wide variety of hearty meals: from sandwiches to salads and stews, from beautiful desserts to mouth-watering feasts, no ingredient will be left behind in your kitchen! It also introduces a rich set of utilities: a way to improve the very soil your crops grow in, a brand new kind of tool to scavenge resources with, cute decorations for your builds, and many blocks and items to help you on your adventure! It's time to farm a little bit of everything!",
    },
    {
      id: '5',
      modIcon: 'assets/create.png',
      modTitle: 'Create',
      modAuthor: 'simibubi',
      modShort: 'Aesthetic Technology that empowers the Player',
      modInfo:
        "Welcome to Create, a mod offering a variety of tools and blocks for Building, Decoration and Aesthetic Automation. The added elements of tech are designed to leave as many design choices to the player as possible. With Create, the game isn't played inside a bunch of UIs, it challenges you to setup contraptions of animated components working together in many possible arrangements. Create's visual in-game documentation called 'Ponder' will guide you though all added mechanics and gadgets.",
    },
  ];
  constructor() {}

  //grabs the mod of that particular id
  getMod(modId: String) {
    for (let i = 0; i < this.mods.length; i++) {
      const element = this.mods[i];
      if (element.id === modId) {
        return element;
      }
    }
  }

  addMod(newMod) {
    this.mods.push(newMod);
  }
}

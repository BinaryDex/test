document.addEventListener('DOMContentLoaded', () => {
  const appsList = [
    {
      name: "! Request A Game",
      link: "https://forms.gle/fWnkEm4TPkxsEdgi8",
      image: "/assets/media/icons/request.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "! Report An Issue",
      link: "https://forms.gle/11PRscLxrBrrCm4j8",
      image: "/assets/media/icons/request.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Amazon Luna",
      link: "https://luna.amazon.com/",
      image: "/assets/media/icons/amazon-luna.png",
      categories: ['all'],
      blank: "true",
      error: false
    },
    {
      name: "Dynast.io",
      link: "https://dynast.io",
      image: "/assets/media/icons/dynast-io.png",
      categories: ['all', '2P'],
      error: false
    },
    // idk why brain test on poki doesnt work when i take out everything after "index.html?" so i left it there, usually it works without it tho
    {
      name: "Brain Test",
      link: "https://0322484b-7a58-4454-9667-f805afffded5.poki-gdn.com/2e6b68d3-0f43-4b84-9c14-ab59f94e566c/index.html?country=US&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-v3.132.1&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Fbrain-test-tricky-puzzles&gdhoist=yes&nonPersonalized=n&familyFriendly=n&categories=7%2C16%2C37%2C72%2C96%2C400%2C832%2C843%2C1140%2C1150%2C1159&special_condition=landing&game_id=0322484b-7a58-4454-9667-f805afffded5&game_version_id=2e6b68d3-0f43-4b84-9c14-ab59f94e566c",
      image: "/assets/media/icons/braintest.png",
      categories: ['all'],
      error: false
    },
    {
      name: "Snow Rider 3D",
      link: "https://html5.gamedistribution.com/rvvASMiM/3b79a8537ebc414fb4f9672a9b8c68c8/index.html?gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3Nub3dyaWRlcjNkLmNvbS8iLCJwYXJlbnREb21haW4iOiJzbm93cmlkZXIzZC5jb20iLCJ0b3BEb21haW4iOiJzbm93cmlkZXIzZC5jb20iLCJoYXNJbXByZXNzaW9uIjpmYWxzZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xNiJ9",
      image: "/assets/media/icons/snowrider3d.jpg",
      categories: ["all"],
      error: false
    },
    {
      name: "3 Slices",
      link: "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://rb.y2.ee/3slices/3slices.xml?v=1",
      image: "/assets/media/icons/3slices.jpg",
      categories: ["all"],
      error: false
    },
    {
      name: "ev.io",
      link: "https://ev.io",
      image: "/assets/media/icons/evio.jpg",
      categories: ["all", "2P"],
      error: false
    },
    {
      name: "Brain Test 2",
      link: "https://games.poki.com/458768/df221093-aae9-4c0d-b458-efb16ae8e3ab",
      image: "/assets/media/icons/braintest.png",
      categories: ['all'],
      error: false
    },
    {
      name: "Brain Test 3",
      link: "https://games.poki.com/458768/1f3ae540-a95f-4f20-a000-29512612e341",
      image: "/assets/media/icons/braintest3.png",
      categories: ['all'],
      error: false
    },
    {
      name: "Donitz - itch.io",
      link: "https://donitz.itch.io/",
      image: "/assets/media/icon/itch.png",
      categories: ['all'],
      error: false
    },
    {
      name: "Territorial.io",
      link: "https://territorial.io",
      image: "/assets/media/icons/territorialio.ico",
      categories: ['all', '2P'],
    },
    {
      name: "Stickman Hook",
      link: "/y/stickman-hook/index.html",
      image: "/assets/media/icons/stickmanhook.jpg",
      categories: ['all', 'local'],
      local: "true"
    },
    {
      name: "Tunnel Rush",
      link: "https://5dd2e8e4-015f-11ea-ad56-9cb6d0d995f7.poki-gdn.com/5627efae-e960-407d-82a5-3da708eb4e68/index.html",
      image: "/assets/media/icons/tunnelrush.png",
      categories: ['all', '2P'],
      error: false
    },
    {
      name: "Tunnel Rush 2",
      link: "https://a7e6d137-c3c1-46e6-a3db-04c2d33c98a8.poki-gdn.com/71e6bddd-9b0e-4621-a11a-9503086f69d5/index.html",
      image: "/assets/media/icons/tunnelrush2.png",
      categories: ['all'],
      error: false
    },
    {
      name: "Rainbow Obby",
      link: "https://785a4295-96c4-43e5-b237-fb07fc3ef44d.poki-gdn.com/f1d39f75-7a25-41de-86cf-ba00804737b5/index.html",
      image: "/assets/media/icons/rainbowobby.webp",
      categories: ['all', '2P'],
      error: false
    },
    {
      name: "Candy Jump",
      link: "https://candyjump.games235.com/",
      image: "/assets/media/icons/candyjump.jpg",
      categories: ['all'],
      error: false
    },
    {
      name: "Google Feud",
      link: "https://googlefeud.com/",
      image: "/assets/media/icons/googlefeud.png",
      categories: ['all'],
      error: false
    },
    {
      name: "Minecraft Classic",
      link: "https://classic.minecraft.net",
      image: "/assets/media/icons/mc.webp",
      categories: ['all', '2P'],
      error: false
    },
    {
      name: "Learn to Fly 3",
      link: "https://www.silvergames.com/en/learn-to-fly-3/iframe",
      image: "/assets/media/icons/learntofly3.png",
      categories: ['all'],
      error: false
    },
    {
      name: "Neal.Fun",
      link: "https://neal.fun",
      image: "/assets/media/icons/nealfun.png",
      categories: ['all'],
      error: false
    },
    {
      name: "YoHoHo.io",
      link: "https://yohoho.io/",
      image: "/assets/media/icons/yohoho.webp",
      categories: ['all', '2P'],
      error: false
    },
    {
      name: "Tetr.io",
      link: "https://tetr.io/",
      image: "/assets/media/icons/tetrio.ico",
      categories: ['all', '2P'],
      error: false
    },
    {
      name: "Time Shooter 2",
      link: "https://html5.gamedistribution.com/62a72f2da7cb4b609579a47653546e6a/",
      image: "/assets/media/icons/timeshooter2.jpeg",
      categories: ['all'],
      error: false
    },
    {
      name: "Merge Fruit",
      link: "https://html5.gamedistribution.com/2dee9d404697435aa76111eb4015e1d5/",
      image: "/assets/media/icons/mergefruit.jpeg",
      categories: ['all'],
      error: false
    },
    {
      name: "There Is No Game",
      link: "https://5dd2d607-015f-11ea-ad56-9cb6d0d995f7.poki-gdn.com/38959ae1-110b-49ab-86ae-df425fd7862a/index.html",
      image: "/assets/media/icons/thereisnogame.jpg",
      categories: ['all'],
      error: false
    },
    {
      name: "Jetpack Joyride",
      link: "/y/jetpack-joyride/index.html",
      image: "/assets/media/icons/jetpackjoyride.png",
      categories: ['all', 'local'],
      local: "true"
    },
    {
      name: "FeedVid",
      link: "https://v6p9d9t4.ssl.hwcdn.net/html/4941980-683813/index.html",
      image: "/assets/media/icons/feedvid.png",
      categories: ['all'],
      error: false
    },
    {
      name: "florr.io",
      link: "https://florr.io",
      image: "/assets/media/icons/florr.jpg",
      categories: ['all', '2P'],
      error: false
    },
    {
      name: "Rocket Bot Royale",
      link: "https://rocketbotroyale2.winterpixel.io/",
      image: "/assets/media/icons/rocketbotroyale.jpg",
      categories: ['all'],
      error: false
    },
    {
      name: "Happy Wheels",
      link: "https://files.crazygames.com/ruffle/happywheels.html",
      image: "/assets/media/icons/happywheels.jpg",
      categories: ['all'],
      error: false
    },
    {
      name: "Papa's Burgeria",
      link: "https://www.coolmathgames.com/0-papas-burgeria/play",
      image: "/assets/media/icons/papasburgeria.jpg",
      categories: ['all'],
      error: false
    },
    {
      name: "Papa's Cheeseria",
      link: "https://www.coolmathgames.com/0-papas-cheeseria/play",
      image: "/assets/media/icons/papascheeseria.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Papa's Pancakeria",
      link: "https://www.coolmathgames.com/0-papas-pancakeria/play",
      image: "/assets/media/icons/papaspancakeria.jpg",
      categories: ['all'],
      error: false
    },
    {
      name: "Papa's Wingeria",
      link: "https://www.coolmathgames.com/0-papas-wingeria/play",
      image: "/assets/media/icons/papaswingeria.png",
      categories: ['all'],
      error: false
    },
    {
      name: "Riddle School 1",
      link: "https://uploads.ungrounded.net/ruffle_wrapper/ruffleembed.html?v=1.0.67&browsermode=default&props=%7B%22ruffle%22%3A%22%2Fruffle_wrapper%2Flib%2Fruffle.js%3F1695474658%22%2C%22public_path%22%3A%22%2Fruffle_wrapper%2Flib%2F%22%2C%22swf%22%3A%22https%3A%2F%2Fuploads.ungrounded.net%2F314000%2F314680_Riddle_School.swf%3F1148577264%22%2C%22vars%22%3A%7B%22NewgroundsAPI_PublisherID%22%3A1%2C%22NewgroundsAPI_SandboxID%22%3A%2265103f0745c96%22%2C%22NewgroundsAPI_SessionID%22%3A%22%22%2C%22NewgroundsAPI_UserName%22%3A%22%26lt%3Bdeleted%26gt%3B%22%2C%22NewgroundsAPI_UserID%22%3A0%2C%22ng_username%22%3A%22%26lt%3Bdeleted%26gt%3B%22%7D%2C%22width%22%3A550%2C%22height%22%3A400%2C%22icon%22%3A%22https%3A%2F%2Fpicon.ngfiles.com%2F314000%2Fflash_314680_card.png%3Ff1607914286%22%2C%22warnOnUnsupportedContent%22%3Afalse%7D",
      image: "/assets/media/icons/riddleschool1.png",
      categories: ['all'],
      error: false
    },
    {
      name: "Papa's Scooperia",
      link: "https://files.crazygames.com/ruffle/papasscooperia.html",
      image: "/assets/media/icons/papasscooperia.jpg",
      categories: ['all'],
      error: false
    },
    {
      name: "Papa's Sushiria",
      link: "https://files.crazygames.com/ruffle/papassushiria.html",
      image: "/assets/media/icons/papassushiria.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Eaglercraft 1.5.2",
      link: "https://interstellar-assets.pages.dev/minecraft-15/",
      image: "/assets/media/icons/mc.webp",
      categories: ['all', '2P'],
      error: false
    },
    {
      name: "Burrito Bison",
      link: "https://f.silvergames.com/awayfl/index.html?swf=burrito-bison.swf",
      image: "/assets/media/icons/burritobison.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Gunspin",
      link: "https://html5.gamedistribution.com/rvvASMiM/917cce8c44c44638a8cdc2a1794b65c8/index.html",
      image: "/assets/media/icons/gunspin.jpg",
      categories: ['all'],
      error: false
    },
    {
      name: "Thelast Royale",
      link: "https://thelast.io",
      image: "/assets/media/icons/thelast-io.png",
      categories: ['all', '2P'],
      error: false
    },
    {
      name: "mope.io",
      link: "https://thelast.io",
      image: "/assets/media/icons/mope-io.jpg",
      categories: ['all', '2P'],
      error: false
    },
    {
      name: "Tiny Fishing",
      link: "https://www.dob5.com/d/file/games/tiny-fishing/",
      image: "/assets/media/icons/tinyfishing.jpg",
      categories: ['all'],
      error: false
    },
    {
      name: "Johnny Upgrade",
      link: "https://lagged.com/api/play2/johnny-upgrade3/",
      image: "/assets/media/icons/johnnyupgrade.png",
      categories: ['all'],
      error: false
    },
    {
      name: "bloxd.io",
      link: "https://bloxd.io",
      image: "/assets/media/icons/bloxd-io.jpg",
      categories: ['all', '2P'],
      error: false
    },
    {
      name: "Duck Life 1",
      link: "https://www.hoodamath.com/mobile/games/duck-life/game.html",
      image: "/assets/media/icons/ducklife.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Duck Life 2",
      link: "https://www.hoodamath.com/mobile/games/duck-life-2-world-champion/game.html",
      image: "/assets/media/icons/ducklife.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Duck Life 3",
      link: "https://www.hoodamath.com/mobile/games/duck-life-3-evolution/game.html",
      image: "/assets/media/icons/ducklife.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Duck Life 4",
      link: "https://www.hoodamath.com/mobile/games/duck-life-4/game.html",
      image: "/assets/media/icons/ducklife.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Papa's Freezeria",
      link: "https://www.coolmathgames.com/0-papas-freezeria/play",
      image: "/assets/media/icons/papasfreezeria.png",
      categories: ['all', '2P'],
      error: false
    },
    {
      name: "Evades",
      link: "https://evades.io",
      image: "/assets/media/icons/evadesio.webp",
      categories: ['all,', '2P'],
      error: false
    },
    {
      name: "Bullet Force Multiplayer",
      link: "https://www.crazygames.com/game/bullet-force-multiplayer",
      image: "/assets/media/icons/BFM.png",
      categories: ['all,', '2P'],
      error: false
    },
    {
      name: "Crazy Games",
      link: "https://www.crazygames.com/",
      image: "/assets/media/icons/crazy.png",
      categories: ['all,', 'emu,', '2P,', 'sports,', 'flash' ],
      error: false
    },
    {
      name: "Cubes 2048",
      link: "https://www.crazygames.com/game/cubes-2048-io",
      image: "/assets/media/icons/C2048.jpg",
      categories: ['all,', '2P'],
      error: false
    },
              {
      name: "DOOM",
      link: "https://archive.org/details/doom-play",
      image: "/assets/media/icons/DOOM.jpg",
      categories: ['all,', 'emu'],
      error: false
    },
    {
      name: "FNAF 2",
      link: "https://sussygamedeveloper.github.io/FNAF2/",
      image: "/assets/media/icons/FNAF2.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "FNAF 3",
      link: "https://sussygamedeveloper.github.io/fnaf3/",
      image: "/assets/media/icons/FNAF3.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "FNAF Web",
      link: "https://wellsousaaa.github.io/Five-Nights-at-Freddys-Web/",
      image: "/assets/media/icons/FNAFWeb.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "GBA Emulator",
      link: "https://ds.44670.org/gba/",
      image: "/assets/media/icons/gba.jpg",
      categories: ['all,', 'emu'],
      error: false
    },
    {
      name: "Itch.io",
      link: "https://itch.io",
      image: "/assets/media/icons/itch.png",
      categories: ['all,', 'emu,', '2P'],
      error: false
    },
            {
      name: "N-Gon",
      link: "https://landgreen.github.io/sidescroller/",
      image: "/assets/media/icons/NGON.png",
      categories: ['all'],
      error: false
    },
    {
      name: "Nintendo DS Emulator",
      link: "https://ds.44670.org/",
      image: "/assets/media/icons/ds.png",
      categories: ['all,', 'emu'],
      error: false
    },
        {
      name: "Nintendo 64 Emulator",
      link: "https://www.neilb.net/n64wasm/",
      image: "/assets/media/icons/N64.png",
      categories: ['all,', 'emu'],
      error: false
    },
    {
      name: "Run 3",
      link: "https://www.coolmathgames.com/0-run-3/play",
      image: "/assets/media/icons/run3.png",
      categories: ['all,', 'flash'],
      error: false
    },
    {
      name: "Subway Surfers: San Francisco ",
      link: "https://raw.githack.com/3kh0/3kh0-assets/main/subway-surfers/index.html",
      image: "/assets/media/icons/SF.webp",
      categories: ['all,', 'emu'],
      error: false
    },
    {
      name: "Survivor.io",
      link: "https://html5.gamedistribution.com/rvvASMiM/f1c451e586c04b4c8cba01b0c50d9090/index.html",
      image: "/assets/media/icons/SVI.png",
      categories: ['all,', 'emu'],
      error: false
    },
          {
      name: "Web Retro",
      link: "https://binbashbanana.github.io/webretro/",
      image: "/assets/media/icons/webretro.png",
      categories: ['all,', 'emu'],
      error: false
    },
    {
      name: "Slope",
      link: "https://watchdocumentaries.com/wp-content/uploads/games/slope/",
      image: "/assets/media/icons/slope.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Fortnite",
      link: "https://play.geforcenow.com/mall/#/deeplink?game-id=46bfab06-d864-465d-9e56-2d9e45cdee0a",
      image: "/assets/media/icons/fortnite.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Bomb Party",
      link: "https://jklm.fun",
      image: "/assets/media/icons/BP.png",
      categories: ['all,', '2P'],
      error: false
    },
  {
    name: "1",
    link: "https://hgentry.github.io/1/",
    image: "/assets/media/icons/1.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "1v1.LOL",
    link: "https://1v1.lol",
    image: "/assets/media/icons/1v1-lol.webp",
    categories: ['all,', '2P'],
    error: false
  },
  {
    name: "2D Rocket League",
    link: "https://v6p9d9t4.ssl.hwcdn.net/html/3325334/index.html",
    image: "/assets/media/icons/2D-Rocket-League.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "3D Dino Game",
    link: "https://lagged.com/api/play2/t-rex-3d2/",
    image: "/assets/media/icons/trex-run-3D.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "60 Sec. Burger Run",
    link: "https://www.coolmathgames.com/0-60-second-burger-run/play",
    image: "/assets/media/icons/60-second-burger-run.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "8 Ball Pool",
    link: "https://8ball-pool.io",
    image: "/assets/media/icons/8ball.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "A Dark Room",
    link: "https://adarkroom.doublespeakgames.com",
    image: "/assets/media/icons/ADR.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Ace Attorney",
    link: "https://f.kbhgames.com/r/gba/?r=ace-attorney",
    image: "/assets/media/icons/aa.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "AC - Wild World",
    link: "https://static.arcadespot.com/retroemulator.php?system=nds&game=2017/10/animal-crossing-wild-world1.zip",
    image: "/assets/media/icons/acww.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Adventure Capitalist",
    link: "https://kdata1.com/2021/03/adcapitalist/",
    image: "/assets/media/icons/adventure-capitalist.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Stick Fight 2",
    link: "https://kdata1.com/2015/9/stick-fight-2/",
    image: "/assets/media/icons/stickfight2.png",
    categories: ['all'],
    error: false
  },
  {
    name: "Agar.io",
    link: "https://agar.io",
    image: "/assets/media/icons/agario.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Among Us (Scratch)",
    link: "https://turbowarp.org/523967150/fullscreen",
    image: "/assets/media/icons/scratch-among-us.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Basket Random",
    link: "https://html5.gamedistribution.com/rvvASMiM/bf1268dccb5d43e7970bb3edaa54afc8/index.html",
    image: "/assets/media/icons/br.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Basketball Stars",
    link: "https://html5.gamedistribution.com/69d78d071f704fa183d75b4114ae40ec/",
    image: "/assets/media/icons/basketball-stars.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Basketball Bros",
    link: "https://www.basketbros.io/",
    image: "/assets/media/icons/basket-bros.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Basketball Legends",
    link: "https://www.basketballlegends.fun/gamedata/basketball-legends-2020",
    image: "/assets/media/icons/basketball-legends.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Bitlife",
    link: "https://xlegends.github.io/bitlife/",
    image: "/assets/media/icons/bitlife.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "BTD 4",
    link: "https://en.gameslol.net/data/bloons-td-4/index.html",
    image: "/assets/media/icons/btd4.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "BuildNow.GG",
    link: "https://games.crazygames.com/en_US/buildnow-gg/index.html",
    image: "/assets/media/icons/build-now.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Cat Ninja",
    link: "https://4iapq88o5f3gc1dij3it0mp5jojnm3jr-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%252Fcat-ninja.xml",
    image: "/assets/media/icons/cat-ninja.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Candy Box",
    link: "https://candybox2.net",
    image: "/assets/media/icons/candybox.webp",
    categories: ["all"],
    error: false
  },
    {
      name: "Celeste PICO-8",
      link: "https://exok.com/minigames/celeste.html",
      image: "/assets/media/icons/celeste.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Clicker Heros",
      link: "https://www.clickerheroes.com/play.html",
      image: "/assets/media/icons/clickerheros.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Chess.com",
      link: "https://chess.com",
      image: "/assets/media/icons/chess.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Cluster Rush",
      link: "/y/Cluster-Rush/index.html",
      image: "/assets/media/icons/cluster-rush.webp",
      categories: ["all", 'local'],
      local: "true"
    },
    {
      name: "Cookie Clicker",
      link: "https://orteil.dashnet.org/cookieclicker/",
      image: "/assets/media/icons/cookieclicker.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Crossy Road",
      link: "https://5dd2e1e3-015f-11ea-ad56-9cb6d0d995f7.poki-gdn.com/169dc11d-e718-4b36-9e60-d5ed5bc07a31/index.html",
      image: "/assets/media/icons/cr.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Deepest Sword",
      link: "https://v6p9d9t4.ssl.hwcdn.net/html/4017918/index.html",
      image: "/assets/media/icons/deepest-sword.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Diep.io",
      link: "https://diep.io/",
      image: "/assets/media/icons/diep.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Doge Miner 1",
      link: "https://dogeminer.se/",
      image: "/assets/media/icons/doge-miner-1.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Doom 1",
      link: "https://browncha023.github.io/GBA/launcher.html#dm",
      image: "/assets/media/icons/doom1.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Doom 2",
      link: "https://browncha023.github.io/GBA/launcher.html#dm2",
      image: "/assets/media/icons/doom2.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Dreader",
      link: "https://donitz.itch.io/dreader",
      image: "/assets/media/icons/dreader.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Drift Boss",
      link: "https://watchdocumentaries.com/wp-content/uploads/games/drift-boss/",
      image: "/assets/media/icons/db.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Drift Hunters",
      link: "https://webglmath.github.io/drift-hunters/",
      image: "/assets/media/icons/drift-hunters.webp",
      categories: ["all"],
      say: "This game may take a while to load, but it is working."
    },
    {
      name: "Drive Mad",
      link: "https://watchdocumentaries.com/wp-content/uploads/games/drive-mad/",
      image: "/assets/media/icons/dm.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Eaglercraft 1.8",
      link: "http://raw.githack.com/3kh0/3kh0-assets/main/minecraft-18/index.html",
      image: "/assets/media/icons/mc.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Fallout 2",
      link: "https://jonasz-o.itch.io/fallout2remake3d",
      image: "/assets/media/icons/fallout2.gif",
      categories: ["all"],
      error: false
    },
    {
      name: "FNAF 2 (Scratch)",
      link: "https://scratch.mit.edu/projects/469219637/embed/",
      image: "/assets/media/icons/fnaf2.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "Friday Night Funkin'",
      link: "https://w8.snokido.com/games/html5/friday-night-funkin/0281/index.html",
      image: "/assets/media/icons/fnf.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "FNF - Lofi Mod",
      link: "https://fnf.kdata1.com/lofi-funkin/2/",
      image: "/assets/media/icons/lofi.webp",
      categories: ["all"],
      error: false
    },
    {
      name: "FNF VS. Snorlax",
      link: "https://fnf.kdata1.com/snorlax/1/",
      image: "/assets/media/icons/snorlax.webp",
      categories: ["all"],
      error: false
    },
      {
        name: "JustFall.LOL",
        link: "https://justfall.lol",
        image: "/assets/media/icons/just-fall-lol.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Kirby Mirror (GBA)",
        link: "https://www.retrogames.onl/gba/kirby-mirror-gba.html",
        image: "/assets/media/icons/kirby.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Krunker",
        link: "https://krunker.io",
        image: "/assets/media/icons/krunker.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "G-Switch",
        link: "https://5dd24442-015f-11ea-ad56-9cb6d0d995f7.poki-gdn.com/4f2c69b4-3edc-4cd7-a078-efd3d1ea9fb5/index.html",
        image: "/assets/media/icons/gswitch.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "G-Switch 2",
        link: "https://5dd27095-015f-11ea-ad56-9cb6d0d995f7.poki-gdn.com/e0e70ee4-fdd4-4de8-931d-fde7d1cb408b/index.html",
        image: "/assets/media/icons/gswitch2.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "G-Switch 3",
        link: "https://5dd2b395-015f-11ea-ad56-9cb6d0d995f7.poki-gdn.com/120fdec6-7eeb-470f-a43c-9bcdace0dacb/index.html",
        image: "/assets/media/icons/gswitch3.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Golden Eye 007",
        link: "https://f.kbhgames.com/r/n64/game.php?file=007-golden-eye.zip",
        image: "/assets/media/icons/golden-eye-007.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "GBA Games 2",
        link: "https://cattn.github.io/gba/",
        image: "/assets/media/icons/gba.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Geforce NOW",
        link: "https://play.geforcenow.com",
        image: "/assets/media/icons/apps/geforce-now.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Haunted School 1",
        link: "https://games.crazygames.com/en_US/haunted-school---horror-game/index.html",
        image: "/assets/media/icons/na.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Helixteus 3",
        link: "https://hole-io.com/",
        image: "/assets/media/icons/helixteus.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Hole.IO",
        link: "https://hole-io.com/",
        image: "/assets/media/icons/hole.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Idle Breakout",
        link: "https://interstellarnetwork.github.io/Interstellar-Assets/play/idle-breakout/index.html",
        image: "/assets/media/icons/idle.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Isleward",
        link: "https://play.isleward.com",
        image: "/assets/media/icons/isleward.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Interactive Buddy",
        link: "https://f.silvergames.com/ruffle/player.php?id=204",
        image: "/assets/media/icons/interactive-buddy.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "NGU Idle",
        link: "https://cache.armorgames.com/files/games/ngu-idle-18444/index.html?v=1559319416",
        image: "/assets/media/icons/nguidle.jpg",
        categories: ["all"],
        error: false
      },
      {
        name: "Jacksmith",
        link: "https://www.coolmathgames.com/0-jacksmith/play",
        image: "/assets/media/icons/jacksmith.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Sandtrix",
        link: "https://files.crazygames.com/sandtrix/16/index.html",
        image: "/assets/media/icons/sandtrix.jpg",
        categories: ["all"],
        error: false
      },
      {
        name: "Learn To Fly Idle",
        link: "https://www.gameslol.net/data/waflash/index.php?g=635",
        image: "/assets/media/icons/ltf_idle.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Lordz.io",
        link: "https://lordz.io/",
        image: "/assets/media/icons/lordz.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Masked IO",
        link: "https://unblocked-games.s3.amazonaws.com/games/masked-io/index.html",
        image: "/assets/media/icons/masked-forces.webp",
        categories: ["all"],
        error: false
      },
      {
        name: "Mobs Inc",
        link: "https://overboy.itch.io/mobs-inc",
        image: "/assets/media/icons/mobsinc.webp",
        categories: ["all"],
        error: false
      },  
      {
        name: "Monkey Mart",
        link: "/y/monkey-mart/index.html",
        image: "/assets/media/icons/mm.webp",
        categories: ['all', 'local'],
        local: "true"
      },
      {
        name: "MooMoo.io",
        link: "https:/moomoo.io",
        image: "/assets/media/icons/moo.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "Mortal Kombat 4",
        link: "https://f.kbhgames.com/r/n64/game.php?file=Mortal-Kombat-4-U.zip",
        image: "/assets/media/icons/na.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "Mr.Mine",
        link: "https://www.coolmathgames.com/0-mr-mine/play",
        image: "/assets/media/icons/mrmine.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "Moto X3M",
        link: "https://html5.gamedistribution.com/rvvASMiM/5b0abd4c0faa4f5eb190a9a16d5a1b4c/index.html",
        image: "/assets/media/icons/mx3m.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "MX3M: Pool Party",
        link: "https://h0jokl1egt0fd4oc8qv3j0tltl9jbqhn-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://649025137-174029463385024710.preview.editmysite.com/uploads/b/139890129-767696982876512205/files/mx3mpp.xml",
        image: "/assets/media/icons/mx3m.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "MX3M: Spooky Land",
        link: "https://html5.gamedistribution.com/rvvASMiM/b8a342904608470a9f3382337aca3558/index.html",
        image: "/assets/media/icons/mx3m-spooky.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "MX3M: Winter",
        link: "https://www-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://sites.google.com/site/s017q3e/moto-x3m-4-winter.xml",
        image: "/assets/media/icons/mx3m-winter.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "NG Space Company",
        link: "https://interstellarnetwork.github.io/interstellar-assets/play/ng-space-company/frontend/dist/index.html",
        image: "/assets/media/icons/ng.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "Ninja Cat Exploit",
        link: "https://html5.gamedistribution.com/rvvASMiM/903ba9346b9d437e9c7e81d672cead44/index.html",
        image: "/assets/media/icons/ninja-cat.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "OvO",
        link: "https://8rlfg0ch3417et18dp8lvps6uo7c3b2c-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://427396048-642845047394716217.preview.editmysite.com/uploads/b/139890129-761103484729797659/files/ovo.xml",
        image: "/assets/media/icons/ovo.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "Online Racing Game!",
        link: "https://jchabin.github.io/cars/",
        image: "/assets/media/icons/OR.png",
        categories: ['all'],
        error: false
      },
      {
        name: "Online Soccer M.",
        link: "https://www.onlinesoccermanager.com/",
        image: "/assets/media/icons/osm.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "Papa's Bakeria",
        link: "https://f.silvergames.com/emu/waffle/?id=5458",
        image: "/assets/media/icons/bakeria.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "Papa's Cupcakeria",
        link: "https://f.silvergames.com/emu/waffle/?id=3246",
        image: "/assets/media/icons/cupcakeria.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "Papa Louie 1",
        link: "https://f.silvergames.com/ruffle/player.php?id=1373",
        image: "/assets/media/icons/louie1.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "Papa Louie 2",
        link: "https://f.silvergames.com/emu/waffle/?id=3042",
        image: "/assets/media/icons/louie2.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "Papa Louie 3",
        link: "https://f.silvergames.com/emu/waffle/?id=4693",
        image: "/assets/media/icons/papa-louie-3.webp",
        categories: ['all'],
        error: false
      },
      {
        name: "Papa's Pizzeria",
        link: "https://f.silvergames.com/ruffle/player.php?id=1360",
        image: "/assets/media/icons/pizzeria.webp",
        categories: ['all'],
        error: false
      },
      {
    name: "Paper Mario 64",
    link: "https://f.kbhgames.com/r/n64/game.php?file=Paper%20Mario%20(USA).zip",
    image: "/assets/media/icons/paper-mario-64.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Paper.io",
    link: "https://paper-io.com/",
    image: "/assets/media/icons/paperio.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Pixel Shooter",
    link: "https://94bfktj403i6m18as4vkvtreqd0ohci4-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://274019683-173520394482650759.preview.editmysite.com/uploads/b/139890129-131715539788281629/files/ps.xml",
    image: "/assets/media/icons/pixel-shooter.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Pizza Tower",
    link: "https://gamaverse.com/c/f/g/pizza-tower-1678640389/index.html",
    image: "/assets/media/icons/pizza-tower.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Precision Client",
    link: "http://raw.githack.com/3kh0/3kh0-assets/main/precision-client/index.html",
    image: "/assets/media/icons/precision.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Rainbow Six Siege",
    link: "https://play.geforcenow.com/games?game-id=1dd07d47-6601-42f7-80e9-e4d8db08ea1b&lang=en_US&asset-id=01_44417-48c3d8e642e2",
    image: "/assets/media/icons/r6.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Red Ball 1",
    link: "https://www.algebrashelper.com/redball",
    image: "/assets/media/icons/redball1.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Red Ball 2",
    link: "https://www.algebrashelper.com/redball-2",
    image: "/assets/media/icons/redball2.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Red Ball 4",
    link: "https://www.algebrashelper.com/redball-4",
    image: "/assets/media/icons/redball4.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Red Ball 4 Vol. 2",
    link: "https://www.algebrashelper.com/read-ball-4v2",
    image: "/assets/media/icons/redball4vol2.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Red Ball 4 Vol. 3",
    link: "https://www.algebrashelper.com/red-ball-4v3",
    image: "/assets/media/icons/redball4vol3.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Retro Arch",
    link: "https://binbashbanana.github.io/webretro/",
    image: "/assets/media/icons/retroarch.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Riddle School 2",
    link: "https://f.silvergames.com/ruffle/player.php?id=8564",
    image: "/assets/media/icons/rs1.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Rocket Pult",
    link: "https://v6p9d9t4.ssl.hwcdn.net/html/565140/index.html",
    image: "/assets/media/icons/rocketpult.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Rooftop Snipers",
    link: "https://html5.gamedistribution.com/rvvASMiM/c3a70ae98547407a92ebedca8b79fdfa/index.html",
    image: "/assets/media/icons/rooftop.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Sand Spiel",
    link: "https://sandspiel.club/",
    image: "/assets/media/icons/sand.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Sandboxels",
    link: "https://v6p9d9t4.ssl.hwcdn.net/html/5808591/index.html",
    image: "/assets/media/icons/sandboxels.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Shapez.IO",
    link: "https://shapez.io",
    image: "/assets/media/icons/shapezio.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Shell Shockers",
    link: "https://shellshock.io/",
    image: "/assets/media/icons/shell-shockers.webp",
    categories: ['all'],
    error: false
  },
  {
    name: "Slither Io",
    link: "http://slither.io/",
    image: "/assets/media/icons/slither.webp",
    categories: ['all'],
    error: false
  },
    {
      name: "Smash Bros 64",
      link: "https://emulatorgames.online/games/n64/super-smash-bros",
      image: "/assets/media/icons/super-smash-bros-64.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Smash Karts",
      link: "https://smashkarts.io/",
      image: "/assets/media/icons/smashkarts.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Snowball.io",
      link: "https://games.crazygames.com/en_US/snowball-io/index.html",
      image: "/assets/media/icons/snowball.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Space Plan",
      link: "http://jhollands.co.uk/spaceplan/",
      image: "/assets/media/icons/spaceplan.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Stumble Guys",
      link: "https://www.stumbleguys.com/play",
      image: "/assets/media/icons/stumble-guys.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Stumble Guys Clone",
      link: "https://stumble-guys.io/stumble-guys.embed",
      image: "/assets/media/icons/stumble-guys.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Sugar Sugar HTML5",
      link: "https://66564262-37c6-4095-a731-535342e4bbe4.poki-gdn.com/5bd6e8c6-381d-4de5-9823-96662d29afaf/index.html",
      image: "/assets/media/icons/sugarsugar.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Super Mario 63",
      link: "https://www.numuki.com/gameframe/super-mario-63",
      image: "/assets/media/icons/sm63.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Super Mario 64",
      link: "https://f.kbhgames.com/r/n64/game.php?file=32112_super-mario-64-usa.zip",
      image: "/assets/media/icons/sm64.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Super Smash Flash",
      link: "https://f.kbhgames.com/RS/game.php?r=//f.kbhgames.com/2018/swf/smashflash.swf&w=1521&h=753",
      image: "/assets/media/icons/ssf1.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Supply Chain Idle",
      link: "http://chat.kongregate.com/gamez/0027/1653/live/index.html?kongregate_game_version=1554392772",
      image: "/assets/media/icons/na.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Taming.io",
      link: "https://taming.io/",
      image: "/assets/media/icons/tamingio.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Tanuki Sunset",
      link: "https://watchdocumentaries.com/wp-content/uploads/games/tanuki-sunset",
      image: "/assets/media/icons/tanuki.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "The Simpsons",
      link: "https://static.arcadespot.com/retroemulator.php?system=nds&game=2017/11/the-simpsons-game.zip",
      image: "/assets/media/icons/the-simpsons-game.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Temple Run 2",
      link: "https://watchdocumentaries.com/wp-content/uploads/games/temple-run-2/",
      image: "/assets/media/icons/temple-run-2.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Twitch Tetris",
      link: "https://www.rossipotti.de/ausgabe28/tetris/controls.html",
      image: "/assets/media/icons/na.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Vex 5",
      link: "https://raw.githack.com/3kh0/3kh0-assets/main/vex5/index.html",
      image: "/assets/media/icons/vex5.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Vex 7",
      link: "https://interstellarnetwork.github.io/interstellar-assets/play/vex7/index.html",
      image: "/assets/media/icons/vex7.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Voxiom.io",
      link: "https://voxiom.io/",
      image: "/assets/media/icons/voxiom.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Zombs.io",
      link: "https://zombs.io/",
      image: "/assets/media/icons/zombs-io.webp",
      categories: ['all'],
      error: false
    },
    {
      name: "Zombs Royale",
      link: "https://zombsroyale.io",
      image: "/assets/media/icons/zombs-royale.webp",
      categories: ['all,', '2P'],
      error: false
    },
    {
    name: "GBA Games",
    link: "https://real-sgs.vercel.app/Tools/GBA-Emulator",
    image: "/assets/media/icons/gba.webp",
    categories: ["all"],
    error: false
    },
    {
      name: "Retro Bowl",
      link: "/y/retro/index.html",
      image: "/assets/media/icons/retro.webp",
      categories: ["all,", 'sports', 'local'],
      local: "true",
      },
      {
        name: "Roblox (Now.GG)",
        link: "https://now.gg/play/roblox-corporation/5349/roblox",
        image: "/assets/media/icons/roblox.png",
        categories: ['all', 'emu']
      },
      {
        name: "Now.GG",
        link: "https://now.gg",
        image: "/assets/media/icons/now-gg.png",
        categories: ['all', 'emu']
      },
      {
        name: "Roblox (Now.GG Alternative)",
        link: "https://nowgg.nl/play/roblox-corporation/5349/roblox",
        image: "/assets/media/icons/roblox.png",
        categories: ['all', 'emu']
      },
      {
        name: "Now.GG (Alternative)",
        link: "https://nowgg.nl",
        image: "/assets/media/icons/now-gg.png",
        categories: ['all', 'emu']
      }
  ];
  
  function saveToLocal(path) {
    localStorage.setItem("savedPaths", path);
  }
  
  appsList.sort((a, b) => a.name.localeCompare(b.name));
  
  const nonPinnedApps = document.querySelector('.container-apps');
  const pinnedApps = document.querySelector('.pinned-apps');
  var pinList = localStorage.getItem("pinnedGames");
  try{
    pinList=pinList.split(",").map(Number)
    } catch {}
  var appInd = 0;
  appsList.forEach(app => {
    let pinNum = appInd
    const columnDiv = document.createElement('div');
    columnDiv.classList.add('column');
    columnDiv.setAttribute('data-category', app.categories.join(' '));

    const pinIcon = document.createElement('i');
    pinIcon.classList.add("fa");
    pinIcon.classList.add("fa-map-pin");
    pinIcon.ariaHidden = true;

    const btn = document.createElement('button');
    btn.appendChild(pinIcon);
    btn.style.float = "right";
    btn.style.backgroundColor="rgb(45,45,45)";
    btn.style.borderRadius="50%";
    btn.style.borderColor="transparent";
    btn.style.color="white";
    btn.style.top="-200px";
    btn.style.position="relative";
    btn.onclick = function () {
      setPin(pinNum);
    };
    btn.title="Pin";

    const link = document.createElement('a');

    if (app.local) {
      link.onclick = function() {
        if (typeof app.say !== 'undefined') {
          alert(app.say);
        }
        saveToLocal(app.link);
        window.location.href = '/w';
        return false;
      };
    } else if (app.blank) {
      link.onclick = function() {
        if (typeof app.say !== 'undefined') {
          alert(app.say);
        }
        blank(app.link);
        return false;
      };
    } else {
      link.onclick = function() {
        if (typeof app.say !== 'undefined') {
          alert(app.say);
        }
        images(app.link);
        return false;
      };
    }

    const image = document.createElement('img');
    image.width = 145;
    image.height = 145;
    image.src = app.image;
    image.loading = "lazy";


    const paragraph = document.createElement('p');
    paragraph.textContent = app.name;
    if (app.error) {
      paragraph.style.color = 'red';
    }

    link.appendChild(image);
    link.appendChild(paragraph);
    columnDiv.appendChild(link);
    if(appInd != 0) {
      columnDiv.appendChild(btn);
    }

    if(pinList!=null && appInd != 0) {
      if(pinContains(appInd,pinList)) {
        pinnedApps.appendChild(columnDiv);
      }
      else {
        nonPinnedApps.appendChild(columnDiv);
      }
    }
    else {
      nonPinnedApps.appendChild(columnDiv);
    }
    appInd++;
  });
  appsContainer.appendChild(pinnedApps);
  appsContainer.appendChild(nonPinnedApps);
});
function setPin(index) {
  pins = localStorage.getItem("pinnedGames");
  if(pins == null) {
    pins = [];
  }
  if(pins == "") {
    pins = [];
  }
  else {
    pins = pins.split(",").map(Number);
  }
  if(pinContains(index,pins)) {
    let remove = pins.indexOf(index);

    pins.splice(remove, 1);

  }
  else {
    pins.push(index);
  }
  localStorage.setItem("pinnedGames", pins);
  location.reload();
}
function pinContains(i,p) {
  if(p=="") {return false;}
  for(var x = 0; x < p.length; x++) {if(p[x]===i) {
    return true;
  }}
  return false;
}

function show_category() {
  var selectedCategories = Array.from(document.querySelectorAll("#category option:checked")).map(option => option.value);
  var games = document.getElementsByClassName("column");

  for (var i = 0; i < games.length; i++) {
    var game = games[i];
    var categories = game.getAttribute("data-category").split(" ");

    if (selectedCategories.length === 0 || selectedCategories.some(category => categories.includes(category))) {
      game.style.display = "block";
    } else {
      game.style.display = "none";
    }
  }
}

function search_bar() {
  var input = document.getElementById("searchbarbottom");
  var filter = input.value.toLowerCase();
  var games = document.getElementsByClassName("column");

  for (var i = 0; i < games.length; i++) {
    var game = games[i];
    var name = game.getElementsByTagName("p")[0].textContent.toLowerCase();

    if (name.includes(filter)) {
      game.style.display = "block";
    } else {
      game.style.display = "none";
    }
  }
}

import { Injectable, Type } from "@angular/core";

import { Item, Types } from "./item";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Ter Stegen", role: "Goalkeeper", score: 0, type : Types.SOCCER  },
        { id: 2, name: "Judilyn But-anon", role: "Programmer", score: 0, type : Types.SOCCER  },
        { id: 3, name: "Piqué", role: "Defender", score: 0, type : Types.SOCCER  },
        { id: 4, name: "I. Rakitic", role: "Midfielder", score: 0, type : Types.SOCCER  },
        { id: 5, name: "Sergio", role: "Midfielder", score: 0, type : Types.SOCCER  },
        { id: 6, name: "Denis Suárez", role: "Midfielder", score: 0, type : Types.SOCCER  },
        { id: 7, name: "Arda", role: "Midfielder", score: 0, type : Types.SOCCER  },
        { id: 8, name: "A. Iniesta", role: "Midfielder", score: 0, type : Types.SOCCER  },
        { id: 9, name: "Suárez", role: "Forward", score: 0, type : Types.SOCCER  },
        { id: 10, name: "Messi", role: "Forward", score: 0, type : Types.SOCCER  },
        { id: 11, name: "Neymar", role: "Forward", score: 0, type : Types.SOCCER  },
        { id: 12, name: "Rafinha", role: "Midfielder", score: 0, type : Types.SOCCER  },
        { id: 13, name: "Cillessen", role: "Goalkeeper", score: 0, type : Types.SOCCER  },
        { id: 14, name: "Mascherano", role: "Defender", score: 0, type : Types.SOCCER  },
        { id: 17, name: "Paco Alcácer", role: "Forward", score: 0, type : Types.SOCCER  },
        { id: 18, name: "Jordi Alba", role: "Defender", score: 0, type : Types.SOCCER  },
        { id: 19, name: "Digne", role: "Defender" , score: 0, type : Types.SOCCER },
        { id: 20, name: "Sergi Roberto", role: "Midfielder", score: 0, type : Types.SOCCER  },
        { id: 21, name: "André Gomes", role: "Midfielder" , score: 0, type : Types.SOCCER },
        { id: 22, name: "Aleix Vidal", role: "Midfielder", score: 0, type : Types.SOCCER  },
        { id: 23, name: "Umtiti", role: "Defender", score: 0, type : Types.SOCCER  },
        { id: 24, name: "Mathieu", role: "Defender", score: 0, type : Types.SOCCER   },
        { id: 25, name: "Masip", role: "Goalkeeper", score: 0, type : Types.SOCCER   },
        { id: 26, name: "Clint Moffatt", role: "Singer", score: 0, type : Types.ARTIST   },
        { id: 27, name: "Bob Moffatt", role: "Singer", score: 0, type : Types.ARTIST   },
        { id: 28, name: "Zhavia Ward", role: "Singer", score: 0, type : Types.ARTIST   },
        { id: 29, name: "Madison Beer", role: "Singer", score: 0, type : Types.ARTIST   },
        { id: 30, name: "Jacob Lee", role: "Singer", score: 0, type : Types.ARTIST   },
        { id: 31, name: "Taylor Swift", role: "Singer", score: 0, type : Types.ARTIST   },
        { id: 32, name: "Sarah Geronimo", role: "Singer", score: 0, type : Types.ARTIST   },
        { id: 33, name: "Demi Lovato", role: "Singer", score: 0, type : Types.ARTIST   },
        { id: 34, name: "Janine Berdin", role: "Singer", score: 0, type : Types.ARTIST   },
        { id: 35, name: "Michael Bubble", role: "Singer", score: 0, type : Types.ARTIST   },

        // { id: 1, name: "Ter Stegen", role: "Goalkeeper", image:`` },
        // { id: 3, name: "Piqué", role: "Defender", image:`` },
        // { id: 4, name: "I. Rakitic", role: "Midfielder", image:``  },
        // { id: 5, name: "Sergio", role: "Midfielder", image:``  },
        // { id: 6, name: "Denis Suárez", role: "Midfielder", image:``  },
        // { id: 7, name: "Arda", role: "Midfielder", image:``  },
        // { id: 8, name: "A. Iniesta", role: "Midfielder", image:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIlXUEya6bVy4ydWXtb0oVtFbOZ4xJjO45hC0pYcg_hQS8QtYZbw&s`  },
        // { id: 9, name: "Suárez", role: "Forward", image:`https://s.yimg.com/ny/api/res/1.2/jd2iiHe9QZjjMq7mKxUV2g--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-GB/homerun/uk.goal.com/f82d8627524e9926d94b58e0b83a6a15`  },
        // { id: 10, name: "Messi", role: "Forward", image:`https://i.pinimg.com/originals/2b/30/9e/2b309e0b1e32bb704f1cf96858d1f85e.jpg`  },
        // { id: 11, name: "Neymar", role: "Forward", image:`https://specials-images.forbesimg.com/imageserve/5cfeaad0142c50000a328969/416x416.jpg?background=000000&cropX1=683&cropX2=3482&cropY1=69&cropY2=2868`  },
        // { id: 12, name: "Rafinha", role: "Midfielder", image:`https://upload.wikimedia.org/wikipedia/commons/6/6e/Rafinha_2016.jpg`  },
        // { id: 13, name: "Cillessen", role: "Goalkeeper", image:`https://thumb.besoccer.com/media/img_news/agencia-efe_multimedia_3023490.multimedia.photos.12079428.file.jpg`  },
        // { id: 14, name: "Mascherano", role: "Defender", image:`https://images.daznservices.com/di/library/omnisport/49/19/javiermascherano-cropped_ejtd5ltm1t1h1rafsmsg1bzka.jpg?t=958255032&quality=100`  },
        // { id: 17, name: "Paco Alcácer", role: "Forward", image:`https://www.ruhrnachrichten.de/bilder/paco-alcacer-im-bvb-spielercheck-zum-saisonstart-20192020-1882939h.jpg`  },
        // { id: 18, name: "Jordi Alba", role: "Defender", image:`https://s.hs-data.com/bilder/spieler/gross/125417.jpg`  },
        // { id: 19, name: "Digne", role: "Defender", image:`https://static1.purepeople.com/articles/1/24/82/81/@/3483292-lucas-digne-lors-du-match-de-ligue-des-c-950x0-3.jpg`  },
        // { id: 20, name: "Sergi Roberto", role: "Midfielder", image:`https://s.hs-data.com/bilder/spieler/gross/171905.jpg`  },
        // { id: 21, name: "André Gomes", role: "Midfielder", image:`https://sportslens.com/wp-content/uploads/2018/08/Andre-Gomes-1.jpg`  },
        // { id: 22, name: "Aleix Vidal", role: "Midfielder", image:`https://upload.wikimedia.org/wikipedia/commons/9/93/2015_UEFA_Super_Cup_40.jpg`  },
        // { id: 23, name: "Umtiti", role: "Defender", image:`https://www.fcbarcelonanoticias.com/uploads/s1/11/65/26/0/samuel-umtiti-rodilla.jpeg`  },
        // { id: 24, name: "Mathieu", role: "Defender", image:`https://upload.wikimedia.org/wikipedia/commons/0/04/Tyrann_Mathieu_2018.JPG`  },
        // { id: 25, name: "Masip", role: "Goalkeeper", image:`https://s.hs-data.com/bilder/spieler/gross/171903.jpg`  },
        // { id: 26, name: "Judilyn But-anon", role: "Programmer", image:`https://lh3.googleusercontent.com/A00CDXxPpAKRqEeptmTUnzwoMLAYVLJAtClT6ux8tDOuYzQi6Xku8TS5S1JDNaTLrpg1i-kAwXunHfY7azgzhx5bjDoB-R4ajwzsGRhXzo65CzKdSWpPrHOljbuhzlyFj4HclKtls1EwPkiRqEfmGaXvzCH0cEVG7rqWgG25T7JQrUGmp811rx1JTyhkANk2pFKXHMiWkjMURvPgMETNkrpPg8-nWJNwphFbrzPeG_BpSXDiM2woSjIAOAA1F-nzh-xzZhsKjR6_6UyJL-8IgLUo-4wamp_eUBON07Ki26PFgCQZxnPBVJZe6wiZtZQB5QYMSdJ2wSiKGXG9tnpGOO9uaN8N2Cn0f5s8rw25-Vu-hmH6CLrGsd2Num7D43q5UIXGVFP45hgiMpO8BhHsGJayuiZtLR0KvHoNTBF1VGGnkW7_sz1mUciQVX631f8PkCTJMA6VstnDw_MyUpbJuBEflRDIbhNfXWTjLJ0B3CwfHLllURamMI1i7Lyhxn_Xp10qrcQ_fE9sLcuRXDDwQcbhTcC1vnawd5OWiExTyNAuMS60PGDwfxhZCFlhFrozWfqbzn1ANFMvL8vTAkGmNgESyo2TSKiqALn7z5AdqD10wQORBBUnajjnaWeBeSht76F4xfvt6qnQV5kemYH_Lo6FUK2iRGx8UR09tv-NmgBpFMg_pn_fEA=w1175-h881-no` }
    );

    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id === id)[0];
    }

    // getItemByType(type: Types): Array<Item>  {
    //     return this.items.filter((item) => item.type === type);
    // }

    getSoccer(): Array<Item>  {
        return this.items.filter((item) => item.type === "Soccer");
    }
    
    getArtist(): Array<Item>  {
        return this.items.filter((item) => item.type === "Artist");
    }

    // getItemByType(type : string): Array<Item>  {
    //     return this.items.filter((item) => item.type === type);
    // }

    addPerson(item : Item): void {
        this.items.push(item)
    }
   
}

import type { SlideDef } from "./shared";
import { D01 } from "./d01";
import { D02 } from "./d02";
import { D03 } from "./d03";
import { D04 } from "./d04";
import { D05 } from "./d05";
import { D06 } from "./d06";
import { D07 } from "./d07";
import { D08 } from "./d08";
import { D09 } from "./d09";
import { D10 } from "./d10";

export type Direction = { id: string; name: string; cls: string; slides: SlideDef[] };

export const DIRECTIONS: Direction[] = [
  { id: "D01", name: "ALFREDO Signature Refined", cls: "d01", slides: D01 },
  { id: "D02", name: "Premium Editorial Cutout", cls: "d02", slides: D02 },
  { id: "D03", name: "Cinematic Digital Future", cls: "d03", slides: D03 },
  { id: "D04", name: "ALFREDO Neo-Brutal Classroom", cls: "d04", slides: D04 },
  { id: "D05", name: "Glass Future Lab", cls: "d05", slides: D05 },
  { id: "D06", name: "Technical Blueprint", cls: "d06", slides: D06 },
  { id: "D07", name: "Storyboard Journey", cls: "d07 gx", slides: D07 },
  { id: "D08", name: "Immersive Layered Infographic", cls: "d08 gx", slides: D08 },
  { id: "D09", name: "Premium Minimal", cls: "d09 gx", slides: D09 },
  { id: "D10", name: "Character-Led ALFREDO Signature", cls: "d10 gx", slides: D10 },
];

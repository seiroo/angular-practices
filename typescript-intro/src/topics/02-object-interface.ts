let skills: string[] = ["bash", "counter", "healing"];

interface character {
  name: string;
  hp: number;
  skills: string[];
  homeTown?: string;
}

const strider: character = {
  name: "strider",
  hp: 100,
  skills: ["bash", "counter"],
};

strider.homeTown = "rivendell";

console.table(strider);

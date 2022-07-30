import { GridInterface } from "../models/GridInterface";

const gridData: GridInterface[] = [
  {
    id: 0,
    gridColumn: "1/8",
    gridRow: "1/7",
    gridTemplateColumns: "3fr 4fr",
  },
  {
    id: 1,
    gridColumn: "8/14",
    gridRow: "1/4",
    gridTemplateColumns: "4fr 4fr",
  },
  {
    id: 2,
    gridColumn: "1/4",
    gridRow: "7/15",
    gridTemplateRows: "1fr 7fr",
  },
  {
    id: 3,
    gridColumn: "8/14",
    gridRow: "7/15",
    gridTemplateRows: "3fr 5fr",
  },
  {
    id: 4,
    gridColumn: "1/9",
    gridRow: "16/24",
    gridTemplateColumns: "4fr 4fr",
  },
  {
    id: 5,
    gridColumn: "9/15",
    gridRow: "19/24",
    gridTemplateColumns: "3fr 3fr",
  },
  {
    id: 6,
    gridColumn: "1/7",
    gridRow: "24/33",
    gridTemplateRows: "2fr 7fr",
  },
  {
    id: 7,
    gridColumn: "9/15",
    gridRow: "24/35",
    gridTemplateRows: "3fr 8fr",
  },
];

export default function getGrid() {
  return gridData;
}

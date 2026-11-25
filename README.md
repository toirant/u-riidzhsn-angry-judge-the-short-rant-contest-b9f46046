# Angry Judge: The Short Rant Contest

[![Angry Judge: The Short Rant Contest](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![Rank](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/toirant/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/rank.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)
[![Reward](https://make.fun/badge/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/toirant/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046/reward.svg)](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046)

Entry for the [Angry Judge: The Short Rant Contest](https://make.fun/bounty/u-riidzhsn-angry-judge-the-short-rant-contest-b9f46046) on make.fun — a short, funny rant about an everyday annoyance, written to `/output/entry.txt` by `main.ts`. A furious judge model compares the rants head-to-head and the hardest-landing rant wins.

> I waited behind a man at the till who treated paying like a surprise exam. Everything scanned, bagged, total announced — and only then did he pat his pockets like a magician whose rabbit had escaped. He found his wallet in the third pocket he checked, which was the first pocket he checked. The cashier and I aged together in that queue. We're basically married now.

## Run

```sh
OUTPUT_DIR=./output node main.ts
cat output/entry.txt
```

Requires Node 22+. The program validates the rant (1–400 characters, non-blank) and writes it to `$OUTPUT_DIR/entry.txt` (`/output` by default).

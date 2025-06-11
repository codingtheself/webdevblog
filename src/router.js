
import Home from "./lib/Home.svelte";
import About from "./lib/About.svelte";
import Day01 from "./posts/day01.svelte";
import Day02 from "./posts/day02.svelte";
import Day03 from "./posts/day03.svelte";
import Day04 from "./posts/day04.svelte";
import Day05 from "./posts/day05.svelte";
import Day06 from "./posts/day06.svelte";
import Day07 from "./posts/day07.svelte";

const routes = {
  "/": Home,
  "/about": About,
  "/posts/day01": Day01,
  "/posts/day02": Day02,
  "/posts/day03": Day03,
  "/posts/day04": Day04,
  "/posts/day05": Day05,
  "/posts/day06": Day06,
  "/posts/day07": Day07,
  "*": Home
};

export default routes;
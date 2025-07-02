import { assert } from "https://deno.land/std/assert/mod.ts";
import { condition } from "../src/main.js";

Deno.test("Condition should be true", () => {
  assert(condition);
});

import { fileURLToPath } from "node:url";
import { suite, test, assert } from "vitest";

import { greet } from "../src/index.js";

const symbolDispose = Symbol.dispose || Symbol.for("dispose");

suite("basic tests", () => {
  test("named", async () => {
    assert.strictEqual(greet("joe"), "Hello, joe");
    assert.strictEqual(greet(), "Hello, world");
    assert.strictEqual(greet(undefined), "Hello, world");
    assert.strictEqual(greet(null), "Hello, world");
  });
});

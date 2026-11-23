import test from "node:test";
import assert from "node:assert/strict";
import { runSequentially } from "./runSequentially.js";

test("runSequentially", async (t) => {
  await t.test(
    "handles mixed sync and async tasks and returns results in order",
    async () => {
      const tasks = [
        () => Promise.resolve(1),
        () => 2,
        () => Promise.resolve(3),
      ];

      const results = await runSequentially(tasks);
      assert.deepEqual(results, [1, 2, 3]);
    },
  );

  await t.test("returns delayed task results in order", async () => {
    const tasks = [
      () => new Promise((resolve) => setTimeout(() => resolve(1), 10)),
      () => new Promise((resolve) => setTimeout(() => resolve(2), 50)),
      () => new Promise((resolve) => setTimeout(() => resolve(3), 15)),
    ];

    const results = await runSequentially(tasks);
    assert.deepEqual(results, [1, 2, 3]);
  });

  await t.test("handles an empty task list", async () => {
    const tasks = [];
    const results = await runSequentially(tasks);
    assert.deepEqual(results, []);
  });

  await t.test(
    "propagates task rejections and does not run remaining tasks",
    async (t) => {
      const task1 = t.mock.fn(() => Promise.resolve(1));
      const task2 = t.mock.fn(() => Promise.reject(new Error("Task failed")));
      const task3 = t.mock.fn(() => Promise.resolve(3));

      await assert.rejects(runSequentially([task1, task2, task3]), {
        name: "Error",
        message: "Task failed",
      });

      assert.equal(task1.mock.callCount(), 1);
      assert.equal(task2.mock.callCount(), 1);
      assert.equal(task3.mock.callCount(), 0);
    },
  );

  await t.test("propagates task rejections", async () => {
    const tasks = [
      () => Promise.resolve(1),
      () => Promise.reject(new Error("Task failed")),
      () => Promise.resolve(3),
    ];

    await assert.rejects(runSequentially(tasks), {
      name: "Error",
      message: "Task failed",
    });
  });
});
